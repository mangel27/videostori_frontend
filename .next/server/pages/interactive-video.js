"use strict";
(() => {
var exports = {};
exports.id = 716;
exports.ids = [716,888];
exports.modules = {

/***/ 327:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patterns_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3953);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _patterns_ImageTextTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7295);
/* harmony import */ var _constants_layoutConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2960);
/* harmony import */ var _patterns_Layouts_PageContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5798);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_patterns_Banner__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _patterns_ImageTextTable__WEBPACK_IMPORTED_MODULE_10__, _patterns_Layouts_PageContainer__WEBPACK_IMPORTED_MODULE_12__]);
([_patterns_Banner__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _patterns_ImageTextTable__WEBPACK_IMPORTED_MODULE_10__, _patterns_Layouts_PageContainer__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const InteractiveVideo = ({ articles  })=>{
    const breadcrumb = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "Interactive Video",
            link: "/interactive-video",
            isCurrentPage: true
        }
    ];
    const itemData = [
        {
            id: "1",
            icon: react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdOutlineShapeLine,
            text: "Shapes"
        },
        {
            id: "2",
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaRegImages,
            text: "Image"
        },
        {
            id: "3",
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaTextWidth,
            text: "Text"
        },
        {
            id: "4",
            icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsHandIndexThumb,
            text: "Button"
        },
        {
            id: "5",
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaWpforms,
            text: "Form"
        },
        {
            id: "6",
            icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineQuestionCircle,
            text: "MultiChoice"
        },
        {
            id: "7",
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaRoute,
            text: "Switch Timeline"
        },
        {
            id: "8",
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaShoppingBag,
            text: "Shoppable"
        },
        {
            id: "9",
            icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsQuestionLg,
            text: "Custom Poll"
        },
        {
            id: "10",
            icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineBarChart,
            text: "Lead Generation"
        },
        {
            id: "11",
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaHandPointUp,
            text: "Click Capture"
        },
        {
            id: "12",
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaRegFileVideo,
            text: "Switch Video"
        },
        {
            id: "13",
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaRegFileImage,
            text: "Open Image"
        },
        {
            id: "14",
            icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsChatLeft,
            text: "Feedback"
        },
        {
            id: "15",
            icon: react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosCall,
            text: "Call in Video"
        },
        {
            id: "16",
            icon: react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdOutlineMarkEmailRead,
            text: "Email in Video"
        },
        {
            id: "17",
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaCcApplePay,
            text: "Download App"
        },
        {
            id: "18",
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaLanguage,
            text: "Language Selection"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_patterns_Banner__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: "Interactive Video",
                breadcrumb: breadcrumb
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patterns_Layouts_PageContainer__WEBPACK_IMPORTED_MODULE_12__/* .PageContainer */ ._, {
                children: [
                    articles.map((data, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_patterns_ImageTextTable__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            isVideo: data.attributes.hasVideoContent,
                            imageTextdata: data.attributes,
                            index: index
                        }, index + "interactvideo");
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                        mx: "auto",
                        w: [
                            "100%",
                            "40%"
                        ],
                        variant: "headingsInPage",
                        color: "text.headline",
                        textAlign: "center",
                        children: "Interactive video with interactive Elements"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SimpleGrid, {
                        columns: [
                            2,
                            6
                        ],
                        mx: "auto",
                        my: [
                            14
                        ],
                        children: itemData.map((item)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
                                h: [
                                    "130px",
                                    "160px"
                                ],
                                w: [
                                    "140px",
                                    "175px"
                                ],
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                m: "15px",
                                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                _hover: {
                                    bg: "black",
                                    color: "white",
                                    cursor: "pointer",
                                    svg: {
                                        fill: "white"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                        cursor: "pointer",
                                        as: item.icon,
                                        boxSize: [
                                            42,
                                            70
                                        ],
                                        fill: "rgb(244,48,48,0.9)",
                                        mb: 5
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        textAlign: "center",
                                        fontSize: "18px",
                                        fontWeight: 600,
                                        children: item.text
                                    })
                                ]
                            }, item.id);
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InteractiveVideo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 712:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_InteractiveVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(327);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3726);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2523);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_InteractiveVideo__WEBPACK_IMPORTED_MODULE_1__, _components_seo__WEBPACK_IMPORTED_MODULE_2__]);
([_modules_InteractiveVideo__WEBPACK_IMPORTED_MODULE_1__, _components_seo__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Interact = ({ interactVideo  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                seo: interactVideo.attributes.seo
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_InteractiveVideo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                articles: interactVideo.attributes.articles.data
            })
        ]
    });
};
async function getStaticProps() {
    const interactVideoRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .fetchAPI */ .I)("/categories", {
        filters: {
            slug: "interactive-video"
        },
        sort: "priority:ASC",
        populate: {
            seo: {
                populate: "*"
            },
            articles: {
                populate: "*"
            }
        }
    });
    return {
        props: {
            interactVideo: interactVideoRes.data[0]
        },
        revalidate: 1
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interact);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5798:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ PageContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const PageContainer = (props)=>{
    const { size , variant , ...rest } = props;
    const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useStyleConfig)("PageContainer", {
        size,
        variant
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        as: "span",
        sx: styles,
        ...rest
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4002:
/***/ ((module) => {

module.exports = require("chakra-ui-markdown-renderer");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

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

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

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

/***/ 4751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

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

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,697,4,596,754], () => (__webpack_exec__(712)));
module.exports = __webpack_exports__;

})();