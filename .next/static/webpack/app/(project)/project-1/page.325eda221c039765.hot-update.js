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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Button,FormControl,ListGroup!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/FormControl.js\");\n/* harmony import */ var _barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,FormControl,ListGroup!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/ListGroup.js\");\n/* harmony import */ var _barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,FormControl,ListGroup!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst AutocompleteInput = (param)=>{\n    let { options } = param;\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [filteredSuggestions, setFilteredSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [showSuggestions, setShowSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleInputChange = (e)=>{\n        const userInput = e.target.value;\n        setInputValue(userInput);\n        if (userInput.length > 0) {\n            const filtered = options.filter((suggestion)=>suggestion.key.toLowerCase().includes(userInput.toLowerCase()));\n            setFilteredSuggestions(filtered);\n            setShowSuggestions(true);\n        } else {\n            setShowSuggestions(false);\n        }\n    };\n    const handleSuggestionClick = (suggestion)=>{\n        setInputValue(suggestion);\n        setShowSuggestions(false);\n    };\n    document.addEventListener(\"click\", (e)=>{\n        if (e.target.closest(\".autocomplete-wrapper\") === null) {\n            setShowSuggestions(false);\n        }\n    });\n    // when user clicks on the input field, show suggestions\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"autocomplete-wrapper position-relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"text-start fs-6\",\n                children: \"Autocomplete Input\"\n            }, void 0, false, {\n                fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"autocomplete-input bg-light\",\n                type: \"text\",\n                value: inputValue,\n                onChange: handleInputChange,\n                placeholder: \"İl se\\xe7iniz\"\n            }, void 0, false, {\n                fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            showSuggestions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"autocomplete-dropdown z-3 position-absolute top-10 w-100\",\n                children: filteredSuggestions.length > 0 ? filteredSuggestions.map((suggestion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                        className: \"cursor-pointer hover-bg-primary\",\n                        onClick: ()=>handleSuggestionClick(suggestion.label),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            variant: \"ghost\",\n                            className: \"text-start w-100\",\n                            children: suggestion.label\n                        }, void 0, false, {\n                            fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 17\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 15\n                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                    children: \"No suggestions available\"\n                }, void 0, false, {\n                    fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AutocompleteInput, \"Moq4Uy3qv9RQTza+Q/WnEucOyw8=\");\n_c = AutocompleteInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AutocompleteInput);\nvar _c;\n$RefreshReg$(_c, \"AutocompleteInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL0F1dG9Db21wbGV0ZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ3lCO0FBRWpFLE1BQU1LLG9CQUFvQjtRQUFDLEVBQUVDLE9BQU8sRUFBRTs7SUFDcEMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1EscUJBQXFCQyx1QkFBdUIsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUNqRSxNQUFNLENBQUNVLGlCQUFpQkMsbUJBQW1CLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXZELE1BQU1ZLG9CQUFvQixDQUFDQztRQUN6QixNQUFNQyxZQUFZRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7UUFDaENULGNBQWNPO1FBRWQsSUFBSUEsVUFBVUcsTUFBTSxHQUFHLEdBQUc7WUFDeEIsTUFBTUMsV0FBV2IsUUFBUWMsTUFBTSxDQUFDLENBQUNDLGFBQWVBLFdBQVdDLEdBQUcsQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNULFVBQVVRLFdBQVc7WUFDM0diLHVCQUF1QlM7WUFDdkJQLG1CQUFtQjtRQUNyQixPQUFPO1lBQ0xBLG1CQUFtQjtRQUNyQjtJQUNGO0lBRUEsTUFBTWEsd0JBQXdCLENBQUNKO1FBQzdCYixjQUFjYTtRQUNkVCxtQkFBbUI7SUFDckI7SUFFQWMsU0FBU0MsZ0JBQWdCLENBQUMsU0FBUyxDQUFDYjtRQUNsQyxJQUFJQSxFQUFFRSxNQUFNLENBQUNZLE9BQU8sQ0FBQyw2QkFBNkIsTUFBTTtZQUN0RGhCLG1CQUFtQjtRQUNyQjtJQUNGO0lBRUEsd0RBQXdEO0lBR3hELHFCQUNFLDhEQUFDaUI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFrQjs7Ozs7OzBCQUNoQyw4REFBQzNCLDJHQUFXQTtnQkFDVjJCLFdBQVU7Z0JBQ1ZFLE1BQUs7Z0JBQ0xmLE9BQU9WO2dCQUNQMEIsVUFBVXBCO2dCQUNWcUIsYUFBWTs7Ozs7O1lBRWJ2QixpQ0FDQyw4REFBQ1AsMkdBQVNBO2dCQUFDMEIsV0FBVTswQkFDbEJyQixvQkFBb0JTLE1BQU0sR0FBRyxJQUM1QlQsb0JBQW9CMEIsR0FBRyxDQUFDLENBQUNkLFlBQVllLHNCQUNuQyw4REFBQ2hDLDJHQUFTQSxDQUFDaUMsSUFBSTt3QkFBYVAsV0FBVTt3QkFBa0NRLFNBQVMsSUFBTWIsc0JBQXNCSixXQUFXa0IsS0FBSztrQ0FDM0gsNEVBQUNyQywyR0FBTUE7NEJBQUNzQyxTQUFROzRCQUFRVixXQUFVO3NDQUMvQlQsV0FBV2tCLEtBQUs7Ozs7Ozt1QkFGQUg7Ozs7bURBT3ZCLDhEQUFDaEMsMkdBQVNBLENBQUNpQyxJQUFJOzhCQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU01QjtHQTNETWhDO0tBQUFBO0FBNkROLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vQXV0b0NvbXBsZXRlLmpzeD84ZDkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtQ29udHJvbCwgTGlzdEdyb3VwIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBBdXRvY29tcGxldGVJbnB1dCA9ICh7IG9wdGlvbnMgfSkgPT4ge1xuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ZpbHRlcmVkU3VnZ2VzdGlvbnMsIHNldEZpbHRlcmVkU3VnZ2VzdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2hvd1N1Z2dlc3Rpb25zLCBzZXRTaG93U3VnZ2VzdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRJbnB1dFZhbHVlKHVzZXJJbnB1dCk7XG5cbiAgICBpZiAodXNlcklucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gb3B0aW9ucy5maWx0ZXIoKHN1Z2dlc3Rpb24pID0+IHN1Z2dlc3Rpb24ua2V5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModXNlcklucHV0LnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgIHNldEZpbHRlcmVkU3VnZ2VzdGlvbnMoZmlsdGVyZWQpO1xuICAgICAgc2V0U2hvd1N1Z2dlc3Rpb25zKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTaG93U3VnZ2VzdGlvbnMoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWdnZXN0aW9uQ2xpY2sgPSAoc3VnZ2VzdGlvbikgPT4ge1xuICAgIHNldElucHV0VmFsdWUoc3VnZ2VzdGlvbik7XG4gICAgc2V0U2hvd1N1Z2dlc3Rpb25zKGZhbHNlKTtcbiAgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi5hdXRvY29tcGxldGUtd3JhcHBlclwiKSA9PT0gbnVsbCkge1xuICAgICAgc2V0U2hvd1N1Z2dlc3Rpb25zKGZhbHNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHdoZW4gdXNlciBjbGlja3Mgb24gdGhlIGlucHV0IGZpZWxkLCBzaG93IHN1Z2dlc3Rpb25zXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtd3JhcHBlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtc3RhcnQgZnMtNlwiPkF1dG9jb21wbGV0ZSBJbnB1dDwvaDU+XG4gICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlLWlucHV0IGJnLWxpZ2h0XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIsSwbCBzZcOnaW5pelwiXG4gICAgICAvPlxuICAgICAge3Nob3dTdWdnZXN0aW9ucyAmJiAoXG4gICAgICAgIDxMaXN0R3JvdXAgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlLWRyb3Bkb3duIHotMyBwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMTAgdy0xMDBcIj5cbiAgICAgICAgICB7ZmlsdGVyZWRTdWdnZXN0aW9ucy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgZmlsdGVyZWRTdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlci1iZy1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKHN1Z2dlc3Rpb24ubGFiZWwpfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIGNsYXNzTmFtZT1cInRleHQtc3RhcnQgdy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtPk5vIHN1Z2dlc3Rpb25zIGF2YWlsYWJsZTwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0b2NvbXBsZXRlSW5wdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm1Db250cm9sIiwiTGlzdEdyb3VwIiwiQXV0b2NvbXBsZXRlSW5wdXQiLCJvcHRpb25zIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJmaWx0ZXJlZFN1Z2dlc3Rpb25zIiwic2V0RmlsdGVyZWRTdWdnZXN0aW9ucyIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInVzZXJJbnB1dCIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJzdWdnZXN0aW9uIiwia2V5IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImhhbmRsZVN1Z2dlc3Rpb25DbGljayIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3Nlc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwibWFwIiwiaW5kZXgiLCJJdGVtIiwib25DbGljayIsImxhYmVsIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dropdown/AutoComplete.jsx\n"));

/***/ })

});