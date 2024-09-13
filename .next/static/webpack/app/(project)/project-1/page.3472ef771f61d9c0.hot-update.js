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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Button,FormControl,ListGroup!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/FormControl.js\");\n/* harmony import */ var _barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,FormControl,ListGroup!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/ListGroup.js\");\n/* harmony import */ var _barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,FormControl,ListGroup!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst AutocompleteInput = (param)=>{\n    let { label, placeholder = \"Se\\xe7iniz\", emptyMessage = \"Sonu\\xe7 bulunamadı\", options, value = \"\", onChangeKey = (selectedKey)=>{} } = param;\n    _s();\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);\n    const [filteredSuggestions, setFilteredSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(options);\n    const [showSuggestions, setShowSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _options_find;\n        setInputValue(((_options_find = options.find((option)=>option.key === value)) === null || _options_find === void 0 ? void 0 : _options_find.label) || \"\");\n        setSelected(value);\n    }, [\n        value,\n        options\n    ]);\n    const handleInputChange = (e)=>{\n        const userInput = e.target.value;\n        setInputValue(userInput);\n        if (userInput.length > 0) {\n            const filtered = options.filter((suggestion)=>suggestion.label.toLowerCase().includes(userInput.toLowerCase()));\n            setFilteredSuggestions(filtered);\n            setShowSuggestions(true);\n        } else {\n            setFilteredSuggestions(options);\n            setShowSuggestions(false);\n        }\n        if (userInput.length === 0) {\n            onChangeKey(\"\");\n        }\n    };\n    const handleSuggestionClick = (suggestion)=>{\n        setInputValue(suggestion.label);\n        setSelected(suggestion.key);\n        onChangeKey(suggestion.key);\n        setShowSuggestions(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (e)=>{\n            if (inputRef.current && !inputRef.current.contains(e.target)) {\n                setShowSuggestions(false);\n            }\n        };\n        document.addEventListener(\"click\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (showSuggestions) {\n            setFilteredSuggestions(options);\n        }\n    }, [\n        showSuggestions,\n        options\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"autocomplete-wrapper position-relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"text-start fs-6\",\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                role: \"button\",\n                className: \"autocomplete-input bg-light\",\n                type: \"text\",\n                ref: inputRef,\n                value: inputValue,\n                onChange: handleInputChange,\n                placeholder: placeholder,\n                onFocus: ()=>setShowSuggestions(true)\n            }, void 0, false, {\n                fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            showSuggestions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"autocomplete-dropdown z-3 position-absolute top-100 start-0 w-100\",\n                children: filteredSuggestions.length > 0 ? filteredSuggestions.map((suggestion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                        style: {\n                            order: suggestion.key === selected ? -1 : index\n                        },\n                        className: \"cursor-pointer\",\n                        disabled: suggestion.key === selected,\n                        onClick: ()=>handleSuggestionClick(suggestion),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"w-100 text-start \".concat(suggestion.key === selected ? \"text-primary\" : \"\"),\n                            variant: suggestion.key === selected ? \"light\" : \"outline-light\",\n                            children: suggestion.label\n                        }, void 0, false, {\n                            fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 17\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 15\n                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_FormControl_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                    children: emptyMessage\n                }, void 0, false, {\n                    fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                    lineNumber: 101,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gorkemdurgun/Development/freelance/orkun-project/src/components/dropdown/AutoComplete.jsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AutocompleteInput, \"LvJPZAEYT3+bRgMpZYZGNR+dAfw=\");\n_c = AutocompleteInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AutocompleteInput);\nvar _c;\n$RefreshReg$(_c, \"AutocompleteInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL0F1dG9Db21wbGV0ZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJEO0FBQ007QUFFakUsTUFBTU8sb0JBQW9CO1FBQUMsRUFDekJDLEtBQUssRUFDTEMsY0FBYyxZQUFTLEVBQ3ZCQyxlQUFlLHFCQUFrQixFQUNqQ0MsT0FBTyxFQUNQQyxRQUFRLEVBQUUsRUFDVkMsY0FBYyxDQUFDQyxlQUFpQixDQUFDLEVBQ2xDOztJQUNDLE1BQU1DLFdBQVdiLDZDQUFNQSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQ2MsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDUztJQUN6QyxNQUFNLENBQUNRLHFCQUFxQkMsdUJBQXVCLEdBQUdsQiwrQ0FBUUEsQ0FBQ1E7SUFDL0QsTUFBTSxDQUFDVyxpQkFBaUJDLG1CQUFtQixHQUFHcEIsK0NBQVFBLENBQUM7SUFFdkRGLGdEQUFTQSxDQUFDO1lBQ01VO1FBQWRNLGNBQWNOLEVBQUFBLGdCQUFBQSxRQUFRYSxJQUFJLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsR0FBRyxLQUFLZCxvQkFBeENELG9DQUFBQSxjQUFnREgsS0FBSyxLQUFJO1FBQ3ZFVyxZQUFZUDtJQUNkLEdBQUc7UUFBQ0E7UUFBT0Q7S0FBUTtJQUVuQixNQUFNZ0Isb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU1DLFlBQVlELEVBQUVFLE1BQU0sQ0FBQ2xCLEtBQUs7UUFDaENLLGNBQWNZO1FBRWQsSUFBSUEsVUFBVUUsTUFBTSxHQUFHLEdBQUc7WUFDeEIsTUFBTUMsV0FBV3JCLFFBQVFzQixNQUFNLENBQUMsQ0FBQ0MsYUFBZUEsV0FBVzFCLEtBQUssQ0FBQzJCLFdBQVcsR0FBR0MsUUFBUSxDQUFDUCxVQUFVTSxXQUFXO1lBQzdHZCx1QkFBdUJXO1lBQ3ZCVCxtQkFBbUI7UUFDckIsT0FBTztZQUNMRix1QkFBdUJWO1lBQ3ZCWSxtQkFBbUI7UUFDckI7UUFFQSxJQUFJTSxVQUFVRSxNQUFNLEtBQUssR0FBRztZQUMxQmxCLFlBQVk7UUFDZDtJQUNGO0lBRUEsTUFBTXdCLHdCQUF3QixDQUFDSDtRQUM3QmpCLGNBQWNpQixXQUFXMUIsS0FBSztRQUM5QlcsWUFBWWUsV0FBV1IsR0FBRztRQUMxQmIsWUFBWXFCLFdBQVdSLEdBQUc7UUFDMUJILG1CQUFtQjtJQUNyQjtJQUVBdEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNcUMscUJBQXFCLENBQUNWO1lBQzFCLElBQUliLFNBQVN3QixPQUFPLElBQUksQ0FBQ3hCLFNBQVN3QixPQUFPLENBQUNDLFFBQVEsQ0FBQ1osRUFBRUUsTUFBTSxHQUFHO2dCQUM1RFAsbUJBQW1CO1lBQ3JCO1FBQ0Y7UUFFQWtCLFNBQVNDLGdCQUFnQixDQUFDLFNBQVNKO1FBRW5DLE9BQU87WUFDTEcsU0FBU0UsbUJBQW1CLENBQUMsU0FBU0w7UUFDeEM7SUFDRixHQUFHLEVBQUU7SUFFTHJDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSXFCLGlCQUFpQjtZQUNuQkQsdUJBQXVCVjtRQUN6QjtJQUNGLEdBQUc7UUFBQ1c7UUFBaUJYO0tBQVE7SUFFN0IscUJBQ0UsOERBQUNpQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQW1CckM7Ozs7OzswQkFDakMsOERBQUNILDJHQUFXQTtnQkFDVjBDLE1BQUs7Z0JBQ0xGLFdBQVU7Z0JBQ1ZHLE1BQUs7Z0JBQ0xDLEtBQUtsQztnQkFDTEgsT0FBT0k7Z0JBQ1BrQyxVQUFVdkI7Z0JBQ1ZsQixhQUFhQTtnQkFDYjBDLFNBQVMsSUFBTTVCLG1CQUFtQjs7Ozs7O1lBRW5DRCxpQ0FDQyw4REFBQ2hCLDJHQUFTQTtnQkFBQ3VDLFdBQVU7MEJBQ2xCekIsb0JBQW9CVyxNQUFNLEdBQUcsSUFDNUJYLG9CQUFvQmdDLEdBQUcsQ0FBQyxDQUFDbEIsWUFBWW1CLHNCQUNuQyw4REFBQy9DLDJHQUFTQSxDQUFDZ0QsSUFBSTt3QkFFYkMsT0FBTzs0QkFBRUMsT0FBT3RCLFdBQVdSLEdBQUcsS0FBS1IsV0FBVyxDQUFDLElBQUltQzt3QkFBTTt3QkFDekRSLFdBQVU7d0JBQ1ZZLFVBQVV2QixXQUFXUixHQUFHLEtBQUtSO3dCQUM3QndDLFNBQVMsSUFBTXJCLHNCQUFzQkg7a0NBRXJDLDRFQUFDOUIsMkdBQU1BOzRCQUNMeUMsV0FBVyxvQkFBc0UsT0FBbERYLFdBQVdSLEdBQUcsS0FBS1IsV0FBVyxpQkFBaUI7NEJBQzlFeUMsU0FBU3pCLFdBQVdSLEdBQUcsS0FBS1IsV0FBVyxVQUFVO3NDQUVoRGdCLFdBQVcxQixLQUFLOzs7Ozs7dUJBVmQ2Qzs7OzttREFlVCw4REFBQy9DLDJHQUFTQSxDQUFDZ0QsSUFBSTs4QkFBRTVDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU03QjtHQXZHTUg7S0FBQUE7QUF5R04sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9BdXRvQ29tcGxldGUuanN4PzhkOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtQ29udHJvbCwgTGlzdEdyb3VwIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBBdXRvY29tcGxldGVJbnB1dCA9ICh7XG4gIGxhYmVsLFxuICBwbGFjZWhvbGRlciA9IFwiU2XDp2luaXpcIixcbiAgZW1wdHlNZXNzYWdlID0gXCJTb251w6cgYnVsdW5hbWFkxLFcIixcbiAgb3B0aW9ucyxcbiAgdmFsdWUgPSBcIlwiLFxuICBvbkNoYW5nZUtleSA9IChzZWxlY3RlZEtleSkgPT4ge30sXG59KSA9PiB7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSh2YWx1ZSk7XG4gIGNvbnN0IFtmaWx0ZXJlZFN1Z2dlc3Rpb25zLCBzZXRGaWx0ZXJlZFN1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlKG9wdGlvbnMpO1xuICBjb25zdCBbc2hvd1N1Z2dlc3Rpb25zLCBzZXRTaG93U3VnZ2VzdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZShvcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLmtleSA9PT0gdmFsdWUpPy5sYWJlbCB8fCBcIlwiKTtcbiAgICBzZXRTZWxlY3RlZCh2YWx1ZSk7XG4gIH0sIFt2YWx1ZSwgb3B0aW9uc10pO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRJbnB1dFZhbHVlKHVzZXJJbnB1dCk7XG5cbiAgICBpZiAodXNlcklucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gb3B0aW9ucy5maWx0ZXIoKHN1Z2dlc3Rpb24pID0+IHN1Z2dlc3Rpb24ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh1c2VySW5wdXQudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgc2V0RmlsdGVyZWRTdWdnZXN0aW9ucyhmaWx0ZXJlZCk7XG4gICAgICBzZXRTaG93U3VnZ2VzdGlvbnModHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbHRlcmVkU3VnZ2VzdGlvbnMob3B0aW9ucyk7XG4gICAgICBzZXRTaG93U3VnZ2VzdGlvbnMoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh1c2VySW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICBvbkNoYW5nZUtleShcIlwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VnZ2VzdGlvbkNsaWNrID0gKHN1Z2dlc3Rpb24pID0+IHtcbiAgICBzZXRJbnB1dFZhbHVlKHN1Z2dlc3Rpb24ubGFiZWwpO1xuICAgIHNldFNlbGVjdGVkKHN1Z2dlc3Rpb24ua2V5KTtcbiAgICBvbkNoYW5nZUtleShzdWdnZXN0aW9uLmtleSk7XG4gICAgc2V0U2hvd1N1Z2dlc3Rpb25zKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChlKSA9PiB7XG4gICAgICBpZiAoaW5wdXRSZWYuY3VycmVudCAmJiAhaW5wdXRSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgc2V0U2hvd1N1Z2dlc3Rpb25zKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNob3dTdWdnZXN0aW9ucykge1xuICAgICAgc2V0RmlsdGVyZWRTdWdnZXN0aW9ucyhvcHRpb25zKTtcbiAgICB9XG4gIH0sIFtzaG93U3VnZ2VzdGlvbnMsIG9wdGlvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlLXdyYXBwZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0IGZzLTZcIj57bGFiZWx9PC9oNT5cbiAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlLWlucHV0IGJnLWxpZ2h0XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldFNob3dTdWdnZXN0aW9ucyh0cnVlKX1cbiAgICAgIC8+XG4gICAgICB7c2hvd1N1Z2dlc3Rpb25zICYmIChcbiAgICAgICAgPExpc3RHcm91cCBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtZHJvcGRvd24gei0zIHBvc2l0aW9uLWFic29sdXRlIHRvcC0xMDAgc3RhcnQtMCB3LTEwMFwiPlxuICAgICAgICAgIHtmaWx0ZXJlZFN1Z2dlc3Rpb25zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICBmaWx0ZXJlZFN1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBvcmRlcjogc3VnZ2VzdGlvbi5rZXkgPT09IHNlbGVjdGVkID8gLTEgOiBpbmRleCB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3VnZ2VzdGlvbi5rZXkgPT09IHNlbGVjdGVkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Z2dlc3Rpb25DbGljayhzdWdnZXN0aW9uKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTAwIHRleHQtc3RhcnQgJHtzdWdnZXN0aW9uLmtleSA9PT0gc2VsZWN0ZWQgPyBcInRleHQtcHJpbWFyeVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD17c3VnZ2VzdGlvbi5rZXkgPT09IHNlbGVjdGVkID8gXCJsaWdodFwiIDogXCJvdXRsaW5lLWxpZ2h0XCJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0+e2VtcHR5TWVzc2FnZX08L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dG9jb21wbGV0ZUlucHV0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJCdXR0b24iLCJGb3JtQ29udHJvbCIsIkxpc3RHcm91cCIsIkF1dG9jb21wbGV0ZUlucHV0IiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImVtcHR5TWVzc2FnZSIsIm9wdGlvbnMiLCJ2YWx1ZSIsIm9uQ2hhbmdlS2V5Iiwic2VsZWN0ZWRLZXkiLCJpbnB1dFJlZiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImZpbHRlcmVkU3VnZ2VzdGlvbnMiLCJzZXRGaWx0ZXJlZFN1Z2dlc3Rpb25zIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwiZmluZCIsIm9wdGlvbiIsImtleSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInVzZXJJbnB1dCIsInRhcmdldCIsImxlbmd0aCIsImZpbHRlcmVkIiwiZmlsdGVyIiwic3VnZ2VzdGlvbiIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJoYW5kbGVTdWdnZXN0aW9uQ2xpY2siLCJoYW5kbGVDbGlja091dHNpZGUiLCJjdXJyZW50IiwiY29udGFpbnMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDUiLCJyb2xlIiwidHlwZSIsInJlZiIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsIm1hcCIsImluZGV4IiwiSXRlbSIsInN0eWxlIiwib3JkZXIiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dropdown/AutoComplete.jsx\n"));

/***/ })

});