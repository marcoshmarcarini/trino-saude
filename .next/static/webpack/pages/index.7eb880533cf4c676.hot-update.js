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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DarkMode; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n\n\nvar _s = $RefreshSig$();\nfunction DarkMode() {\n    _s();\n    var ref = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)(), theme = ref.theme, setTheme = ref.setTheme;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"liga-desliga bg-orange-600 dark:bg-purple-800\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"area-dark\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://img.icons8.com/ios-glyphs/20/ffffff/sun--v1.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/imaccarlos/Documents/GitHub/trino-saude/components/Darkmode.js\",\n                        lineNumber: 9,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        id: \"btn-dark-mode\",\n                        className: \"btn-darkmode-checkbox\",\n                        onClick: function() {\n                            return setTheme(theme === 'light' ? 'dark' : 'light');\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/imaccarlos/Documents/GitHub/trino-saude/components/Darkmode.js\",\n                        lineNumber: 10,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        for: \"btn-dark-mode\",\n                        className: \"ligar_dark bg-neutral-300 dark:bg-neutral-800\"\n                    }, void 0, false, {\n                        fileName: \"/Users/imaccarlos/Documents/GitHub/trino-saude/components/Darkmode.js\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://img.icons8.com/ios-glyphs/20/ffffff/do-not-disturb-2.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/imaccarlos/Documents/GitHub/trino-saude/components/Darkmode.js\",\n                        lineNumber: 12,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/imaccarlos/Documents/GitHub/trino-saude/components/Darkmode.js\",\n                lineNumber: 8,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/imaccarlos/Documents/GitHub/trino-saude/components/Darkmode.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n};\n_s(DarkMode, \"X4uvOx5eKhl4Io05RZd8OF691qE=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme\n    ];\n});\n_c = DarkMode;\nvar _c;\n$RefreshReg$(_c, \"DarkMode\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhcmttb2RlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDOztBQUV2QixRQUFRLENBQUNDLFFBQVEsR0FBRSxDQUFDOztJQUMvQixHQUFLLENBQXFCRCxHQUFVLEdBQVZBLHFEQUFRLElBQTNCRSxLQUFLLEdBQWNGLEdBQVUsQ0FBN0JFLEtBQUssRUFBRUMsUUFBUSxHQUFJSCxHQUFVLENBQXRCRyxRQUFRO0lBQ3RCLE1BQU0sNkVBQUM7OEZBRUVDLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQStDO2tHQUN6REQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVc7O2dHQUNyQkMsQ0FBRzt3QkFBQ0MsR0FBRyxFQUFDLENBQXlEOzs7Ozs7Z0dBQ2pFQyxDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBVTt3QkFBQ0MsRUFBRSxFQUFDLENBQWU7d0JBQUNMLFNBQVMsRUFBQyxDQUF1Qjt3QkFBQ00sT0FBTyxFQUFFLFFBQVE7NEJBQUZSLE1BQU0sQ0FBTkEsUUFBUSxDQUFDRCxLQUFLLEtBQUssQ0FBTyxTQUFHLENBQU0sUUFBRyxDQUFPOzs7Ozs7O2dHQUN2SVUsQ0FBSzt3QkFBQ0MsR0FBRyxFQUFDLENBQWU7d0JBQUNSLFNBQVMsRUFBQyxDQUErQzs7Ozs7O2dHQUNuRkMsQ0FBRzt3QkFBQ0MsR0FBRyxFQUFDLENBQWtFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVL0YsQ0FBQztHQW5CdUJOLFFBQVE7O1FBQ0ZELGlEQUFROzs7S0FEZEMsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Rhcmttb2RlLmpzPzgwNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXJrTW9kZSgpe1xuICAgIGNvbnN0IHt0aGVtZSwgc2V0VGhlbWV9ID0gdXNlVGhlbWUoKVxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlnYS1kZXNsaWdhIGJnLW9yYW5nZS02MDAgZGFyazpiZy1wdXJwbGUtODAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmVhLWRhcmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1nbHlwaHMvMjAvZmZmZmZmL3N1bi0tdjEucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJidG4tZGFyay1tb2RlXCIgY2xhc3NOYW1lPVwiYnRuLWRhcmttb2RlLWNoZWNrYm94XCIgb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnKX0vPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYnRuLWRhcmstbW9kZVwiIGNsYXNzTmFtZT1cImxpZ2FyX2RhcmsgYmctbmV1dHJhbC0zMDAgZGFyazpiZy1uZXV0cmFsLTgwMFwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MtZ2x5cGhzLzIwL2ZmZmZmZi9kby1ub3QtZGlzdHVyYi0yLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKHRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0Jyl9IGNsYXNzTmFtZT1cImJ0bi1kYXJrTW9kZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLWdseXBocy81MC8wMDAwMDAvc3VuLS12MS5wbmdcIi8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VUaGVtZSIsIkRhcmtNb2RlIiwidGhlbWUiLCJzZXRUaGVtZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImlucHV0IiwidHlwZSIsImlkIiwib25DbGljayIsImxhYmVsIiwiZm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Darkmode.js\n");

/***/ })

});