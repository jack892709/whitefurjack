<template>
    <!-- <div class="art">
        <h1>This is an artwork page {{artworkId}}</h1>
        <p>testing prop currentArtData {{artInfo}}</p>
    </div> -->
    <div class="work" id="work" @click="closeModal">
        <div class="slidework">
            <div class="work-inner" @click.stop="doNothing">
                <!-- <div class="work-details">
                    <img :src="artData.img_url" alt="">
                    <div class="work-info sided-content-layout">
                        <div class="left-side-content">
                            <div class="text-content">
                                <h1 class="title">
                                    {{artData.title}}
                                </h1>
                                <span class="subtitle">
                                    {{artData.year}}
                                </span>
                            </div>
                        </div>
                        <div class="right-side-content">
                            <div class="text-content">
                                <div class="rich-content">
                                    <p v-for="line,index in artData.description" :key="artData.id + '_p_' + index">
                                        {{line}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="items">
                        <div class="item" v-for="image,index in artData.other" :key="artData.id+'_'+index" v-show="image">
                            <div class="image">
                                <a href="">
                                    <img :src="image" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- props -->
                <div class="work-details">
                    <img :src="artInfo.img_url" alt="">
                    <div class="work-info sided-content-layout">
                        <div class="left-side-content">
                            <div class="text-content">
                                <h1 class="title">
                                    {{artInfo.title}}
                                </h1>
                                <span class="subtitle">
                                    {{artInfo.year}}
                                </span>
                            </div>
                        </div>
                        <div class="right-side-content">
                            <div class="text-content">
                                <div class="rich-content">
                                    <p v-for="line,index in artDescription" :key="artInfo.id + '_p_' + index">
                                        {{line}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="items">
                        <div class="item" v-for="image,index in artInfo.other" :key="artInfo.id+'_'+index" v-show="image">
                            <div class="image">
                                <a href="">
                                    <img :src="image" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slidecontrol">
                <div class="work-switch work-close" @click.stop="closeModal">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <!-- <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> -->
                        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                    </svg>
                </div>
                <div class="work-switch work-left"  @click.stop="lastArtwork">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </div>
                <div class="work-switch work-right" @click.stop="nextArtwork">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>
            <div class="switchcontrol d-flex d-lg-none my-5 justify-content-center">
                <div class="switch-btn">
                    <div class="switch-icon"  @click.stop="lastArtwork">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </div>
                </div>
                <div class="switch-btn">
                    <div class="switch-icon" @click.stop="closeModal">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                        </svg>
                    </div>
                </div>
                <div class="switch-btn">
                    <div class="switch-icon" @click.stop="nextArtwork">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.work {
    img {
        width: 100%;
        // object-fit: cover;
    }
}
.slidework {
    min-height: calc(100% + 2rem);
    margin-top: -2rem;
    padding-top: 2rem;
    margin-bottom: 0px;
    /* user-select: none; */
}
.work-details {
    .items {
        .item {
            &:first-child {
                margin-top: 0;
            }
        }
    }
}
.text-content {
    .title {
        font-size: 1rem;
        margin-bottom: 0rem;
    }
    .subtitle {
        font-size: 0.8rem;
    }
    .rich-content {
        font-size: 0.8rem;
        p:last-child {
            margin-bottom: 0;
        }
    }
}
.slidecontrol {
    display: none;
}
.work-close {
    position: fixed;
    right: calc(25% - 60px);
    width: 32px;
    height: 32px;
    text-align: center;
    color: white;
    top: 2rem;
    z-index: 9;
}
.work-left, .work-right {
    position: fixed;
    width: 36px;
    height: 36px;
    color: white;
    top: 36px;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 9;
}
.work-left {
    left: calc(25% - 80px);
}
.work-right {
    right: calc(25% - 60px);
}
.work-switch {
    &:hover {
        color:#ced4da;
        cursor: pointer;
    }
}
.switch-btn {
    width: 36px;
    height: 36px;
    color:#2f2f2f;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        color:#727272;
        cursor: pointer;
    }
    .switch-icon {
        width: 24px;
        height: 24px;
        svg {
            vertical-align: baseline;
        }
    }
}
@media (max-width: 767px) {
    .sided-content-layout {
        padding-left: 8px;
        padding-right: 8px;
        .left-side-content {
            margin-bottom: 8px;
        }
    }
    .work-details {
        .work-info {
            margin-top: 16px;
            margin-bottom: 16px;
        }
        .items {
            .item {
                margin-top: 16px;
            }
        }
    }
}
@media (min-width: 768px) {
    .work-details {
        .work-info {
            margin-top: 24px;
            margin-bottom: 24px;
        }
        .items {
            .item {
                margin-top: 32px;
            }
        }
    }
    .sided-content-layout {
        padding-left: 20px;
        padding-right: 20px;
        .left-side-content {
            margin-bottom: 16px;
        }
    }
}
@media (min-width: 992px) {
    .work {
        position: fixed;
        z-index: 101;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.8);
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .work-inner {
        position: relative;
        border-style: solid;
        border-color: white;
        background-color: white;
        min-height: 300px;
        margin-top: 2rem;
        margin-bottom: 55px;
        margin-left: 25%;
        margin-right: 25%;
        border-width: 9px;
    }
    .sided-content-layout {
        display: flex;
        padding-left: 30px;
        padding-right: 30px;
        .left-side-content {
            width: 50%;
            padding-right: 40px;
        }
        .right-side-content {
            width: 50%;
        }
    }
    .work-details {
        .work-info {
            margin-top: 24px;
            margin-bottom: 32px;
        }
        .items {
            .item {
                margin-top: 35px;
            }
        }
    }
    .slidecontrol {
        display: block;
    }
}
</style>

<script>
import {
    onMounted, onUnmounted, ref, watch, computed,
} from 'vue';

const separateParagraph = (paragraph) => {
    const lines = paragraph.split(/\r\n|\n\r|\n|\r/);
    return lines;
};

export default {
    name: 'Artwork',
    props: ['artworkId', 'artInfo'],
    emits: ['switchPage'],
    setup(props, { emit }) {
        // Scroll Behavior
        const windowWidth = ref(window.innerWidth);
        if (windowWidth.value >= 992) document.body.classList.add('overflow-hidden');
        const onWidthChange = () => {
            windowWidth.value = window.innerWidth;
        };
        onMounted(() => window.addEventListener('resize', onWidthChange));
        onUnmounted(() => window.removeEventListener('resize', onWidthChange));
        watch(
            () => windowWidth.value,
            () => {
                if (windowWidth.value < 992 && document.body.classList.contains('overflow-hidden')) {
                    document.body.classList.remove('overflow-hidden');
                } else if (windowWidth.value >= 992 && !document.body.classList.contains('overflow-hidden')) {
                    document.body.classList.add('overflow-hidden');
                }
            },
        );

        // Data
        // async function fetchDetailedArtInfoById(id) {
        //     const url = `https://script.google.com/macros/s/AKfycbzRA6_7hlubMH1wOlZ3oLCRJB6xI9n0g5ZQMv5VYrwe6GL-CE7w3HbMRfWHzkywV8XVJQ/exec?type=detail&searchby=id&value=${id}`;
        //     const info = await fetch(url, {
        //         headers: {
        //             'Content-Type': 'text/plain',
        //         },
        //     })
        //         .then((response) => response.json())
        //         .then((json) => makeObjectByFirstRow(json));
        //     return info;
        // }
        // const artData = ref({});
        // const freshPage = () => {
        //     fetchDetailedArtInfoById(props.artworkId)
        //         .then((data) => {
        //             [artData.value] = data;
        //             artData.value.description = separateParagraph(artData.value.description);
        //             // console.log('artData value', artData.value);
        //         });
        // };
        // freshPage();
        // watch(
        //     () => props.artworkId,
        //     () => {
        //         freshPage();
        //     },
        // );

        // Data
        const artDescription = computed(() => separateParagraph(props.artInfo.description));

        // Control
        const scrollToWork = () => {
            const workElement = document.getElementById('work');
            workElement.scrollIntoView(true);
        };
        const closeModal = () => {
            emit('switchPage', 'close');
        };
        const doNothing = () => {

        };
        const lastArtwork = () => {
            scrollToWork();
            emit('switchPage', 'last');
            // scrollToWork();
        };
        const nextArtwork = () => {
            scrollToWork();
            emit('switchPage', 'next');
            // scrollToWork();
        };
        onMounted(() => { scrollToWork(); });

        return {
            // artData,
            artDescription,

            closeModal,
            doNothing,
            lastArtwork,
            nextArtwork,
        };
    },
    beforeRouteLeave(to) {
        if (!to.params.artworkId) {
            document.body.classList.remove('overflow-hidden');
        }
    },
};
</script>
