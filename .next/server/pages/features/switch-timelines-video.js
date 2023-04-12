"use strict";
(() => {
var exports = {};
exports.id = 811;
exports.ids = [811,888];
exports.modules = {

/***/ 7572:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_layoutConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2960);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2210);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6134);
/* harmony import */ var _patterns_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3953);
/* harmony import */ var _patterns_ImageTextTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7295);
/* harmony import */ var _patterns_Layouts_PageContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5798);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__, _patterns_Banner__WEBPACK_IMPORTED_MODULE_5__, _patterns_ImageTextTable__WEBPACK_IMPORTED_MODULE_6__, _patterns_Layouts_PageContainer__WEBPACK_IMPORTED_MODULE_7__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__, _patterns_Banner__WEBPACK_IMPORTED_MODULE_5__, _patterns_ImageTextTable__WEBPACK_IMPORTED_MODULE_6__, _patterns_Layouts_PageContainer__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const breadcrumb = [
    {
        text: "Home",
        link: "/"
    },
    {
        text: "Interactive Videos",
        link: "/interactive-video"
    },
    {
        text: "Switch Timeline",
        link: "features/switchtimeline"
    }
];
const SwitchTimeline = ({ articles  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_patterns_Banner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: "Switch Timeline",
                breadcrumb: breadcrumb
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patterns_Layouts_PageContainer__WEBPACK_IMPORTED_MODULE_7__/* .PageContainer */ ._, {
                children: [
                    articles.map((data, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_patterns_ImageTextTable__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            index: index,
                            isVideo: data.attributes.hasVideoContent,
                            imageTextdata: data.attributes
                        }, index + "hotspot");
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        className: "hidden",
                        h: "auto",
                        bg: "#fff",
                        px: 10,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                py: 10,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
                                        color: "#1b1f2e",
                                        mb: 5,
                                        fontSize: {
                                            base: "3xl",
                                            md: "5xl"
                                        },
                                        children: "Switch Timeline Uses​"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.SimpleGrid, {
                                columns: [
                                    1,
                                    5
                                ],
                                spacing: 0,
                                bgImage: [
                                    "",
                                    "url('http://web.msdi.in/wp-content/uploads/2022/12/work-process-line.png')"
                                ],
                                bgRepeat: "no-repeat",
                                children: _constants_layoutConstants__WEBPACK_IMPORTED_MODULE_2__/* .SWITCHTIMELINE_CARDS1.map */ .wM.map((item, index)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        py: [
                                            10
                                        ],
                                        _hover: {
                                            div: {
                                                color: "#2D2727"
                                            }
                                        },
                                        transform: index % 2 === 1 ? index === 1 ? "translateY(25px)" : "translateY(-35px)" : "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                pb: 8,
                                                alignItems: [
                                                    "right",
                                                    "center"
                                                ],
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Circle, {
                                                    size: "80px",
                                                    border: "10px solid white",
                                                    boxShadow: "2xl",
                                                    bg: "#f7f7f9",
                                                    color: "#f54444",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                                        fontSize: "30px",
                                                        fontWeight: "bold",
                                                        children: item?.number
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                borderRadius: "5px",
                                                w: [
                                                    "auto",
                                                    230
                                                ],
                                                p: 3,
                                                bg: "#f7f7f9",
                                                _hover: {
                                                    bg: "#f54444",
                                                    color: "#fff"
                                                },
                                                position: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
                                                        color: "#1b1f2e",
                                                        as: "a",
                                                        _hover: {
                                                            color: "#fff"
                                                        },
                                                        p: 1,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                                                fontSize: "18px",
                                                                my: 5,
                                                                fontWeight: "bold",
                                                                children: item?.heading
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                                                fontSize: "16px",
                                                                children: item?.paragraph
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                        position: "absolute",
                                                        top: "-30px",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.TriangleUpIcon, {
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
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {
                        pt: 10,
                        px: 10,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                            variant: "redHeading",
                            children: "Timeline Switch can be used following cases"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.SimpleGrid, {
                        className: "hidden",
                        columns: [
                            1,
                            4
                        ],
                        spacing: 10,
                        px: 10,
                        py: 10,
                        children: _constants_layoutConstants__WEBPACK_IMPORTED_MODULE_2__/* .SWITCHTIMELINE_CARDS2.map */ .Io.map((item, index)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                boxShadow: "2xl",
                                p: 5,
                                bg: "white.400",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
                                        py: 5,
                                        size: "md",
                                        color: "gray.900",
                                        children: item.heading
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                        size: "sm",
                                        children: item.paragraph
                                    })
                                ]
                            }, index);
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchTimeline);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 113:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3726);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2523);
/* harmony import */ var _modules_Features_SwitchTimeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7572);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_seo__WEBPACK_IMPORTED_MODULE_1__, _modules_Features_SwitchTimeline__WEBPACK_IMPORTED_MODULE_3__]);
([_components_seo__WEBPACK_IMPORTED_MODULE_1__, _modules_Features_SwitchTimeline__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const SwitchTimelinePage = ({ switchTimelineData  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                seo: switchTimelineData.attributes.seo
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_Features_SwitchTimeline__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                articles: switchTimelineData.attributes.articles.data
            })
        ]
    });
};
async function getStaticProps() {
    const switchTimelineDataRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .fetchAPI */ .I)("/categories", {
        filters: {
            slug: "switch-timelines-video"
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
            switchTimelineData: switchTimelineDataRes.data[0]
        },
        revalidate: 1
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchTimelinePage);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,697,4,596,754], () => (__webpack_exec__(113)));
module.exports = __webpack_exports__;

})();