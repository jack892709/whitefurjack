// Serverless Database by using Google Sheet & Google Script App

const _sheetId = '1NEJUmE-SP6tqwXKyNVU5F3lmCIdZx8Wd7b6Rj3flo_0'; // 輸入你的試算表ID
const _sheetName = 'outdoors';
const basicLastCol = 'E';

function doGet(e) {
    try {
        // let params = e.parameter;
        // let num = parseInt(params.num);
        // let dataRange = '!A1:E' + num;
        // let data =GetSheetData(_sheetId, 'outdoors', dataRange);//模擬取的的資料
        // let data =GetSheetData(_sheetId, 'outdoors', '!A1:D');//模擬取的的資料
        // console.log(data);

        // Input arguments //
        const params = e.parameter;
        const { topic } = params;
        const { type } = params; // basic(default), detail
        const { searchby } = params; // all(deafult), id, title
        let value;
        if (searchby === 'id') value = parseInt(params.value, 10);
        else value = params.value;

        // Decide Sheet //
        const sheetName = topic || _sheetName;
        const sheet = SpreadsheetApp.openById(_sheetId).getSheetByName(sheetName);

        // Decide Range
        // column range
        const lastCol = type === 'detail'
            ? columnToLetter(sheet.getLastColumn())
            : basicLastCol;
        // range
        let dataRange = '';
        const targetCol = columnToLetter(findInRow(1, searchby));
        switch (searchby) {
        case 'id': {
        }
        case 'title': {
            const targetRow = findInColumn(targetCol, value);
            dataRange = `!A${targetRow}:${lastCol}${targetRow}`;
            break;
        }
        default: {
            dataRange = `!A1:${lastCol}${sheet.getLastRow()}`;
            break;
        }
        }

        // Data
        const header = sheet.getRange(`!A1:${lastCol}1`).getValues(); // header
        const data = sheet.getRange(dataRange).getValues();
        let output = [];
        if (searchby) {
            output.push(header[0]);
            output.push(data[0]);
        } else output = data;

        return ContentService.createTextOutput(
            JSON.stringify(output),
        ).setMimeType(ContentService.MimeType.JSON); // 將文字轉為JSON格式
    } catch (err) {
        console.error(err); // 顯示錯誤訊息
    }
}

function testSomething() {
    // let id = 2;
    // let targetRow = findInColumn('A',id);
    // console.log('targetRow:', targetRow);
    // let dataRange = '!A'+targetRow+':E'+targetRow;
    // let data = GetSheetData(_sheetId, 'outdoors', dataRange);
    // console.log(data);

    // let sheet = SpreadsheetApp.openById(_sheetId).getSheetByName('outdoors')
    // let lastColumn = columnToLetter(sheet.getLastColumn());
    // console.log('lastColumn', lastColumn);
    // let titleCol = columnToLetter(findInRow(1, 'title'));
    // console.log('titleCol', titleCol);
    // let title = '劍龍稜';
    // let targetRow = findInColumn(titleCol, title);
    // let range = '!A' + targetRow+':' + lastColumn + targetRow;
    // let data = sheet.getRange(range).getValues();
    // console.log(data);

    const topic = '';
    const type = 'basic'; // basic(default), detail
    const searchby = ''; // all(deafult), id, title
    const value = 3;
    // let value = '關山';

    // Decide Sheet
    const sheetName = topic || _sheetName;
    const sheet = SpreadsheetApp.openById(_sheetId).getSheetByName(sheetName);

    // Decide Range
    // column range
    const lastCol = type === 'detail'
        ? columnToLetter(sheet.getLastColumn())
        : basicLastCol;
    // range
    let dataRange = '';
    const targetCol = columnToLetter(findInRow(1, searchby));
    console.log('targetCol', targetCol);
    switch (searchby) {
        case 'id': {
        }
        case 'title': {
            const targetRow = findInColumn(targetCol, value);
            dataRange = `!A${targetRow}:${lastCol}${targetRow}`;
            break;
        }
        default: {
            console.log('search undefined');
            dataRange = `!A1:${lastCol}${sheet.getLastRow()}`;
            break;
        }
    }

    const header = sheet.getRange(`!A1:${lastCol}1`).getValues(); // header
    const info = sheet.getRange(dataRange).getValues();
    let data = [];
    if (searchby) {
        data.push(header[0]);
        data.push(info[0]);
    } else data = info;

    console.log(data);
}

function getDataAll(sheetName) {
    // let data = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName)
    const data = SpreadsheetApp.openById(_sheetId)
        .getSheetByName(sheetName)
        .getDataRange()
        .getValues();
    console.log(data);
    return data;
}

function GetSheetData(sheetId, sheetName, range) {
    const spreadsheetId = sheetId;
    const rangeName = `${sheetName}${range}`;
    const { values } = Sheets.Spreadsheets.Values.get(spreadsheetId, rangeName);
    if (!values) {
        return 'No data fond in google sheet';
    }
    return values;
}

function findInColumn(column, data) {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    // let column = spreadsheet.getRange(column + ":" + column);  // like A:A
    const lastRow = spreadsheet.getActiveSheet().getLastRow();
    const columnRange = spreadsheet.getRange(
        `${column}1` + `:${column}${lastRow}`,
    );

    const values = columnRange.getValues();
    let row = 0;

    while (values[row] && values[row][0] !== data) {
        row++;
    }

    if (values[row][0] === data) return row + 1;
    return -1;
}

function findInRow(row, data) {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const lastCol = columnToLetter(spreadsheet.getActiveSheet().getLastColumn());
    const rowRange = spreadsheet.getRange(`A${row}:${lastCol}${row}`);

    const values = rowRange.getValues();
    console.log(values);
    let column = 0;

    while (values[0][column] && values[0][column] !== data) {
        column++;
    }

    if (values[0][column] === data) return column + 1;
    return -1;
}

function columnToLetter(column) {
    let temp,
        letter = '';
    while (column > 0) {
        temp = (column - 1) % 26;
        letter = String.fromCharCode(temp + 65) + letter;
        column = (column - temp - 1) / 26;
    }
    return letter;
}
