"use strict";
exports.id = 684;
exports.ids = [684];
exports.modules = {

/***/ 2684:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FeatureSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function FeatureSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        className: "hidden",
        bg: "gray.800",
        position: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                flex: 1,
                zIndex: 0,
                display: {
                    base: "none",
                    lg: "flex"
                },
                backgroundImage: "url('/templates/stats-grid-with-image.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                width: "50%",
                insetY: 0,
                right: 0,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    bgGradient: "linear(to-r, gray.800 10%, transparent)",
                    w: "full",
                    h: "full"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                maxW: "7xl",
                py: 10,
                zIndex: 10,
                position: "relative",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    direction: {
                        base: "column",
                        lg: "row"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        color: "gray.400",
                        justify: {
                            lg: "center"
                        },
                        py: {
                            base: 10,
                            md: 20
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
                            columns: {
                                base: 1,
                                md: 3
                            },
                            spacing: 10,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "3xl",
                                        color: "white",
                                        fontWeight: "bold",
                                        children: "Why You Should Create Interactive Videos ?"
                                    })
                                }),
                                stats.map((stat)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        display: "flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                                cursor: "pointer",
                                                as: stat.icon,
                                                boxSize: 55,
                                                fill: "white"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                                direction: "column",
                                                mx: 5,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                        fontFamily: "heading",
                                                        fontSize: "xl",
                                                        color: "white",
                                                        fontWeight: "bold",
                                                        mb: 3,
                                                        children: stat.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                        fontSize: "sm",
                                                        color: "gray.400",
                                                        children: stat.content
                                                    })
                                                ]
                                            })
                                        ]
                                    }, stat.title))
                            ]
                        })
                    })
                })
            })
        ]
    });
}
const StatsText = ({ children  })=>/*#__PURE__*/ _jsx(Text, {
        as: "span",
        fontWeight: 700,
        color: "white",
        children: children
    });
const stats = [
    {
        title: "Boosts engagement",
        icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegObjectGroup,
        content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "Boosts engagement Interactive video provides viewers with a unique and engaging experience that encourages active participation, leading to higher engagement rates and better retention"
        })
    },
    {
        title: "Drives conversions",
        icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaChartBar,
        content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "By integrating calls-to-action and other interactive elements, interactive video can help to drive more conversions and improve the ROI of your marketing efforts"
        })
    },
    {
        title: "Provides valuable data",
        icon: react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiMobileAlt,
        content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "Interactive video can provide valuable data on viewer behavior and engagement, allowing marketers to optimize their strategies and drive better results"
        })
    },
    {
        title: "Improves brand awareness",
        icon: react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdOutlineGroups3,
        content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "Interactive video provides a unique opportunity to showcase your brand and tell your story in a more engaging and memorable way"
        })
    },
    {
        title: "Enhances user experience",
        icon: react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdOutlineScreenSearchDesktop,
        content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "Interactive video can enhance the user experience by providing a more personalized and immersive experience that allows viewers to control their own journey"
        })
    }
];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;