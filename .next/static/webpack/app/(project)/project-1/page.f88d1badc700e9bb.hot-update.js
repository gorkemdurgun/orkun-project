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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,ListGroup!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/FormControl.js\");\n/* harmony import */ var _barrel_optimize_names_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FormControl,ListGroup!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/ListGroup.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst AutocompleteInput = (param)=>{\n    let { options } = param;\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [filteredSuggestions, setFilteredSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [showSuggestions, setShowSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleInputChange = (e)=>{\n        const userInput = e.target.value;\n        setInputValue(userInput);\n        if (userInput.length > 0) {\n            const filtered = options.filter((suggestion)=>suggestion.toLowerCase().includes(userInput.toLowerCase()));\n            setFilteredSuggestions(filtered);\n            setShowSuggestions(true);\n        } else {\n            setShowSuggestions(false);\n        }\n    };\n    const handleSuggestionClick = (suggestion)=>{\n        setInputValue(suggestion);\n        setShowSuggestions(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"autocomplete realtive\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                type: \"text\",\n                value: inputValue,\n                onChange: handleInputChange,\n                placeholder: \"Type to search...\"\n            }, void 0, false, {\n                fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            showSuggestions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"autocomplete-suggestions\",\n                children: filteredSuggestions.length > 0 ? filteredSuggestions.map((suggestion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                        onClick: ()=>handleSuggestionClick(suggestion),\n                        children: suggestion\n                    }, index, false, {\n                        fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 15\n                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                    children: \"No suggestions available\"\n                }, void 0, false, {\n                    fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AutocompleteInput, \"ICOXpbPKjONtd6n603eWMBluNWs=\");\n_c = AutocompleteInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AutocompleteInput);\nvar _c;\n$RefreshReg$(_c, \"AutocompleteInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL0F1dG9Db21wbGV0ZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDaUI7QUFFekQsTUFBTUksb0JBQW9CO1FBQUMsRUFBRUMsT0FBTyxFQUFFOztJQUNwQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDTyxxQkFBcUJDLHVCQUF1QixHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pFLE1BQU0sQ0FBQ1MsaUJBQWlCQyxtQkFBbUIsR0FBR1YsK0NBQVFBLENBQUM7SUFFdkQsTUFBTVcsb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU1DLFlBQVlELEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztRQUNoQ1QsY0FBY087UUFFZCxJQUFJQSxVQUFVRyxNQUFNLEdBQUcsR0FBRztZQUN4QixNQUFNQyxXQUFXYixRQUFRYyxNQUFNLENBQUMsQ0FBQ0MsYUFDL0JBLFdBQVdDLFdBQVcsR0FBR0MsUUFBUSxDQUFDUixVQUFVTyxXQUFXO1lBRXpEWix1QkFBdUJTO1lBQ3ZCUCxtQkFBbUI7UUFDckIsT0FBTztZQUNMQSxtQkFBbUI7UUFDckI7SUFDRjtJQUVBLE1BQU1ZLHdCQUF3QixDQUFDSDtRQUM3QmIsY0FBY2E7UUFDZFQsbUJBQW1CO0lBQ3JCO0lBRUEscUJBQ0UsOERBQUNhO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDdkIsb0dBQVdBO2dCQUNWd0IsTUFBSztnQkFDTFYsT0FBT1Y7Z0JBQ1BxQixVQUFVZjtnQkFDVmdCLGFBQVk7Ozs7OztZQUVibEIsaUNBQ0MsOERBQUNQLG9HQUFTQTtnQkFBQ3NCLFdBQVU7MEJBQ2xCakIsb0JBQW9CUyxNQUFNLEdBQUcsSUFDNUJULG9CQUFvQnFCLEdBQUcsQ0FBQyxDQUFDVCxZQUFZVSxzQkFDbkMsOERBQUMzQixvR0FBU0EsQ0FBQzRCLElBQUk7d0JBRWJDLFNBQVMsSUFBTVQsc0JBQXNCSDtrQ0FFcENBO3VCQUhJVTs7OzttREFPVCw4REFBQzNCLG9HQUFTQSxDQUFDNEIsSUFBSTs4QkFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUI7R0FuRE0zQjtLQUFBQTtBQXFETiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL0F1dG9Db21wbGV0ZS5qc3g/OGQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTGlzdEdyb3VwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY29uc3QgQXV0b2NvbXBsZXRlSW5wdXQgPSAoeyBvcHRpb25zIH0pID0+IHtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZmlsdGVyZWRTdWdnZXN0aW9ucywgc2V0RmlsdGVyZWRTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzaG93U3VnZ2VzdGlvbnMsIHNldFNob3dTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldElucHV0VmFsdWUodXNlcklucHV0KTtcblxuICAgIGlmICh1c2VySW5wdXQubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSBvcHRpb25zLmZpbHRlcigoc3VnZ2VzdGlvbikgPT5cbiAgICAgICAgc3VnZ2VzdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHVzZXJJbnB1dC50b0xvd2VyQ2FzZSgpKVxuICAgICAgKTtcbiAgICAgIHNldEZpbHRlcmVkU3VnZ2VzdGlvbnMoZmlsdGVyZWQpO1xuICAgICAgc2V0U2hvd1N1Z2dlc3Rpb25zKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTaG93U3VnZ2VzdGlvbnMoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWdnZXN0aW9uQ2xpY2sgPSAoc3VnZ2VzdGlvbikgPT4ge1xuICAgIHNldElucHV0VmFsdWUoc3VnZ2VzdGlvbik7XG4gICAgc2V0U2hvd1N1Z2dlc3Rpb25zKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlIHJlYWx0aXZlXCI+XG4gICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgdG8gc2VhcmNoLi4uXCJcbiAgICAgIC8+XG4gICAgICB7c2hvd1N1Z2dlc3Rpb25zICYmIChcbiAgICAgICAgPExpc3RHcm91cCBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtc3VnZ2VzdGlvbnNcIj5cbiAgICAgICAgICB7ZmlsdGVyZWRTdWdnZXN0aW9ucy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgZmlsdGVyZWRTdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKHN1Z2dlc3Rpb24pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3N1Z2dlc3Rpb259XG4gICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0+Tm8gc3VnZ2VzdGlvbnMgYXZhaWxhYmxlPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0xpc3RHcm91cD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRvY29tcGxldGVJbnB1dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybUNvbnRyb2wiLCJMaXN0R3JvdXAiLCJBdXRvY29tcGxldGVJbnB1dCIsIm9wdGlvbnMiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImZpbHRlcmVkU3VnZ2VzdGlvbnMiLCJzZXRGaWx0ZXJlZFN1Z2dlc3Rpb25zIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidXNlcklucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJmaWx0ZXJlZCIsImZpbHRlciIsInN1Z2dlc3Rpb24iLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaGFuZGxlU3VnZ2VzdGlvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJtYXAiLCJpbmRleCIsIkl0ZW0iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dropdown/AutoComplete.jsx\n"));

/***/ })

});