const fs = require('fs')
const { join } = require('path')
const dotenv = require('dotenv')
module.exports = dotenv.parse(fs.readFileSync(join(__dirname, '.env')))
