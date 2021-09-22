<template>
    <!-- <div class="cafe">
        <h1>This is an cafe page</h1>
    </div> -->
    <div class="page">
        <!-- <div class="tags">
            <a href="#kashk" class="tag">#Kaschk</a>
            <a href="#ruins" class="tag">#Ruins Coffee Roasters</a>
            <a href="#lightandshadow" class="tag">#只是光影</a>
            <a href="#swell" class="tag">#Swell Co. Café</a>
            <a href="#midnight" class="tag">#未央咖啡</a>
            <a href="#mahome" class="tag">#Ma Home</a>
            <a href="#shizen" class="tag">#息坐咖啡</a>
        </div> -->
        <!-- <div class="width-100">
            <div id="kashk" class="work">
                <div class="main-photo mb-4 mb-md-5">
                    <img src="../assets/images/kashk.jpg" alt="">
                </div>
                <div class="work-headline mb-4">
                    <h2 class="title fs-1 fw-bold mb-1 mb-md-3">Kashk</h2>
                    <span class="subtitle">Berlin, 2018</span>
                </div>
                <div class="work-content px-2 px-md-5">
                    <p class="mb-5">Best bar I have been in Berlin! Best bar I have been in Berlin! Best bar I have been in Berlin! Best bar I have been in Berlin! Best bar I have been in Berlin! Best bar I have been in Berlin! Best bar I have been in Berlin! Best bar I have been in Berlin! Best bar I have been in Berlin! Best bar I have been in Berlin! Best bar I have been in Berlin! Best bar I have been in Berlin! Best bar I have been in Berlin! Best bar I have been in Berlin! Best bar I have been in Berlin! Best bar I have been in Berlin! </p>
                    <div class="collapsible">
                        <input id="collapseKashk" class="" type="checkbox">
                        <label for="collapseKashk" class="round btn-light-grey mb-5" tabindex="0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </label>
                        <div class="collapsible-content" id="collapsible-test">
                            <img src="../assets/images/kashk-02.jpg" alt="">
                            <img src="../assets/images/kashk-03.jpg" alt="">
                            <img src="../assets/images/kashk-04.jpg" alt="">
                            <img src="../assets/images/kashk-05.jpg" alt="">
                            <img src="../assets/images/kashk-06.jpg" alt="">
                            <img src="../assets/images/kashk-07.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="tags">
            <a v-for="item in artList" :key="'link_' + item.abbr" :href="'#' + item.abbr" class="tag">#{{item.title}}</a>
        </div>
        <div class="width-100">
            <div v-for="item in artList" :key="'cafe_' + item.id" :id="item.abbr" class="work">
                <div class="main-photo mb-4 mb-md-5">
                    <img :src="item.img_url" alt="">
                </div>
                <div class="work-headline mb-4">
                    <h2 class="title fs-1 fw-bold mb-1 mb-md-3">{{item.title}}</h2>
                    <span class="subtitle">{{item.place}}, {{item.year}}</span>
                </div>
                <div class="work-content px-2 px-md-5">
                    <!-- <p class="mb-4 mb-md-5">{{item.description}}</p> -->
                    <div class="mb-4 mb-md-5">
                        <p class="mb-3" v-for="line,index in separateParagraph(item.description)" :key="index">{{line}}</p>
                    </div>
                    <div class="collapsible end-mark">
                        <input :id="'collapseCafe' + item.id" class="" type="checkbox">
                        <label :for="'collapseCafe' + item.id" class="round btn-light-grey mb-4 mb-md-5" tabindex="0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </label>
                        <div class="collapsible-content" id="collapsible-test">
                            <!-- <img v-for="photo,index in item.other" :key="'cafe_' + item.id + '_' + index" :src="photo" alt=""> -->
                            <img v-for="photo,index in item.other" :key="'cafe_' + item.id + '_' + index" v-lazy="photo" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page {
    padding-left: 5px;
    padding-right: 5px;

    // min-height: calc(100vh - 200px);
}
.tags {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 7rem;
    color: #727272;
    max-width: 768px;
    a {
        color: #727272;
        text-decoration: none;
    }
    .tag {
        display: inline-block;
        padding: 0.2rem;
        margin: 6px 12px;
        &:hover {
            color: #2f2f2f;
        }
    }
}
.max-width-1200 {
    max-width: 1200px;
}
.work {
    margin-bottom: 5rem;

    .main-photo img {
        width: 100%;
    }

    &-headline {
        text-align: center;
        .subtitle {
            font-size: 0.8rem;
        }
    }

    &-content {
        max-width: 1200px;
        margin: 0 auto;
        img {
            width: 100%;
            margin-bottom: 5px;
        }
        p {
            text-indent: 2rem;
        }
    }

}
.round {
    border-radius: 50%;
    background-color: aqua;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    text-align: center;
    line-height: 40px;
}
.btn-light-grey {
    color: #fff;
    background-color: #c4c4c4;
    &:hover {
        background-color: #727272;
    }
    svg {
        transition: transform 0.2s ease-out
    }
}
.collapsible {
     &-content {
        // display: none;
        max-height: 0px;
        transition: max-height 0.8s ease-in-out;
        overflow: hidden;
    }
    input[type='checkbox'] {
        display: none;

        &:checked + label + .collapsible-content {
            // max-height: 100%; // 100% would also work, but you’d lose the ability to use transitions
            max-height: 500vh; // use this one will have transistion effect
        }
        &:checked + .btn-light-grey {
            background-color: #727272;
            svg {
                transform: rotate(-180deg)  translateY(3px);
            }
        }
    }
    label {
        display: block;
        cursor: pointer;
        svg {
            width: 20px;
            height: 20px;
        }
    }
}
.end-mark {
    &::after {
        content: '';
        display: block;
        background: #2f2f2f;
        width: 20px;
        height: 1px;
        margin: 2rem auto 4rem auto;
    }
}
@media (min-width: 992px) {
    .end-mark {
        &::after {
            content: '';
            display: block;
            background: #2f2f2f;
            width: 20px;
            height: 1px;
            margin: 4rem auto 6rem auto;
        }
    }
}
</style>

