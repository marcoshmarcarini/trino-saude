"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Darkmode.js":
/*!********************************!*\
  !*** ./components/Darkmode.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DarkMode; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n\n\nvar _s = $RefreshSig$();\nfunction DarkMode() {\n    _s();\n    var ref = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)(), theme = ref.theme, setTheme = ref.setTheme;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"liga-desliga bg-orange-600 dark:bg-purple-800\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    name: \"btn-darkmode\",\n                    className: \"btn-darkmode\",\n                    onClick: function() {\n                        return setTheme(theme === 'light' ? 'dark' : 'light');\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/imaccarlos/Documents/GitHub/trino-saude/components/Darkmode.js\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    for: \"btn-darkmode\",\n                    className: \"area_dark\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://img.icons8.com/ios-glyphs/20/000000/sun--v1.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/imaccarlos/Documents/GitHub/trino-saude/components/Darkmode.js\",\n                            lineNumber: 10,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ligar_dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/imaccarlos/Documents/GitHub/trino-saude/components/Darkmode.js\",\n                            lineNumber: 11,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://img.icons8.com/ios-glyphs/20/000000/do-not-disturb-2.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/imaccarlos/Documents/GitHub/trino-saude/components/Darkmode.js\",\n                            lineNumber: 14,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/imaccarlos/Documents/GitHub/trino-saude/components/Darkmode.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/imaccarlos/Documents/GitHub/trino-saude/components/Darkmode.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n};\n_s(DarkMode, \"X4uvOx5eKhl4Io05RZd8OF691qE=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme\n    ];\n});\n_c = DarkMode;\nvar _c;\n$RefreshReg$(_c, \"DarkMode\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhcmttb2RlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDOztBQUV2QixRQUFRLENBQUNDLFFBQVEsR0FBRSxDQUFDOztJQUMvQixHQUFLLENBQXFCRCxHQUFVLEdBQVZBLHFEQUFRLElBQTNCRSxLQUFLLEdBQWNGLEdBQVUsQ0FBN0JFLEtBQUssRUFBRUMsUUFBUSxHQUFJSCxHQUFVLENBQXRCRyxRQUFRO0lBQ3RCLE1BQU0sNkVBQUM7OEZBRUVDLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQStDOzs0RkFDekRDLENBQUs7b0JBQUNDLElBQUksRUFBQyxDQUFVO29CQUFDQyxJQUFJLEVBQUMsQ0FBYztvQkFBQ0gsU0FBUyxFQUFDLENBQWM7b0JBQUNJLE9BQU8sRUFBRSxRQUFRO3dCQUFGTixNQUFNLENBQU5BLFFBQVEsQ0FBQ0QsS0FBSyxLQUFLLENBQU8sU0FBRyxDQUFNLFFBQUcsQ0FBTzs7Ozs7Ozs0RkFDL0hRLENBQUs7b0JBQUNDLEdBQUcsRUFBQyxDQUFjO29CQUFDTixTQUFTLEVBQUMsQ0FBVzs7b0dBQzlDTyxDQUFHOzRCQUFDQyxHQUFHLEVBQUMsQ0FBeUQ7Ozs7OztvR0FDakVULENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFZOzs7Ozs7b0dBRzFCTyxDQUFHOzRCQUFDQyxHQUFHLEVBQUMsQ0FBa0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXM0YsQ0FBQztHQXRCdUJaLFFBQVE7O1FBQ0ZELGlEQUFROzs7S0FEZEMsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Rhcmttb2RlLmpzPzgwNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXJrTW9kZSgpe1xuICAgIGNvbnN0IHt0aGVtZSwgc2V0VGhlbWV9ID0gdXNlVGhlbWUoKVxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlnYS1kZXNsaWdhIGJnLW9yYW5nZS02MDAgZGFyazpiZy1wdXJwbGUtODAwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJidG4tZGFya21vZGVcIiBjbGFzc05hbWU9XCJidG4tZGFya21vZGVcIiBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSh0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpfT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJidG4tZGFya21vZGVcIiBjbGFzc05hbWU9XCJhcmVhX2RhcmtcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLWdseXBocy8yMC8wMDAwMDAvc3VuLS12MS5wbmdcIi8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWdhcl9kYXJrXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1nbHlwaHMvMjAvMDAwMDAwL2RvLW5vdC1kaXN0dXJiLTIucG5nXCIvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSh0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpfSBjbGFzc05hbWU9XCJidG4tZGFya01vZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1nbHlwaHMvNTAvMDAwMDAwL3N1bi0tdjEucG5nXCIvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlVGhlbWUiLCJEYXJrTW9kZSIsInRoZW1lIiwic2V0VGhlbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwib25DbGljayIsImxhYmVsIiwiZm9yIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Darkmode.js\n");

/***/ })

});