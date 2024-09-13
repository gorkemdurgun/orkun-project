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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Button,FormControl,ListGroup!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/FormControl.js\");\n/* harmony import */ var _barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,FormControl,ListGroup!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/ListGroup.js\");\n/* harmony import */ var _barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,FormControl,ListGroup!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst AutocompleteInput = (param)=>{\n    let { label, placeholder = \"Se\\xe7iniz\", options, value = \"\", onChangeKey = (selectedKey)=>{} } = param;\n    _s();\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);\n    const [filteredSuggestions, setFilteredSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(options);\n    const [showSuggestions, setShowSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _options_find;\n        setInputValue(((_options_find = options.find((option)=>option.key === value)) === null || _options_find === void 0 ? void 0 : _options_find.label) || \"\");\n        setSelected(value);\n    }, [\n        value,\n        options\n    ]);\n    const handleInputChange = (e)=>{\n        const userInput = e.target.value;\n        setInputValue(userInput);\n        if (userInput.length > 0) {\n            const filtered = options.filter((suggestion)=>suggestion.label.toLowerCase().includes(userInput.toLowerCase()));\n            setFilteredSuggestions(filtered);\n            setShowSuggestions(true);\n        } else {\n            setFilteredSuggestions([]);\n            setShowSuggestions(false);\n        }\n    };\n    const handleSuggestionClick = (suggestion)=>{\n        setInputValue(suggestion.label);\n        setSelected(suggestion.key);\n        onChangeKey(suggestion.key);\n        setShowSuggestions(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (e)=>{\n            if (inputRef.current && !inputRef.current.contains(e.target)) {\n                setShowSuggestions(false);\n            }\n        };\n        document.addEventListener(\"click\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (showSuggestions) {\n            setFilteredSuggestions(options);\n        }\n    }, [\n        showSuggestions,\n        options\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"autocomplete-wrapper position-relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"text-start fs-6\",\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                role: \"button\",\n                className: \"autocomplete-input bg-light\",\n                type: \"text\",\n                ref: inputRef,\n                value: inputValue,\n                onChange: handleInputChange,\n                placeholder: placeholder,\n                onFocus: ()=>setShowSuggestions(true)\n            }, void 0, false, {\n                fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            showSuggestions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"autocomplete-dropdown z-3 position-absolute top-100 start-0 w-100\",\n                children: filteredSuggestions.length > 0 ? filteredSuggestions.map((suggestion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                        style: {\n                            order: suggestion.key === selected ? -1 : index\n                        },\n                        className: \"cursor-pointer\",\n                        disabled: suggestion.key === selected,\n                        onClick: ()=>handleSuggestionClick(suggestion),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"w-100 text-start \".concat(suggestion.key === selected ? \"text-primary\" : \"\"),\n                            variant: suggestion.key === selected ? \"light\" : \"outline-light\",\n                            children: suggestion.label\n                        }, void 0, false, {\n                            fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 17\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 15\n                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                    children: \"No suggestions available\"\n                }, void 0, false, {\n                    fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AutocompleteInput, \"LvJPZAEYT3+bRgMpZYZGNR+dAfw=\");\n_c = AutocompleteInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AutocompleteInput);\nvar _c;\n$RefreshReg$(_c, \"AutocompleteInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL0F1dG9Db21wbGV0ZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJEO0FBQ007QUFFakUsTUFBTU8sb0JBQW9CO1FBQUMsRUFBRUMsS0FBSyxFQUNoQ0MsY0FBYyxZQUFTLEVBQ3ZCQyxPQUFPLEVBQUVDLFFBQVEsRUFBRSxFQUFFQyxjQUFjLENBQUNDLGVBQWlCLENBQUMsRUFBRTs7SUFDeEQsTUFBTUMsV0FBV1osNkNBQU1BLENBQUM7SUFDeEIsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQ1E7SUFDekMsTUFBTSxDQUFDUSxxQkFBcUJDLHVCQUF1QixHQUFHakIsK0NBQVFBLENBQUNPO0lBQy9ELE1BQU0sQ0FBQ1csaUJBQWlCQyxtQkFBbUIsR0FBR25CLCtDQUFRQSxDQUFDO0lBRXZERixnREFBU0EsQ0FBQztZQUNNUztRQUFkTSxjQUFjTixFQUFBQSxnQkFBQUEsUUFBUWEsSUFBSSxDQUFDLENBQUNDLFNBQVdBLE9BQU9DLEdBQUcsS0FBS2Qsb0JBQXhDRCxvQ0FBQUEsY0FBZ0RGLEtBQUssS0FBSTtRQUN2RVUsWUFBWVA7SUFDZCxHQUFHO1FBQUNBO1FBQU9EO0tBQVE7SUFFbkIsTUFBTWdCLG9CQUFvQixDQUFDQztRQUN6QixNQUFNQyxZQUFZRCxFQUFFRSxNQUFNLENBQUNsQixLQUFLO1FBQ2hDSyxjQUFjWTtRQUVkLElBQUlBLFVBQVVFLE1BQU0sR0FBRyxHQUFHO1lBQ3hCLE1BQU1DLFdBQVdyQixRQUFRc0IsTUFBTSxDQUFDLENBQUNDLGFBQWVBLFdBQVd6QixLQUFLLENBQUMwQixXQUFXLEdBQUdDLFFBQVEsQ0FBQ1AsVUFBVU0sV0FBVztZQUM3R2QsdUJBQXVCVztZQUN2QlQsbUJBQW1CO1FBQ3JCLE9BQU87WUFDTEYsdUJBQXVCLEVBQUU7WUFDekJFLG1CQUFtQjtRQUNyQjtJQUNGO0lBRUEsTUFBTWMsd0JBQXdCLENBQUNIO1FBQzdCakIsY0FBY2lCLFdBQVd6QixLQUFLO1FBQzlCVSxZQUFZZSxXQUFXUixHQUFHO1FBQzFCYixZQUFZcUIsV0FBV1IsR0FBRztRQUMxQkgsbUJBQW1CO0lBQ3JCO0lBRUFyQixnREFBU0EsQ0FBQztRQUNSLE1BQU1vQyxxQkFBcUIsQ0FBQ1Y7WUFDMUIsSUFBSWIsU0FBU3dCLE9BQU8sSUFBSSxDQUFDeEIsU0FBU3dCLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDWixFQUFFRSxNQUFNLEdBQUc7Z0JBQzVEUCxtQkFBbUI7WUFDckI7UUFDRjtRQUVBa0IsU0FBU0MsZ0JBQWdCLENBQUMsU0FBU0o7UUFFbkMsT0FBTztZQUNMRyxTQUFTRSxtQkFBbUIsQ0FBQyxTQUFTTDtRQUN4QztJQUNGLEdBQUcsRUFBRTtJQUVMcEMsZ0RBQVNBLENBQUM7UUFDUixJQUFJb0IsaUJBQWlCO1lBQ25CRCx1QkFBdUJWO1FBQ3pCO0lBQ0YsR0FBRztRQUFDVztRQUFpQlg7S0FBUTtJQUU3QixxQkFDRSw4REFBQ2lDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBbUJwQzs7Ozs7OzBCQUNqQyw4REFBQ0gsMkdBQVdBO2dCQUNWeUMsTUFBSztnQkFDTEYsV0FBVTtnQkFDVkcsTUFBSztnQkFDTEMsS0FBS2xDO2dCQUNMSCxPQUFPSTtnQkFDUGtDLFVBQVV2QjtnQkFDVmpCLGFBQWFBO2dCQUNieUMsU0FBUyxJQUFNNUIsbUJBQW1COzs7Ozs7WUFFbkNELGlDQUNDLDhEQUFDZiwyR0FBU0E7Z0JBQUNzQyxXQUFVOzBCQUNsQnpCLG9CQUFvQlcsTUFBTSxHQUFHLElBQzVCWCxvQkFBb0JnQyxHQUFHLENBQUMsQ0FBQ2xCLFlBQVltQixzQkFDbkMsOERBQUM5QywyR0FBU0EsQ0FBQytDLElBQUk7d0JBRWJDLE9BQU87NEJBQUVDLE9BQU90QixXQUFXUixHQUFHLEtBQUtSLFdBQVcsQ0FBQyxJQUFJbUM7d0JBQU07d0JBQ3pEUixXQUFVO3dCQUNWWSxVQUFVdkIsV0FBV1IsR0FBRyxLQUFLUjt3QkFDN0J3QyxTQUFTLElBQU1yQixzQkFBc0JIO2tDQUVyQyw0RUFBQzdCLDJHQUFNQTs0QkFDTHdDLFdBQVcsb0JBQXNFLE9BQWxEWCxXQUFXUixHQUFHLEtBQUtSLFdBQVcsaUJBQWlCOzRCQUM5RXlDLFNBQVN6QixXQUFXUixHQUFHLEtBQUtSLFdBQVcsVUFBVTtzQ0FFaERnQixXQUFXekIsS0FBSzs7Ozs7O3VCQVZkNEM7Ozs7bURBZVQsOERBQUM5QywyR0FBU0EsQ0FBQytDLElBQUk7OEJBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVCO0dBOUZNOUM7S0FBQUE7QUFnR04sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9BdXRvQ29tcGxldGUuanN4PzhkOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtQ29udHJvbCwgTGlzdEdyb3VwIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBBdXRvY29tcGxldGVJbnB1dCA9ICh7IGxhYmVsLFxuICBwbGFjZWhvbGRlciA9IFwiU2XDp2luaXpcIixcbiAgb3B0aW9ucywgdmFsdWUgPSBcIlwiLCBvbkNoYW5nZUtleSA9IChzZWxlY3RlZEtleSkgPT4ge30gfSkgPT4ge1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUodmFsdWUpO1xuICBjb25zdCBbZmlsdGVyZWRTdWdnZXN0aW9ucywgc2V0RmlsdGVyZWRTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZShvcHRpb25zKTtcbiAgY29uc3QgW3Nob3dTdWdnZXN0aW9ucywgc2V0U2hvd1N1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElucHV0VmFsdWUob3B0aW9ucy5maW5kKChvcHRpb24pID0+IG9wdGlvbi5rZXkgPT09IHZhbHVlKT8ubGFiZWwgfHwgXCJcIik7XG4gICAgc2V0U2VsZWN0ZWQodmFsdWUpO1xuICB9LCBbdmFsdWUsIG9wdGlvbnNdKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0SW5wdXRWYWx1ZSh1c2VySW5wdXQpO1xuXG4gICAgaWYgKHVzZXJJbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IG9wdGlvbnMuZmlsdGVyKChzdWdnZXN0aW9uKSA9PiBzdWdnZXN0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModXNlcklucHV0LnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgIHNldEZpbHRlcmVkU3VnZ2VzdGlvbnMoZmlsdGVyZWQpO1xuICAgICAgc2V0U2hvd1N1Z2dlc3Rpb25zKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRGaWx0ZXJlZFN1Z2dlc3Rpb25zKFtdKTtcbiAgICAgIHNldFNob3dTdWdnZXN0aW9ucyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Z2dlc3Rpb25DbGljayA9IChzdWdnZXN0aW9uKSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZShzdWdnZXN0aW9uLmxhYmVsKTtcbiAgICBzZXRTZWxlY3RlZChzdWdnZXN0aW9uLmtleSk7XG4gICAgb25DaGFuZ2VLZXkoc3VnZ2VzdGlvbi5rZXkpO1xuICAgIHNldFNob3dTdWdnZXN0aW9ucyhmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZSkgPT4ge1xuICAgICAgaWYgKGlucHV0UmVmLmN1cnJlbnQgJiYgIWlucHV0UmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHNldFNob3dTdWdnZXN0aW9ucyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaG93U3VnZ2VzdGlvbnMpIHtcbiAgICAgIHNldEZpbHRlcmVkU3VnZ2VzdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuICB9LCBbc2hvd1N1Z2dlc3Rpb25zLCBvcHRpb25zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZS13cmFwcGVyIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1zdGFydCBmcy02XCI+e2xhYmVsfTwvaDU+XG4gICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZS1pbnB1dCBiZy1saWdodFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRTaG93U3VnZ2VzdGlvbnModHJ1ZSl9XG4gICAgICAvPlxuICAgICAge3Nob3dTdWdnZXN0aW9ucyAmJiAoXG4gICAgICAgIDxMaXN0R3JvdXAgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlLWRyb3Bkb3duIHotMyBwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMTAwIHN0YXJ0LTAgdy0xMDBcIj5cbiAgICAgICAgICB7ZmlsdGVyZWRTdWdnZXN0aW9ucy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgZmlsdGVyZWRTdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgb3JkZXI6IHN1Z2dlc3Rpb24ua2V5ID09PSBzZWxlY3RlZCA/IC0xIDogaW5kZXggfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Z2dlc3Rpb24ua2V5ID09PSBzZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWdnZXN0aW9uQ2xpY2soc3VnZ2VzdGlvbil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEwMCB0ZXh0LXN0YXJ0ICR7c3VnZ2VzdGlvbi5rZXkgPT09IHNlbGVjdGVkID8gXCJ0ZXh0LXByaW1hcnlcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e3N1Z2dlc3Rpb24ua2V5ID09PSBzZWxlY3RlZCA/IFwibGlnaHRcIiA6IFwib3V0bGluZS1saWdodFwifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtPk5vIHN1Z2dlc3Rpb25zIGF2YWlsYWJsZTwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0b2NvbXBsZXRlSW5wdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm1Db250cm9sIiwiTGlzdEdyb3VwIiwiQXV0b2NvbXBsZXRlSW5wdXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwib3B0aW9ucyIsInZhbHVlIiwib25DaGFuZ2VLZXkiLCJzZWxlY3RlZEtleSIsImlucHV0UmVmIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZmlsdGVyZWRTdWdnZXN0aW9ucyIsInNldEZpbHRlcmVkU3VnZ2VzdGlvbnMiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJmaW5kIiwib3B0aW9uIiwia2V5IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidXNlcklucHV0IiwidGFyZ2V0IiwibGVuZ3RoIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJzdWdnZXN0aW9uIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImhhbmRsZVN1Z2dlc3Rpb25DbGljayIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImN1cnJlbnQiLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsInJvbGUiLCJ0eXBlIiwicmVmIiwib25DaGFuZ2UiLCJvbkZvY3VzIiwibWFwIiwiaW5kZXgiLCJJdGVtIiwic3R5bGUiLCJvcmRlciIsImRpc2FibGVkIiwib25DbGljayIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dropdown/AutoComplete.jsx\n"));

/***/ })

});