<script>
export default {
    name: 'Cafe',
    components: {

    },
    setup() {
        const artList = [
            {
                id: 1,
                title: 'Kashk',
                abbr: 'kashk',
                place: 'Berlin',
                year: '2018',
                // eslint-disable-next-line global-require
                img_url: require('../assets/images/kashk.jpg'),
                description: 'Kashk其實是一間複合式的咖啡店和精釀啤酒吧，店員曾跟我說其實啤酒才是他們的主力，別看下午時刻人潮不多的悠閒景象，晚上尖峰時間可熱鬧了。店內最吸引人目光的大概就是吧台上那十二顆水龍頭，每顆水龍頭打開就是一款啤酒。如果要每款都試過的話，可要多跑個幾趟了，更何況菜單還會不定時更新。\nKaschk位在柏林市中心，搭乘U Bahn到Rosa-Luxemburg-Platz從地鐵上來就能夠看到有著大面落地窗的咖啡店。走進店內則是滿滿的木頭色調裝潢，顏色深淺不同的木片拼貼組成整面帶有粗獷風格的牆面。室內所有的桌椅也都是木製的，除了吧台桌椅、高腳椅、雙人座椅，還包括中間一張大木桌，也是我在Kaschk完成的多項速寫作品中其中一個視角的位子。就是因為有這麼多不同的繪畫視角勾引我動筆，才使得這間咖啡店成為我在德國期間最常光顧、作品也最多的店。如果有機會再飛柏林，這肯定是我會再訪的地點之一。如果你到柏林，也不妨來這裡喝杯咖啡或啤酒。',
                other: [
                    // eslint-disable-next-line global-require
                    require('../assets/images/kashk-07.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/kashk-03.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/kashk-05.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/kashk-04.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/kashk-06.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/kashk-02.jpg'),
                ],
            },
            {
                id: 2,
                title: 'Ruins Coffee Roasters',
                abbr: 'ruins',
                place: 'Taipei',
                year: '2018',
                // eslint-disable-next-line global-require
                img_url: require('../assets/images/ruins.jpg'),
                description: '小廢墟的前身是位在台北小巨蛋附近的小破爛Cafe Junkies，當時就對他們店內掛滿舊眷村窗框那種豪邁的室內風格很有印象，當時的我甚至還沒開始喝咖啡，到店內總是點杯茶和一顆貝果度過優閒的下午。當某天發現咖啡店收掉時為此感到難過，好在不久後便發現他們在木柵景美溪的河堤旁另闢新地，整理了一間舊房子，重新開了間咖啡店取名叫做小廢墟。\n速寫的線稿部分是在初訪的時候完成的，當時正值聖誕節期間，晚上的小廢墟很熱鬧，黃色紅色燈串的光線中，夾雜著人們聊天的喧鬧聲，我被安排在吧台邊的位置，靜靜地動著畫筆記錄下這一刻。',
                other: [
                    // eslint-disable-next-line global-require
                    require('../assets/images/ruins-02.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/ruins-03.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/ruins-04.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/ruins-05.jpg'),
                ],
            },
            {
                id: 3,
                title: '只是光影獨立咖啡廳',
                abbr: 'lightdancewithshadow',
                place: 'Taoyuan',
                year: '2020',
                // eslint-disable-next-line global-require
                img_url: require('../assets/images/lightandshadow.jpg'),
                description: '當初因為工作的緣故搬到桃園，到了週末就想跑咖啡店，只是光影就是我那時找到的第一間咖啡店。位在桃園火車站附近的新民街，也是以前桃園的舊城區位置，一個黃金葛生長的綠意盎然小角落掛著「只是光影」的小招牌，是通往咖啡店的入口，一條往二樓的狹窄樓梯，牆面上貼滿關於桃園藝文活動和在地廟宇資訊的海報，到了二樓打開門，先是看到用磚塊搭成的吧台，轉頭一看又是整面牆的畫作。當初因為工作的緣故搬到桃園，到了週末就想跑咖啡店，只是光影就是我那時找到的第一間咖啡店。位在桃園火車站附近的新民街，也是以前桃園的舊城區位置，一個黃金葛生長的綠意盎然小角落掛著「只是光影」的小招牌，是通往咖啡店的入口，一條往二樓的狹窄樓梯，牆面上貼滿關於桃園藝文活動和在地廟宇資訊的海報，到了二樓打開門，先是看到用磚塊搭成的吧台，轉頭一看又是整面牆的畫作。我心裡明白，這間咖啡店我是肯定要畫上一張全景水彩，但因為店內擺飾很多，來了好幾次卻遲遲不敢下手，一開始也只畫了張小張的圖。到後來只是光影滿十周年後不久，聽到要搬遷的消息，才硬是撥了周末的一天，從上午十一點慢慢地畫到晚上六點才將線稿完成。雖然不擅於畫人像，但為了完整性，還是將老闆、闆娘、和店貓蔡圍巾都畫進圖中，至於上色，又是另一天的事了。\n現在的只是光影仍然在新民街，只是搬到了更深處的巷弄中。',
                other: [
                    // eslint-disable-next-line global-require
                    require('../assets/images/lightandshadow-02.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/lightandshadow-03.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/lightandshadow-04.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/lightandshadow-05.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/lightandshadow-06.jpg'),
                ],
            },
            {
                id: 4,
                title: 'Swell Co. Café',
                abbr: 'swell',
                place: 'Taipei',
                year: '2020',
                // eslint-disable-next-line global-require
                img_url: require('../assets/images/swell.jpg'),
                description: 'Swell是以衝浪為主題的咖啡店，店內到處都是衝浪相關的元素，走進店裡嗅到不只是咖啡香，還有夏天的氣息。',
                other: [
                    // eslint-disable-next-line global-require
                    // require(''),
                ],
            },
            {
                id: 5,
                title: '未央咖啡',
                abbr: 'midnight',
                place: 'Taipei',
                year: '2020',
                // eslint-disable-next-line global-require
                img_url: require('../assets/images/midnight.jpg'),
                description: '位於台北市大安區的咖啡店，店名呼應他們開到半夜的營業時間。店內總是安靜，不適合喧鬧，但很適合靜靜地做自己的事，尤其是這裡的選歌更是形塑了這裡靜謐的氛圍，學生時期還會抱一疊論文沉靜在這裡昏黃的燈光下埋首苦讀。好久之後的某天再次來到這裡，在我認為有著最好視角的位子，罰站了好一陣子，完成了這幅作品。',
                other: [
                    // eslint-disable-next-line global-require
                    require('../assets/images/midnight-02.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/midnight-03.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/midnight-04.jpg'),
                ],
            },
            {
                id: 6,
                title: 'Portinari',
                abbr: 'portinari',
                place: 'Haulien',
                year: '2020',
                // eslint-disable-next-line global-require
                img_url: require('../assets/images/portinari.jpg'),
                description: '跟著朋友到花蓮玩，趁著他們在民宿休息的時候，我獨自一人溜出來遊蕩，才因此有機會一訪這間隱藏於巷弄內的咖啡店。店內頗有中世紀歐洲的氛圍，復古的沙發椅、陳列於架上的精緻咖啡杯、印於牛皮紙上的世界地圖，其中最亮眼的是一台來自歐洲的古董收銀機，上面還清楚的印著挪威貨幣單位Kroner和已經停止使用的øre。闆娘述說著怎麼把這台收銀機帶回台灣的故事，一邊示範操作這台仍能正常運作的古董，那齒輪嚙合轉動的聲音是如此地清脆。\n聽完了闆娘的故事，再加上店內的布置實在太美，不禁令人手癢想畫張圖，只是這念頭來的太突然，完全沒有預期這趟閒晃會想要動畫筆，因此沒有準備畫紙在身上，只好麻煩闆娘弄張紙給我。為此，闆娘還專程幫我到閣樓翻箱倒櫃一番，上半身隱沒於閣樓中，留下踩在梯子上的雙腳，那個畫面看得也實在有趣。最後，我將這段回憶紀錄在牛皮紙袋上，也算是完美融入這間咖啡店的整體風格。',
                other: [
                    // eslint-disable-next-line global-require
                    require('../assets/images/portinari-02.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/portinari-03.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/portinari-04.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/portinari-05.jpg'),
                ],
            },
            {
                id: 7,
                title: 'Ma Home',
                abbr: 'mahome',
                place: 'Taipei',
                year: '2019',
                // eslint-disable-next-line global-require
                img_url: require('../assets/images/mahome.jpg'),
                description: '第一次注意到MaHome是因為路過店門口時，點點星光般的燈串、五顏六色的顏料罐、各種植栽和一棵布置精美的聖誕樹，實在很難不去注意。喔對，還有那個「來畫畫」的招牌，真是簡潔有力，也透露著這間咖啡店的最大特色，因為這其實是一間畫畫咖啡店。',
                other: [
                    // eslint-disable-next-line global-require
                    // require('../assets/images/mahome-02.jpg'),
                    // eslint-disable-next-line global-require
                    require('../assets/images/mahome-03.jpg'),
                ],
            },
        ];

        const separateParagraph = (paragraph) => {
            const lines = paragraph.split(/\r\n|\n\r|\n|\r/);
            return lines;
        };

        return {
            artList,
            separateParagraph,
        };
    },
};
</script>
