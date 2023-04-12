"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,888];
exports.modules = {

/***/ 1398:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/image.js
var components_image = __webpack_require__(2751);
;// CONCATENATED MODULE: ./components/card.js




const card_Card = ({ article  })=>{
    return /*#__PURE__*/ _jsx(Link, {
        href: `/article/${article.attributes.slug}`,
        className: "uk-link-reset",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "uk-card uk-card-muted",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "uk-card-media-top",
                    children: /*#__PURE__*/ _jsx(NextImage, {
                        image: article.attributes.image
                    })
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "uk-card-body",
                    children: [
                        /*#__PURE__*/ _jsx("p", {
                            id: "category",
                            className: "uk-text-uppercase",
                            children: article.attributes.category.name
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            id: "title",
                            className: "uk-text-large",
                            children: article.attributes.title
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const card = ((/* unused pure expression or super */ null && (card_Card)));

;// CONCATENATED MODULE: ./components/articles.js



const Articles = ({ articles  })=>{
    const leftArticlesCount = Math.ceil(articles.length / 5);
    const leftArticles = articles.slice(0, leftArticlesCount);
    const rightArticles = articles.slice(leftArticlesCount, articles.length);
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "uk-child-width-1-2@s",
            "data-uk-grid": "true",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    children: leftArticles.map((article, i)=>{
                        return /*#__PURE__*/ _jsx(Card, {
                            article: article
                        }, `article__left__${article.attributes.slug}`);
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "uk-child-width-1-2@m uk-grid-match",
                        "data-uk-grid": true,
                        children: rightArticles.map((article, i)=>{
                            return /*#__PURE__*/ _jsx(Card, {
                                article: article
                            }, `article__left__${article.attributes.slug}`);
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const articles = ((/* unused pure expression or super */ null && (Articles)));


/***/ }),

/***/ 5024:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patterns_VideoPlayer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7164);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(782);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5310);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _patterns_VideoPlayer__WEBPACK_IMPORTED_MODULE_7__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _patterns_VideoPlayer__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const settings = {
    dots: false,
    arrows: true,
    fade: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
};
function Carousel({ slideData  }) {
    const [slider, setSlider] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const top = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({
        base: "60%",
        md: "60%"
    });
    const side = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({
        base: "10px",
        md: "5px"
    });
    const cards = [
        {
            img: "assets/img1.png",
            label: "Quit boring survey and make them interactive like never before",
            desc: "Create a Survey now on Video. Collect feedback on Videos. The plain and boring surveys can now be made interesting with a story and capturing user responses on Video. Capture user insights while surveying or collecting feedback/response.",
            subdesc: "Bringing new video Surveys formats"
        },
        {
            img: "assets/img2.png",
            label: "Now brand can use Videos to Personalize the Shopping Experience",
            desc: "A video is a visually appealing format for shoppers. Videostori enables conversion of  linear videos to shoppable videos thus reducing the friction and streamlining the shopping experience. This enables the viewer to shop directly from the Video.",
            subdesc: "Shop Till You Drop: The Evolution of Video Commerce"
        },
        {
            img: "assets/img3.png",
            label: "Use Interactive Videos and start making leads",
            desc: "Interactive Videos are a great source to generate leads. Interactive Videos can be designed to guide viewers, with each interactive element helping to move the viewer to take a specific action. The viewer can share his response on the CTA included within the Video preventing fall-offs.",
            subdesc: "The New and Exciting way to Generate Leads"
        },
        {
            img: "assets/img4.png",
            label: "Use Hotspots in your Videos and create the magic",
            desc: "Hotspots can make any part of the Video clickable thus enabling a variety of Interactive actions. By providing Interactive Experiences, Hotspots help increase Engagement and Retention, and provide a more Dynamic User Experience.",
            subdesc: "Hotspot: The new engagement tool in the Video world"
        },
        {
            img: "assets/img5.png",
            label: "Rewind and Fast-Forward",
            desc: "Interact with our switch timeline videos according to the interest and intent. Switch timeline is great feature where there is large amount of content and viewer has the power to define the path of the story",
            subdesc: "Bringing new video solutions to the market"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        className: "hidden",
        position: "relative",
        minH: "100vh",
        width: [
            "100%",
            "85%"
        ],
        m: "0 auto",
        overflow: "hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                textAlign: "center",
                py: 10,
                color: "1b1f2e",
                children: "Videostori Sample Video"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                "aria-label": "left-arrow",
                colorScheme: "red",
                borderRadius: "full",
                position: "absolute",
                left: side,
                top: top,
                transform: "translate(0%, -50%)",
                zIndex: 2,
                onClick: ()=>slider?.slickPrev(),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiLeftArrowAlt, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                "aria-label": "right-arrow",
                colorScheme: "red",
                borderRadius: "full",
                position: "absolute",
                right: side,
                top: top,
                transform: "translate(0%, -50%)",
                zIndex: 2,
                onClick: ()=>slider?.slickNext(),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiRightArrowAlt, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_5___default()), {
                ...settings,
                ref: (slider)=>setSlider(slider),
                children: slideData.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        w: "100%",
                        py: 20,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                            w: "100%",
                            h: "400px",
                            direction: [
                                "column-reverse",
                                "row"
                            ],
                            justifyContent: "space-evenly",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                    direction: "column",
                                    p: 5,
                                    width: [
                                        "100%",
                                        "40%"
                                    ],
                                    alignSelf: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            pos: "relative",
                                            fontSize: [
                                                "2xl"
                                            ],
                                            fontWeight: "bold",
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            pos: "relative",
                                            py: 8,
                                            lineHeight: 7,
                                            fontSize: [
                                                "sm"
                                            ],
                                            children: item.description
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                    as: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsCheckCircle,
                                                    boxSize: 5,
                                                    fill: "red"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                    pos: "relative",
                                                    fontSize: [
                                                        "sm"
                                                    ],
                                                    px: 4,
                                                    children: item.listItem
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_patterns_VideoPlayer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    p: 10,
                                    width: [
                                        "90%",
                                        "45%"
                                    ],
                                    height: [
                                        "70%",
                                        "100%"
                                    ],
                                    alignSelf: [
                                        "center",
                                        "normal"
                                    ],
                                    videodata: {
                                        thumbnail: (0,_lib_media__WEBPACK_IMPORTED_MODULE_9__/* .getStrapiMedia */ .$)(item.thumbnail),
                                        videosrc: "https://videostori.io/v/l4/IVyEio"
                                    }
                                })
                            ]
                        })
                    }, index))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1059:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HeroSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2751);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function HeroSection({ heroData  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        minH: "135vh",
        bg: "#13161F",
        direction: {
            base: "column",
            md: "row"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                flex: 1,
                p: [
                    4,
                    8
                ],
                align: "center",
                justify: "center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    className: "hidden",
                    spacing: [
                        "50px",
                        8
                    ],
                    w: "full",
                    maxW: "lg",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                            fontSize: {
                                base: "3xl",
                                md: "4xl",
                                lg: "5xl"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    color: "white",
                                    as: "span",
                                    children: heroData.title
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            fontSize: {
                                base: "md",
                                lg: "lg"
                            },
                            color: "white",
                            children: heroData.subtitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            direction: {
                                base: "column",
                                md: "row"
                            },
                            spacing: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                bg: "white",
                                w: [
                                    "50%",
                                    "40%"
                                ],
                                py: "27px",
                                borderRadius: "0",
                                color: "black",
                                _hover: {
                                    bg: "red.500"
                                },
                                children: heroData.ctaText
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                className: "hidden",
                flex: 1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    pos: "relative",
                    alignSelf: [
                        "none",
                        "center"
                    ],
                    mx: [
                        "auto",
                        "none"
                    ],
                    h: [
                        "40vh",
                        "80vh"
                    ],
                    w: [
                        "90vw",
                        "40vw"
                    ],
                    overflow: "hidden",
                    borderRadius: "50%",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        image: heroData.bannerImage
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3020:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const CARDS = [
    {
        id: "Card1",
        number: "01",
        heading: "Lead Generation",
        paragraph: "Generate Leads directly through the Video. No more need for the customer to remember the Call to Action preventing fall-offs."
    },
    {
        id: "Card2",
        number: "02",
        heading: "Shoppable Video",
        paragraph: "Type of interactive video that allows viewers to make purchases directly from the video itself"
    },
    {
        id: "Card3",
        number: "03",
        heading: "Personalization",
        paragraph: "Create interactive video content to meet the specific needs and preferences of individual viewers."
    },
    {
        id: "Card4",
        number: "04",
        heading: "Gamification",
        paragraph: "Gamification refers to the integration of game elements and mechanics on the video to increase engagement and interaction"
    },
    {
        id: "Card5",
        number: "05",
        heading: "App Acquisition",
        paragraph: "acquiring new users to mobile app through various marketing activities."
    },
    {
        id: "Card6",
        number: "06",
        heading: "Survey Quiestions",
        paragraph: "Conduct a survey or take feedback from the customers directly on the video in a new exciting format"
    }
];
const InteractSection = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            h: "auto",
            bg: "#fff",
            px: 10,
            py: 10,
            className: "hidden",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    py: 20,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                            color: "#1b1f2e",
                            mb: 5,
                            fontSize: {
                                base: "3xl",
                                md: "5xl"
                            },
                            children: "Interactive Video on Videostori"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SimpleGrid, {
                    columns: [
                        1,
                        6
                    ],
                    spacing: 0,
                    bgImage: "url('http://web.msdi.in/wp-content/uploads/2022/12/work-process-line.png')",
                    bgRepeat: "no-repeat",
                    children: CARDS.map((item, index)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            p: [
                                0,
                                6
                            ],
                            py: 30,
                            _hover: {
                                div: {
                                    color: "#2D2727"
                                }
                            },
                            transform: index % 2 === 1 ? index === 1 ? "translateY(25px)" : "translateY(-35px)" : "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                    pb: 8,
                                    alignItems: [
                                        "right",
                                        "center"
                                    ],
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Circle, {
                                        size: "80px",
                                        border: "10px solid white",
                                        boxShadow: "2xl",
                                        bg: "#f7f7f9",
                                        color: "#f54444",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            fontSize: "30px",
                                            fontWeight: "bold",
                                            children: item?.number
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                    borderRadius: "5px",
                                    w: [
                                        "auto",
                                        200
                                    ],
                                    p: 5,
                                    bg: "#f7f7f9",
                                    _hover: {
                                        bg: "#f54444",
                                        color: "#fff"
                                    },
                                    position: "relative",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                                            color: "#1b1f2e",
                                            as: "a",
                                            _hover: {
                                                color: "#fff"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                    fontSize: "18px",
                                                    my: 5,
                                                    fontWeight: "bold",
                                                    children: item?.heading
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                    fontSize: "16px",
                                                    children: item?.paragraph
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            position: "absolute",
                                            top: "-30px",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.TriangleUpIcon, {
                                                color: "#f54444",
                                                w: 8,
                                                h: 8
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, item?.id);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InteractSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeroSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1059);
/* harmony import */ var _InteractSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3020);
/* harmony import */ var _FeatureSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2684);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5024);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HeroSection__WEBPACK_IMPORTED_MODULE_1__, _InteractSection__WEBPACK_IMPORTED_MODULE_2__, _FeatureSection__WEBPACK_IMPORTED_MODULE_3__, _Carousel__WEBPACK_IMPORTED_MODULE_4__]);
([_HeroSection__WEBPACK_IMPORTED_MODULE_1__, _InteractSection__WEBPACK_IMPORTED_MODULE_2__, _FeatureSection__WEBPACK_IMPORTED_MODULE_3__, _Carousel__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Home = ({ homepage  })=>{
    console.log(homepage);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeroSection__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                heroData: homepage.hero
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InteractSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FeatureSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Carousel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                slideData: homepage.carouselArticles
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1398);
/* harmony import */ var _modules_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8778);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8769);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3726);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2523);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_Home__WEBPACK_IMPORTED_MODULE_3__, _components_layout__WEBPACK_IMPORTED_MODULE_4__, _components_seo__WEBPACK_IMPORTED_MODULE_5__]);
([_modules_Home__WEBPACK_IMPORTED_MODULE_3__, _components_layout__WEBPACK_IMPORTED_MODULE_4__, _components_seo__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const HomePage = ({ homepage  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                seo: homepage.attributes.seo
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_Home__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                homepage: homepage.attributes
            })
        ]
    });
};
async function getStaticProps() {
    const [articlesRes, homepageRes] = await Promise.all([
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .fetchAPI */ .I)("/articles", {
            populate: "*"
        }),
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .fetchAPI */ .I)("/homepage", {
            populate: {
                hero: {
                    populate: {
                        bannerImage: {
                            populate: [
                                "url"
                            ]
                        }
                    }
                },
                carouselArticles: {
                    sort: "priority:ASC",
                    populate: {
                        thumbnail: {
                            populate: "*"
                        },
                        videoSrc: {
                            populate: "*"
                        }
                    }
                },
                seo: {
                    populate: "*"
                }
            }
        })
    ]);
    return {
        props: {
            articles: articlesRes.data,
            homepage: homepageRes.data
        },
        revalidate: 1
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 7104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6134:
/***/ ((module) => {

module.exports = import("@chakra-ui/icons");;

/***/ }),

/***/ 2210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,697,429,4,596,684], () => (__webpack_exec__(6616)));
module.exports = __webpack_exports__;

})();