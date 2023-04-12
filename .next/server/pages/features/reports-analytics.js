"use strict";
(() => {
var exports = {};
exports.id = 278;
exports.ids = [278,888];
exports.modules = {

/***/ 698:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patterns_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3953);
/* harmony import */ var _constants_layoutConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2960);
/* harmony import */ var _patterns_ImageTextTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7295);
/* harmony import */ var _patterns_Layouts_PageContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5798);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_patterns_Banner__WEBPACK_IMPORTED_MODULE_2__, _patterns_ImageTextTable__WEBPACK_IMPORTED_MODULE_4__, _patterns_Layouts_PageContainer__WEBPACK_IMPORTED_MODULE_5__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__]);
([_patterns_Banner__WEBPACK_IMPORTED_MODULE_2__, _patterns_ImageTextTable__WEBPACK_IMPORTED_MODULE_4__, _patterns_Layouts_PageContainer__WEBPACK_IMPORTED_MODULE_5__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







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
        text: "Reports-Analytics",
        link: "features/reportsanalytics"
    }
];
const ReportAnalytics = ({ articles  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_patterns_Banner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: "Reports-Analytics",
                breadcrumb: breadcrumb
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patterns_Layouts_PageContainer__WEBPACK_IMPORTED_MODULE_5__/* .PageContainer */ ._, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_patterns_ImageTextTable__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        isVideo: articles[0].attributes.hasVideoContent,
                        imageTextdata: articles[0]?.attributes
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Center, {
                        py: 10,
                        px: 10,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {
                            color: "gray.700",
                            children: " Channel-Specific Analytics"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.SimpleGrid, {
                        className: "hidden",
                        columns: [
                            1,
                            4
                        ],
                        spacing: 10,
                        px: 10,
                        py: 15,
                        children: _constants_layoutConstants__WEBPACK_IMPORTED_MODULE_3__/* .REPORTCARDS.map */ .BX.map((item, index)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                textAlign: "center",
                                boxShadow: "xl",
                                p: 5,
                                bg: "white.100",
                                _hover: {
                                    bgImage: "/assets/card_bg.jpg",
                                    color: "white",
                                    cursor: "pointer"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {
                                        py: 5,
                                        fontSize: 20,
                                        fontWeight: "bold",
                                        children: item.heading
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {
                                        size: "sm",
                                        children: item.paragraph
                                    })
                                ]
                            }, index);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_patterns_ImageTextTable__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        isVideo: articles[1]?.attributes.hasVideoContent,
                        imageTextdata: articles[1]?.attributes
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportAnalytics);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 917:
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
/* harmony import */ var _modules_Features_ReportAnalytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_seo__WEBPACK_IMPORTED_MODULE_1__, _modules_Features_ReportAnalytics__WEBPACK_IMPORTED_MODULE_3__]);
([_components_seo__WEBPACK_IMPORTED_MODULE_1__, _modules_Features_ReportAnalytics__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const ReportAnalyticsPage = ({ reportData  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                seo: reportData.attributes.seo
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_Features_ReportAnalytics__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                articles: reportData.attributes.articles.data
            })
        ]
    });
};
async function getStaticProps() {
    const reportDataRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .fetchAPI */ .I)("/categories", {
        filters: {
            slug: "reports-analytics"
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
            reportData: reportDataRes.data[0]
        },
        revalidate: 1
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportAnalyticsPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [636,697,4,596,754], () => (__webpack_exec__(917)));
module.exports = __webpack_exports__;

})();