"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(project)/project-1/page",{

/***/ "(app-pages-browser)/./src/components/dropdown/AutoComplete.jsx":
/*!**************************************************!*\
  !*** ./src/components/dropdown/AutoComplete.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Button,FormControl,ListGroup!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/FormControl.js\");\n/* harmony import */ var _barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,FormControl,ListGroup!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/ListGroup.js\");\n/* harmony import */ var _barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,FormControl,ListGroup!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst AutocompleteInput = (param)=>{\n    let { options } = param;\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [filteredSuggestions, setFilteredSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [showSuggestions, setShowSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleInputChange = (e)=>{\n        const userInput = e.target.value;\n        setInputValue(userInput);\n        if (userInput.length > 0) {\n            const filtered = options.filter((suggestion)=>suggestion.key.toLowerCase().includes(userInput.toLowerCase()));\n            setFilteredSuggestions(filtered);\n            setShowSuggestions(true);\n        } else {\n            setShowSuggestions(false);\n        }\n    };\n    const handleSuggestionClick = (suggestion)=>{\n        setInputValue(suggestion);\n        setShowSuggestions(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"autocomplete-wrapper position-relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"text-start fs-6\",\n                children: \"Autocomplete Input\"\n            }, void 0, false, {\n                fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"autocomplete-input bg-light\",\n                type: \"text\",\n                value: inputValue,\n                onChange: handleInputChange,\n                placeholder: \"İl se\\xe7iniz\"\n            }, void 0, false, {\n                fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            showSuggestions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"autocomplete-dropdown z-3 position-absolute top-10 w-100\",\n                children: filteredSuggestions.length > 0 ? filteredSuggestions.map((suggestion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                        className: \"cursor-pointer hover-bg-primary\",\n                        onClick: ()=>handleSuggestionClick(suggestion.key),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            variant: \"ghost\",\n                            className: \"text-start w-100\",\n                            children: suggestion.label\n                        }, void 0, false, {\n                            fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 15\n                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                    children: \"No suggestions available\"\n                }, void 0, false, {\n                    fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AutocompleteInput, \"Moq4Uy3qv9RQTza+Q/WnEucOyw8=\");\n_c = AutocompleteInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AutocompleteInput);\nvar _c;\n$RefreshReg$(_c, \"AutocompleteInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL0F1dG9Db21wbGV0ZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ3lCO0FBRWpFLE1BQU1LLG9CQUFvQjtRQUFDLEVBQUVDLE9BQU8sRUFBRTs7SUFDcEMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1EscUJBQXFCQyx1QkFBdUIsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUNqRSxNQUFNLENBQUNVLGlCQUFpQkMsbUJBQW1CLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXZELE1BQU1ZLG9CQUFvQixDQUFDQztRQUN6QixNQUFNQyxZQUFZRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7UUFDaENULGNBQWNPO1FBRWQsSUFBSUEsVUFBVUcsTUFBTSxHQUFHLEdBQUc7WUFDeEIsTUFBTUMsV0FBV2IsUUFBUWMsTUFBTSxDQUFDLENBQUNDLGFBQWVBLFdBQVdDLEdBQUcsQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNULFVBQVVRLFdBQVc7WUFDM0diLHVCQUF1QlM7WUFDdkJQLG1CQUFtQjtRQUNyQixPQUFPO1lBQ0xBLG1CQUFtQjtRQUNyQjtJQUNGO0lBRUEsTUFBTWEsd0JBQXdCLENBQUNKO1FBQzdCYixjQUFjYTtRQUNkVCxtQkFBbUI7SUFDckI7SUFFQSxxQkFDRSw4REFBQ2M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFrQjs7Ozs7OzBCQUNoQyw4REFBQ3hCLDJHQUFXQTtnQkFDVndCLFdBQVU7Z0JBQ1ZFLE1BQUs7Z0JBQ0xaLE9BQU9WO2dCQUNQdUIsVUFBVWpCO2dCQUNWa0IsYUFBWTs7Ozs7O1lBRWJwQixpQ0FDQyw4REFBQ1AsMkdBQVNBO2dCQUFDdUIsV0FBVTswQkFDbEJsQixvQkFBb0JTLE1BQU0sR0FBRyxJQUM1QlQsb0JBQW9CdUIsR0FBRyxDQUFDLENBQUNYLFlBQVlZLHNCQUNuQyw4REFBQzdCLDJHQUFTQSxDQUFDOEIsSUFBSTt3QkFBYVAsV0FBVTt3QkFBa0NRLFNBQVMsSUFBTVYsc0JBQXNCSixXQUFXQyxHQUFHO2tDQUN6SCw0RUFBQ3BCLDJHQUFNQTs0QkFBQ2tDLFNBQVE7NEJBQVFULFdBQVU7c0NBQy9CTixXQUFXZ0IsS0FBSzs7Ozs7O3VCQUZBSjs7OzttREFPdkIsOERBQUM3QiwyR0FBU0EsQ0FBQzhCLElBQUk7OEJBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVCO0dBbERNN0I7S0FBQUE7QUFvRE4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9BdXRvQ29tcGxldGUuanN4PzhkOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm1Db250cm9sLCBMaXN0R3JvdXAgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IEF1dG9jb21wbGV0ZUlucHV0ID0gKHsgb3B0aW9ucyB9KSA9PiB7XG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZmlsdGVyZWRTdWdnZXN0aW9ucywgc2V0RmlsdGVyZWRTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzaG93U3VnZ2VzdGlvbnMsIHNldFNob3dTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldElucHV0VmFsdWUodXNlcklucHV0KTtcblxuICAgIGlmICh1c2VySW5wdXQubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSBvcHRpb25zLmZpbHRlcigoc3VnZ2VzdGlvbikgPT4gc3VnZ2VzdGlvbi5rZXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh1c2VySW5wdXQudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgc2V0RmlsdGVyZWRTdWdnZXN0aW9ucyhmaWx0ZXJlZCk7XG4gICAgICBzZXRTaG93U3VnZ2VzdGlvbnModHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNob3dTdWdnZXN0aW9ucyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Z2dlc3Rpb25DbGljayA9IChzdWdnZXN0aW9uKSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZShzdWdnZXN0aW9uKTtcbiAgICBzZXRTaG93U3VnZ2VzdGlvbnMoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtd3JhcHBlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtc3RhcnQgZnMtNlwiPkF1dG9jb21wbGV0ZSBJbnB1dDwvaDU+XG4gICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlLWlucHV0IGJnLWxpZ2h0XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIsSwbCBzZcOnaW5pelwiXG4gICAgICAvPlxuICAgICAge3Nob3dTdWdnZXN0aW9ucyAmJiAoXG4gICAgICAgIDxMaXN0R3JvdXAgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlLWRyb3Bkb3duIHotMyBwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMTAgdy0xMDBcIj5cbiAgICAgICAgICB7ZmlsdGVyZWRTdWdnZXN0aW9ucy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgZmlsdGVyZWRTdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlci1iZy1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKHN1Z2dlc3Rpb24ua2V5KX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZ2hvc3RcIiBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0IHctMTAwXCI+XG4gICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbT5ObyBzdWdnZXN0aW9ucyBhdmFpbGFibGU8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dG9jb21wbGV0ZUlucHV0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJGb3JtQ29udHJvbCIsIkxpc3RHcm91cCIsIkF1dG9jb21wbGV0ZUlucHV0Iiwib3B0aW9ucyIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiZmlsdGVyZWRTdWdnZXN0aW9ucyIsInNldEZpbHRlcmVkU3VnZ2VzdGlvbnMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ1c2VySW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsImZpbHRlcmVkIiwiZmlsdGVyIiwic3VnZ2VzdGlvbiIsImtleSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJoYW5kbGVTdWdnZXN0aW9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwibWFwIiwiaW5kZXgiLCJJdGVtIiwib25DbGljayIsInZhcmlhbnQiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dropdown/AutoComplete.jsx\n"));

/***/ })

});