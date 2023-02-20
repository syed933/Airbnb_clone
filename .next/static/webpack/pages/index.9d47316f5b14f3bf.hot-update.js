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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"./node_modules/@heroicons/react/24/solid/index.js\");\n/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-date-range/dist/styles.css */ \"./node_modules/react-date-range/dist/styles.css\");\n/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-date-range/dist/theme/default.css */ \"./node_modules/react-date-range/dist/theme/default.css\");\n/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-date-range */ \"./node_modules/react-date-range/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// Imports styles for react-date-range picker\n // main style file\n // theme css file \n//React-date-range picker\n\nfunction Header() {\n    _s();\n    //Building the Search feature below using useState\n    //Inside our useState goes the initial value, but here its an empty string \n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    //We're creating two instances of state for startDate and endDate for our date picker\n    // Start date will be today's date\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    //Selection range for date picker\n    const selectionRange = {\n        startDate: startDate,\n        endDate: endDate,\n        key: \"selection\"\n    };\n    // This is our function that allows users to pick a start and end date\n    // The ranges parameter is give to us by the get-date-range in property\n    const handleSelect = (ranges)=>{\n        setStartDate(ranges.selection.startDate);\n        setEndDate(ranges.selection.endDate);\n    };\n    return(// main header container\n    //Tailwind is Mobile first, so we'll adjust our breakpoint media queries for larger screens,for example medium screens will have padding 10px as md:px-10\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex items-center h-10 cursor-pointer my-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"https://links.papareact.com/qd3\",\n                    fill: true,\n                    className: \"object-contain object-left\"\n                }, void 0, false, {\n                    fileName: \"/Users/syed/github_projects/airbnb_fullStack/components/Header.js\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/syed/github_projects/airbnb_fullStack/components/Header.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center md:border-2 rounded-full py-2 md:shadow-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400\",\n                        type: \"text\",\n                        placeholder: \"Start your search\",\n                        // --- The value from useState goes here inside our input ---\n                        value: searchInput,\n                        onChange: (e)=>setSearchInput(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/syed/github_projects/airbnb_fullStack/components/Header.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__.MagnifyingGlassIcon, {\n                        className: \"hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/syed/github_projects/airbnb_fullStack/components/Header.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/syed/github_projects/airbnb_fullStack/components/Header.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-end space-x-4 text-gray-500\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"hidden md:inline\",\n                        children: \"Become a host\"\n                    }, void 0, false, {\n                        fileName: \"/Users/syed/github_projects/airbnb_fullStack/components/Header.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__.GlobeAltIcon, {\n                        className: \"h-6 cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/syed/github_projects/airbnb_fullStack/components/Header.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2 border-2 p-2 rounded-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__.Bars3Icon, {\n                                className: \"h-6 cursor-pointer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/syed/github_projects/airbnb_fullStack/components/Header.js\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__.UserCircleIcon, {\n                                className: \"h-6 cursor-pointer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/syed/github_projects/airbnb_fullStack/components/Header.js\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/syed/github_projects/airbnb_fullStack/components/Header.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/syed/github_projects/airbnb_fullStack/components/Header.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this),\n            searchInput && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_date_range__WEBPACK_IMPORTED_MODULE_5__.DateRangePicker, {\n                    ranges: [\n                        selectionRange\n                    ],\n                    minDate: new Date(),\n                    rangeColors: [\n                        \"#FD5B61\"\n                    ],\n                    onChange: handleSelect\n                }, void 0, false, {\n                    fileName: \"/Users/syed/github_projects/airbnb_fullStack/components/Header.js\",\n                    lineNumber: 98,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/syed/github_projects/airbnb_fullStack/components/Header.js\",\n                lineNumber: 97,\n                columnNumber: 16\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/syed/github_projects/airbnb_fullStack/components/Header.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this));\n}\n_s(Header, \"Sn0L7GN+7qHiTMg5W14hyRTwFV8=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVDtBQVFJO0FBRWxDLDZDQUE2QztBQUNILENBQUMsa0JBQWtCO0FBQ1osQ0FBQyxrQkFBa0I7QUFDcEUseUJBQXlCO0FBQzBCO0FBR25ELFNBQVNTLFNBQVM7O0lBRWQsa0RBQWtEO0lBQ2xELDJFQUEyRTtJQUMzRSxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFFL0MscUZBQXFGO0lBQ3JGLGtDQUFrQztJQUNsQyxNQUFLLENBQUNXLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUMsSUFBSWE7SUFDOUMsTUFBSyxDQUFDQyxTQUFTQyxXQUFXLEdBQUdmLCtDQUFRQSxDQUFDLElBQUlhO0lBRTFDLGlDQUFpQztJQUNqQyxNQUFNRyxpQkFBaUI7UUFDbkJMLFdBQVdBO1FBQ1hHLFNBQVNBO1FBQ1RHLEtBQUs7SUFDVDtJQUVBLHNFQUFzRTtJQUN0RSx1RUFBdUU7SUFDdkUsTUFBTUMsZUFBZSxDQUFDQyxTQUFXO1FBQzdCUCxhQUFhTyxPQUFPQyxTQUFTLENBQUNULFNBQVM7UUFDdkNJLFdBQVdJLE9BQU9DLFNBQVMsQ0FBQ04sT0FBTztJQUN2QztJQUlBLE9BQ0ksd0JBQXdCO0lBQ3hCLHlKQUF5SjtrQkFDekosOERBQUNPO1FBQU9DLFdBQVU7OzBCQUVkLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWCw0RUFBQ3JCLG1EQUFLQTtvQkFDSHVCLEtBQUk7b0JBQ0pDLElBQUk7b0JBQ0pILFdBQVU7Ozs7Ozs7Ozs7OzBCQVFqQiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUlYLDhEQUFDSTt3QkFBTUosV0FBVTt3QkFBd0ZLLE1BQUs7d0JBQU9DLGFBQVk7d0JBQ2pJLDZEQUE2RDt3QkFDN0RDLE9BQU9wQjt3QkFDUHFCLFVBQVUsQ0FBQ0MsSUFBTXJCLGVBQWVxQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FLOUMsOERBQUMzQiwwRUFBbUJBO3dCQUFDb0IsV0FBVTs7Ozs7Ozs7Ozs7OzBCQU1uQyw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUVYLDhEQUFDVzt3QkFBRVgsV0FBVTtrQ0FBbUI7Ozs7OztrQ0FDaEMsOERBQUNsQixtRUFBWUE7d0JBQUNrQixXQUFVOzs7Ozs7a0NBQ3hCLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ1gsOERBQUNuQixnRUFBU0E7Z0NBQUNtQixXQUFVOzs7Ozs7MENBQ3JCLDhEQUFDakIscUVBQWNBO2dDQUFDaUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUWpDYiw2QkFFRSw4REFBQ2M7MEJBQ0ksNEVBQUNoQiw2REFBZUE7b0JBQ1pZLFFBQVE7d0JBQUNIO3FCQUFlO29CQUN4QmtCLFNBQVMsSUFBSXJCO29CQUNic0IsYUFBYTt3QkFBQztxQkFBVTtvQkFDeEJMLFVBQVVaOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9sQztHQTFGU1Y7S0FBQUE7QUE0RlQsK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgXG4gICAgTWFnbmlmeWluZ0dsYXNzSWNvbixcbiAgICBCYXJzM0ljb24sXG4gICAgR2xvYmVBbHRJY29uLFxuICAgIFVzZXJDaXJjbGVJY29uLFxuICAgIFVzZXJzSWNvbixcblxufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkJ1xuXG4vLyBJbXBvcnRzIHN0eWxlcyBmb3IgcmVhY3QtZGF0ZS1yYW5nZSBwaWNrZXJcbmltcG9ydCAncmVhY3QtZGF0ZS1yYW5nZS9kaXN0L3N0eWxlcy5jc3MnOyAvLyBtYWluIHN0eWxlIGZpbGVcbmltcG9ydCAncmVhY3QtZGF0ZS1yYW5nZS9kaXN0L3RoZW1lL2RlZmF1bHQuY3NzJzsgLy8gdGhlbWUgY3NzIGZpbGUgXG4vL1JlYWN0LWRhdGUtcmFuZ2UgcGlja2VyXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIgfSBmcm9tICdyZWFjdC1kYXRlLXJhbmdlJztcblxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG5cbiAgICAvL0J1aWxkaW5nIHRoZSBTZWFyY2ggZmVhdHVyZSBiZWxvdyB1c2luZyB1c2VTdGF0ZVxuICAgIC8vSW5zaWRlIG91ciB1c2VTdGF0ZSBnb2VzIHRoZSBpbml0aWFsIHZhbHVlLCBidXQgaGVyZSBpdHMgYW4gZW1wdHkgc3RyaW5nIFxuICAgIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgLy9XZSdyZSBjcmVhdGluZyB0d28gaW5zdGFuY2VzIG9mIHN0YXRlIGZvciBzdGFydERhdGUgYW5kIGVuZERhdGUgZm9yIG91ciBkYXRlIHBpY2tlclxuICAgIC8vIFN0YXJ0IGRhdGUgd2lsbCBiZSB0b2RheSdzIGRhdGVcbiAgICBjb25zdFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcbiAgICBjb25zdFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuXG4gICAgLy9TZWxlY3Rpb24gcmFuZ2UgZm9yIGRhdGUgcGlja2VyXG4gICAgY29uc3Qgc2VsZWN0aW9uUmFuZ2UgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBlbmREYXRlLFxuICAgICAgICBrZXk6ICdzZWxlY3Rpb24nXG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyBvdXIgZnVuY3Rpb24gdGhhdCBhbGxvd3MgdXNlcnMgdG8gcGljayBhIHN0YXJ0IGFuZCBlbmQgZGF0ZVxuICAgIC8vIFRoZSByYW5nZXMgcGFyYW1ldGVyIGlzIGdpdmUgdG8gdXMgYnkgdGhlIGdldC1kYXRlLXJhbmdlIGluIHByb3BlcnR5XG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHJhbmdlcykgPT4ge1xuICAgICAgICBzZXRTdGFydERhdGUocmFuZ2VzLnNlbGVjdGlvbi5zdGFydERhdGUpO1xuICAgICAgICBzZXRFbmREYXRlKHJhbmdlcy5zZWxlY3Rpb24uZW5kRGF0ZSk7XG4gICAgfVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIC8vIG1haW4gaGVhZGVyIGNvbnRhaW5lclxuICAgICAgICAvL1RhaWx3aW5kIGlzIE1vYmlsZSBmaXJzdCwgc28gd2UnbGwgYWRqdXN0IG91ciBicmVha3BvaW50IG1lZGlhIHF1ZXJpZXMgZm9yIGxhcmdlciBzY3JlZW5zLGZvciBleGFtcGxlIG1lZGl1bSBzY3JlZW5zIHdpbGwgaGF2ZSBwYWRkaW5nIDEwcHggYXMgbWQ6cHgtMTBcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J3N0aWNreSB0b3AtMCB6LTUwIGdyaWQgZ3JpZC1jb2xzLTMgYmctd2hpdGUgc2hhZG93LW1kIHAtNSBtZDpweC0xMCc+XG4gICAgICAgICAgICB7LyogaGVhZGVyIHNlY3Rpb24gbGVmdCBmb3IgTG9nbyovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGgtMTAgY3Vyc29yLXBvaW50ZXIgbXktYXV0byc+XG4gICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3FkMydcbiAgICAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW4gb2JqZWN0LWxlZnRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIGhlYWRlciBzZWN0aW9uIG1pZGRsZSwgZm9yIHRoZSBzZWFyY2ggc2VjdGlvbiwgdXNpbmcgaGVyby1pY29ucyAqL31cbiAgICAgICAgICAgIHsvKiBPbmx5IGFwcGx5IHRoZSBib3JkZXIgb24gc2VhcmNoIGluIG1lZGl1bSBzaXplIHNjcmVlbiAqL31cbiAgICAgICAgICAgIHsvKiBPbiBtZWRpdW0gc2NyZWVucyB3ZSBhbHNvIHNldCBzaGFkb3cgdG8gc21hbGwgKi99XG4gICAgICAgICAgICB7LyogLS0tIFdlIGNvbm5lY3Qgb3VyIHVzZVN0YXRlIHRvIHRoZSBpbnB1dCBoZXJlIC0tLSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBtZDpib3JkZXItMiByb3VuZGVkLWZ1bGwgcHktMiBtZDpzaGFkb3ctc20nPlxuICAgICAgICAgICAgICAgIHsvKiBXZSBzZXQgdGhlIGlucHV0IGZpZWxkIGJhY2stZ3JvdW5kIHRvIHRyYW5zcGFyZW50IHRvIHJlbW92ZSBiYWNrZ3JvdW5kIHdoaXRlLCBhbmQgcmVtb3ZlIG91dGxpbmUgICovfVxuICAgICAgICAgICAgICAgIHsvKiBXZSBhbHNvIHNldCBmbGV4IHRvIGdyb3cgaW4gb3VyIGlucHV0IGVsZW1lbnQgc28gaXQgcHVzaGVzIHRoZSBzZWFyY2ggdG8gdGhlIGVuZCAqL31cbiAgICAgICAgICAgICAgICB7LyogV2Ugd2FudCBpbnB1dCB0ZXh0IHRvIGJlIHNtYWxsIGFuZCBjb2xvciBncmF5IHRocm91Z2ggdGV4dC1zbSBhbmQgdGV4dC1ncmF5LTYwMCwgcGxhY2Vob2xkZXIgZ3JheSBpcyBzZXQgdG8gNDAwIGZvciBjb250cmFzdCAqL31cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdwbC01IGJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZSBmbGV4LWdyb3cgdGV4dC1zbSB0ZXh0LWdyYXktNjAwIHBsYWNlaG9sZGVyLWdyYXktNDAwJyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdTdGFydCB5b3VyIHNlYXJjaCdcbiAgICAgICAgICAgICAgICAvLyAtLS0gVGhlIHZhbHVlIGZyb20gdXNlU3RhdGUgZ29lcyBoZXJlIGluc2lkZSBvdXIgaW5wdXQgLS0tXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8vV2l0aCBvbkNoYW5nZSB3ZSdyZSBtYXBwaW5nIG91ciBrZXlwcmVzcyBpbnNpZGUgdGhlIHNlYXJjaCB2YWx1ZSB0aHJvdWdoIGUudGFyZ2V0LnZhbHVlICBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHsvKiBTZXR0aW5nIHNlYXJjaCBpY29uIGJ5IGRlZmF1bHQgdG8gaGlkZGVuIGFuZCBvbmx5IHNob3dpbmcgaXQgaW4gbWVkaXVtIHNjcmVlbnMgd2l0aCBpbmxpbmUtZmxleCAqL31cbiAgICAgICAgICAgICAgICB7LyogT24gbWVkaXVtIHNjcmVlbnMgd2UgbmVlZCBzb21lIG1hcmdpbiBvbiBvdXIgc2VhcmNoIGljb25zIHRocm91Z2ggbXgtMiAqL31cbiAgICAgICAgICAgICAgICA8TWFnbmlmeWluZ0dsYXNzSWNvbiBjbGFzc05hbWU9J2hpZGRlbiBtZDppbmxpbmUtZmxleCBoLTggYmctcmVkLTQwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBwLTIgY3Vyc29yLXBvaW50ZXIgbWQ6bXgtMicgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIHsvKiBoZWFkZXIgc2VjdGlvbiByaWdodCAqL31cbiAgICAgICAgICAgIHsvKiBJbiB0YWlsd2luZCB0byBoYXZlIHNwYWNlcyBhZnRlciBldmVyeSBjb21wb25lbnQgaW4gYSBkaXYgdXNlIHNwYWNlLXgtNCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBzcGFjZS14LTQgdGV4dC1ncmF5LTUwMCc+XG4gICAgICAgICAgICAgICAgey8qIEhpZGUgXCJiZWNvbWUgYSBndWVzdFwiIG9uIHNtYWxsIG1vYmlsZSBzY3JlZW5zLCBzbyBvbiBtZWRpdW0gc2NyZWVucyBtYWtlIGl0IGlubGluZSBtZDppbmxpbmUsIGJ1dCBkZWZhdWx0IHNob3VsZCBiZSBoaWRkZW4gICovfVxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naGlkZGVuIG1kOmlubGluZSc+QmVjb21lIGEgaG9zdDwvcD5cbiAgICAgICAgICAgICAgICA8R2xvYmVBbHRJY29uIGNsYXNzTmFtZT1cImgtNiBjdXJzb3ItcG9pbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBib3JkZXItMiBwLTIgcm91bmRlZC1mdWxsJz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnMzSWNvbiBjbGFzc05hbWU9J2gtNiBjdXJzb3ItcG9pbnRlcicgLz5cbiAgICAgICAgICAgICAgICAgICAgPFVzZXJDaXJjbGVJY29uIGNsYXNzTmFtZT0naC02IGN1cnNvci1wb2ludGVyJyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiAtLS0gT3VyIENhbGVuZGFyIEdvZXMgaGVyZSAqL31cbiAgICAgICAgICAgIHsvKiAtLS0gT25seSBzaG93IGNhbGVuZGFyIGlmIHNlYXJjaCBpbnB1dCBoYXMgdmFsdWUsIGlmIHNlYXJjaElucHV0IGlzIHRydXRoeSAmJiB0aGVuIHNob3cgaDEgKi99XG4gICAgICAgICAgICB7LyogLS0tIEJlbG93IHdlIGFsc28gaGF2ZSBvdXIgcmVhY3QtZGF0ZS1yYW5nZSBwaWNrZXIgaW4gb3VyIGRpdiAqL31cblxuICAgICAgICAgICAge3NlYXJjaElucHV0ICYmIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPERhdGVSYW5nZVBpY2tlciBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlcz17W3NlbGVjdGlvblJhbmdlXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZUNvbG9ycz17W1wiI0ZENUI2MVwiXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0gICAgICAgXG5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJNYWduaWZ5aW5nR2xhc3NJY29uIiwiQmFyczNJY29uIiwiR2xvYmVBbHRJY29uIiwiVXNlckNpcmNsZUljb24iLCJVc2Vyc0ljb24iLCJEYXRlUmFuZ2VQaWNrZXIiLCJIZWFkZXIiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwic2VsZWN0aW9uUmFuZ2UiLCJrZXkiLCJoYW5kbGVTZWxlY3QiLCJyYW5nZXMiLCJzZWxlY3Rpb24iLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJmaWxsIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInAiLCJtaW5EYXRlIiwicmFuZ2VDb2xvcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});