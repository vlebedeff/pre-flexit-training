/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var app_1 = __webpack_require__(4);
	app_1.createApplication(document.getElementById('app-placeholder'));


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(5);
	var ReactDOM = __webpack_require__(6);
	var presets_1 = __webpack_require__(7);
	var app_1 = __webpack_require__(8);
	var toolbar_1 = __webpack_require__(41);
	var nav_1 = __webpack_require__(43);
	var spread_1 = __webpack_require__(44);
	var AppComponent = (function (_super) {
	    __extends(AppComponent, _super);
	    function AppComponent() {
	        _super.apply(this, arguments);
	    }
	    AppComponent.prototype.onDemoClick = function () {
	        var _this = this;
	        presets_1.playPreset(function (c) { return _this.app.store.dispatch(c); });
	    };
	    AppComponent.prototype.render = function () {
	        var spreads = this.state.spreads;
	        return (React.createElement("div", {className: "c-app"}, React.createElement(toolbar_1.ToolbarComponent, null), React.createElement("div", {className: "c-app--layout--main-column"}, React.createElement("div", {className: "c-app--header"}, React.createElement("button", {onClick: this.onDemoClick.bind(this)}, "Play Demo")), React.createElement("div", {className: "c-app--work-area"}, React.createElement("div", {className: "c-app--work-area--target"}, React.createElement(spread_1.SpreadComponent, {canvas: spreads.current, width: 1200, height: 600, contentEditable: true}))), React.createElement(nav_1.NavComponent, {spreads: spreads}))));
	    };
	    return AppComponent;
	}(app_1.BaseAppComponent));
	function createApplicationElement() {
	    return React.createElement(AppComponent, null);
	}
	exports.createApplicationElement = createApplicationElement;
	function createApplication(target) {
	    ReactDOM.render(createApplicationElement(), target);
	}
	exports.createApplication = createApplication;


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	exports.demoPreset = [
	    { "type": "book.reset" },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "mixbook", "x": 601.5, "y": 155 } },
	    { "type": "spread.selection.move", "payload": { "x": -3, "y": -16 } },
	    { "type": "spread.element.add.text", "payload": { "x": 388.5, "y": 140, "autosize": true } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 2, "text": "Pre-Flexit<br>Training Exercise<br>", "x": 325.5, "y": 128, "width": 126, "height": 48 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [2], "exclusive": true } },
	    { "type": "spread.selection.text.align", "payload": { "align": 1 } },
	    { "type": "spread.selection.move", "payload": { "x": 70, "y": -12 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.element.add.text", "payload": { "x": 417.5, "y": 354, "autosize": true } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 3, "text": "Authors:", "x": 385.75, "y": 342, "width": 63.5, "height": 24 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [3], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": 72, "y": 5 } },
	    { "type": "spread.elements.select", "payload": { "elements": [], "exclusive": true } },
	    { "type": "spread.element.add.text", "payload": { "x": 233.5, "y": 265, "autosize": false } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 4, "text": "Anatolie Rotaru<br>Petre Negrei<br>", "x": 8.5, "y": 180, "width": 450, "height": 170 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [4], "exclusive": true } },
	    { "type": "spread.selection.text.align", "payload": { "align": 1 } },
	    { "type": "spread.selection.move", "payload": { "x": 66, "y": 196 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [4], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": -2, "y": 1 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.element.add.text", "payload": { "x": 331.5, "y": 416, "autosize": true } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 5, "text": "Mixbook 2016", "x": 278.921875, "y": 404, "width": 105.15625, "height": 24 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [5], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": -45, "y": 145 } },
	    { "type": "spread.elements.select", "payload": { "elements": [5], "exclusive": true } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 5, "text": "© Mixbook 2016", "x": 225.1875, "y": 549, "width": 122.625, "height": 24 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 228.5, "y": 64 } },
	    { "type": "spread.selection.move", "payload": { "x": 99, "y": -39 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 222.5, "y": 159 } },
	    { "type": "spread.selection.move", "payload": { "x": 70, "y": -74 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 173.5, "y": 207 } },
	    { "type": "spread.selection.move", "payload": { "x": 71, "y": -59 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 181.5, "y": 283 } },
	    { "type": "spread.selection.move", "payload": { "x": 6, "y": -79 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 86.5, "y": 293 } },
	    { "type": "spread.selection.move", "payload": { "x": 40, "y": -50 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 111.5, "y": 180 } },
	    { "type": "spread.selection.move", "payload": { "x": -53, "y": 92 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 184.5, "y": 412 } },
	    { "type": "spread.selection.move", "payload": { "x": -185, "y": -124 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 30.5, "y": 157 } },
	    { "type": "spread.selection.move", "payload": { "x": -13, "y": 43 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 118.5, "y": 76 } },
	    { "type": "spread.selection.move", "payload": { "x": -37, "y": 104 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 119.5, "y": 52 } },
	    { "type": "spread.selection.move", "payload": { "x": 25, "y": 98 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 185.5, "y": 37 } },
	    { "type": "spread.selection.move", "payload": { "x": 13, "y": 70 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 82.5, "y": 42 } },
	    { "type": "spread.selection.move", "payload": { "x": 159, "y": 4 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 64.5, "y": 60 } },
	    { "type": "spread.selection.move", "payload": { "x": 189, "y": -53 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 57.5, "y": 44 } },
	    { "type": "spread.selection.move", "payload": { "x": -36, "y": 75 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 77.5, "y": 48 } },
	    { "type": "spread.selection.move", "payload": { "x": 9, "y": 55 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 109.5, "y": 40 } },
	    { "type": "spread.selection.move", "payload": { "x": 38, "y": 22 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 177.5, "y": 18 } },
	    { "type": "spread.selection.move", "payload": { "x": -18, "y": -9 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 63.5, "y": 34 } },
	    { "type": "spread.selection.move", "payload": { "x": -44, "y": 1 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 83.5, "y": 25 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "react", "x": 142.5, "y": 119 } },
	    { "type": "spread.selection.move", "payload": { "x": -12, "y": -6 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.element.add.text", "payload": { "x": 758.5, "y": 112, "autosize": true } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 26, "text": "PURPOSE", "x": 723.0234375, "y": 100, "width": 70.953125, "height": 24 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [26], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": -42, "y": 26 } },
	    { "type": "spread.element.add.text", "payload": { "x": 725.5, "y": 267, "autosize": false } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 27, "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "x": 500.5, "y": 182, "width": 450, "height": 170 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [27], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": 182, "y": -26 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.element.add.text", "payload": { "x": 787.5, "y": 422, "autosize": true } },
	    { "type": "spread.elements.select", "payload": { "elements": [28], "exclusive": true } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 28, "text": "ACCEPTANCE CRITERIA", "x": 702.6484375, "y": 410, "width": 169.703125, "height": 24 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [28], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": -18, "y": -67 } },
	    { "type": "spread.element.add.text", "payload": { "x": 718.5, "y": 429, "autosize": false } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 29, "text": "qw", "x": 493.5, "y": 344, "width": 450, "height": 170 } },
	    { "type": "spread.elements.select.all", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [29], "exclusive": true } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 29, "text": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.", "x": 493.5, "y": 344, "width": 450, "height": 170 } },
	    { "type": "spread.elements.select", "payload": { "elements": [], "exclusive": true } },
	    { "type": "spread.elements.select", "payload": { "elements": [29], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": 191, "y": 31 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [26, 27, 28, 29], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": 0, "y": -63 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [29], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": 0, "y": 3 } },
	    { "type": "spread.elements.select", "payload": { "elements": [26], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": 1, "y": 0 } },
	    { "type": "spread.elements.select", "payload": { "elements": [4], "exclusive": true } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "sonic", "x": 1126.5, "y": 527 } },
	    { "type": "spread.selection.move", "payload": { "x": 9, "y": 9 } },
	    { "type": "spread.element.add.text", "payload": { "x": 838.5, "y": 502, "autosize": true } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 31, "text": "let's&nbsp;", "x": 821.5, "y": 490, "width": 34, "height": 24 } },
	    { "type": "spread.elements.select", "payload": { "elements": [31], "exclusive": true } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 31, "text": "let's start", "x": 804.3203125, "y": 490, "width": 68.359375, "height": 24 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [31], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": 221, "y": 73 } },
	    { "type": "spread.elements.select", "payload": { "elements": [31], "exclusive": true } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [31], "exclusive": true } },
	    { "type": "spread.selection.text.align", "payload": { "align": 1 } },
	    { "type": "spread.elements.select", "payload": { "elements": [31], "exclusive": true } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 31, "text": "...let's start", "x": 1012.5390625, "y": 563, "width": 81.140625, "height": 24 } },
	    { "type": "spread.elements.select", "payload": { "elements": [29], "exclusive": true } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "book.spread.select", "payload": { "spreadIndex": 1 } },
	    { "type": "spread.element.add.text", "payload": { "x": 288.5, "y": 106, "autosize": true } },
	    { "type": "spread.elements.select", "payload": { "elements": [32], "exclusive": true } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 32, "text": "We've started with these 3 basic shapes:", "x": 138.703125, "y": 94, "width": 299.59375, "height": 24 } },
	    { "type": "spread.elements.select", "payload": { "elements": [], "exclusive": true } },
	    { "type": "spread.elements.select", "payload": { "elements": [32], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": 4, "y": -21 } },
	    { "type": "spread.elements.select", "payload": { "elements": [], "exclusive": true } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "square", "x": 141.5, "y": 237 } },
	    { "type": "spread.selection.move", "payload": { "x": -17, "y": -27 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "circle", "x": 309.5, "y": 238 } },
	    { "type": "spread.selection.move", "payload": { "x": -9, "y": -29 } },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "triangle", "x": 427.5, "y": 207 } },
	    { "type": "spread.selection.move", "payload": { "x": 38, "y": 5 } },
	    { "type": "spread.element.add.text", "payload": { "x": 278.5, "y": 374, "autosize": true } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 36, "text": "Using them, we have developed basic functionality", "x": 90.5625, "y": 362, "width": 375.875, "height": 24 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [36], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": 20, "y": -35 } },
	    { "type": "spread.elements.select", "payload": { "elements": [36], "exclusive": true } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 36, "text": "Using them, we have developed basic functionality, like moving", "x": 64.1171875, "y": 327, "width": 468.765625, "height": 24 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [34], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": 119, "y": 2 } },
	    { "type": "spread.elements.select", "payload": { "elements": [35], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": -169, "y": -2 } },
	    { "type": "spread.elements.select", "payload": { "elements": [34], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": 45, "y": 0 } },
	    { "type": "spread.elements.select", "payload": { "elements": [33], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": 178, "y": 1 } },
	    { "type": "spread.elements.select", "payload": { "elements": [35], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": -175, "y": 0 } },
	    { "type": "spread.elements.select", "payload": { "elements": [33], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": -9, "y": 2 } },
	    { "type": "spread.elements.select", "payload": { "elements": [34], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": -261, "y": -47 } },
	    { "type": "spread.elements.select", "payload": { "elements": [35], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": 335, "y": 2 } },
	    { "type": "spread.elements.select", "payload": { "elements": [34], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": -78, "y": 49 } },
	    { "type": "spread.element.add.text", "payload": { "x": 303.5, "y": 419, "autosize": true } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 37, "text": "or changing", "x": 259.546875, "y": 407, "width": 87.90625, "height": 24 } },
	    { "type": "spread.elements.select", "payload": { "elements": [37], "exclusive": true } },
	    { "type": "spread.element.edit.text", "payload": { "elementId": 37, "text": "or changing z-index...", "x": 224.25, "y": 407, "width": 158.5, "height": 24 } },
	    { "type": "spread.elements.select", "payload": { "elements": [], "exclusive": true } },
	    { "type": "spread.elements.select", "payload": { "elements": [37], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": -13, "y": -41 } },
	    { "type": "spread.selection.clear", "payload": null },
	    { "type": "spread.element.add.sticker", "payload": { "shape": "homer-simpson", "x": 184.5, "y": 229 } },
	    { "type": "spread.selection.move", "payload": { "x": -12, "y": -14 } },
	    { "type": "spread.elements.select", "payload": { "elements": [34], "exclusive": true } },
	    { "type": "spread.selection.bringToFront", "payload": null },
	    { "type": "spread.selection.bringToBack", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [33], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": -108, "y": -1 } },
	    { "type": "spread.elements.select", "payload": { "elements": [35], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": -244, "y": 0 } },
	    { "type": "spread.elements.select", "payload": { "elements": [38], "exclusive": true } },
	    { "type": "spread.selection.sendBackward", "payload": null },
	    { "type": "spread.selection.sendBackward", "payload": null },
	    { "type": "spread.selection.sendBackward", "payload": null },
	    { "type": "spread.selection.sendBackward", "payload": null },
	    { "type": "spread.selection.sendBackward", "payload": null },
	    { "type": "spread.selection.sendForward", "payload": null },
	    { "type": "spread.selection.sendForward", "payload": null },
	    { "type": "spread.selection.sendForward", "payload": null },
	    { "type": "spread.selection.sendForward", "payload": null },
	    { "type": "spread.selection.sendForward", "payload": null },
	    { "type": "spread.elements.select", "payload": { "elements": [35], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": 239, "y": 0 } },
	    { "type": "spread.elements.select", "payload": { "elements": [33], "exclusive": true } },
	    { "type": "spread.selection.move", "payload": { "x": 108, "y": 0 } },
	    { "type": "spread.elements.select", "payload": { "elements": [37], "exclusive": true } },
	];
	function playPreset(dispatchFn, speed) {
	    if (speed === void 0) { speed = 100; }
	    var preset = exports.demoPreset.slice(0);
	    var intervalId = setInterval(function () {
	        var command = preset.shift();
	        if (command) {
	            dispatchFn(command);
	        }
	        else {
	            clearInterval(intervalId);
	        }
	    }, speed);
	    return intervalId;
	}
	exports.playPreset = playPreset;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var react_1 = __webpack_require__(5);
	var redux_1 = __webpack_require__(9);
	var app_state_1 = __webpack_require__(24);
	var spread_element_text_1 = __webpack_require__(31);
	var history_provider_1 = __webpack_require__(32);
	var history_dispatcher_1 = __webpack_require__(33);
	var book_dispatcher_1 = __webpack_require__(35);
	var spread_dispatcher_1 = __webpack_require__(37);
	var hotkeys_1 = __webpack_require__(39);
	var Keys = __webpack_require__(40);
	var keys_1 = __webpack_require__(40);
	var appStateLocalStorageKey = "appState";
	var App = (function () {
	    function App() {
	        var _this = this;
	        var serializedInitialAppState = window.localStorage.getItem(appStateLocalStorageKey);
	        var initialState = new app_state_1.AppState(true);
	        if (serializedInitialAppState) {
	            initialState.deserialize(JSON.parse(serializedInitialAppState));
	        }
	        this.store = new redux_1.ReduxStore(initialState);
	        this.historyProvider = new history_provider_1.HistoryProvider(this.store);
	        this.historyDispatcher = new history_dispatcher_1.HistoryDispatcher(this.store, this.historyProvider);
	        this.bookDispatcher = new book_dispatcher_1.BookDispatcher(this.store);
	        this.spreadDispatcher = new spread_dispatcher_1.SpreadDispatcher(this.store);
	        this.hotkeys = new hotkeys_1.HotkeysManager();
	        this.hotkeys
	            .register(Keys.Esc, function () { return _this.spreadDispatcher.clearSelection(); })
	            .register(keys_1.COMMAND | Keys.code('a'), function () { return _this.spreadDispatcher.elementsSelectAll(); })
	            .register(Keys.Backspace, function () { return _this.spreadDispatcher.deleteSelection(); })
	            .register(Keys.Up, function () { return _this.spreadDispatcher.translate(0, -1); })
	            .register(Keys.Down, function () { return _this.spreadDispatcher.translate(0, 1); })
	            .register(Keys.Left, function () { return _this.spreadDispatcher.translate(-1, 0); })
	            .register(Keys.Right, function () { return _this.spreadDispatcher.translate(1, 0); })
	            .register(keys_1.SHIFT | Keys.Up, function () { return _this.spreadDispatcher.translate(0, -10); })
	            .register(keys_1.SHIFT | Keys.Down, function () { return _this.spreadDispatcher.translate(0, 10); })
	            .register(keys_1.SHIFT | Keys.Left, function () { return _this.spreadDispatcher.translate(-10, 0); })
	            .register(keys_1.SHIFT | Keys.Right, function () { return _this.spreadDispatcher.translate(10, 0); })
	            .register(keys_1.ALT | Keys.Up, function () { return _this.spreadDispatcher.sendForward(); })
	            .register(keys_1.ALT | Keys.Down, function () { return _this.spreadDispatcher.sendBackward(); })
	            .register(keys_1.CTRL | keys_1.ALT | Keys.Up, function () { return _this.spreadDispatcher.bringToTop(); })
	            .register(keys_1.CTRL | keys_1.ALT | Keys.Down, function () { return _this.spreadDispatcher.bringToBottom(); })
	            .register(keys_1.COMMAND | Keys.code('c'), function () { return _this.spreadDispatcher.copySelection(); })
	            .register(keys_1.COMMAND | Keys.code('x'), function () { return _this.spreadDispatcher.cutSelection(); })
	            .register(keys_1.COMMAND | Keys.code('v'), function () { return _this.spreadDispatcher.pasteSelection(); })
	            .register(keys_1.COMMAND | Keys.code('z'), function () { return _this.historyDispatcher.undo(); })
	            .register(keys_1.COMMAND | keys_1.SHIFT | Keys.code('z'), function () { return _this.historyDispatcher.redo(); })
	            .register(keys_1.COMMAND | Keys.Up, function () { return _this.spreadDispatcher.textAlign(spread_element_text_1.TextAlign.Center); })
	            .register(keys_1.COMMAND | Keys.Left, function () { return _this.spreadDispatcher.textAlign(spread_element_text_1.TextAlign.Left); })
	            .register(keys_1.COMMAND | Keys.Right, function () { return _this.spreadDispatcher.textAlign(spread_element_text_1.TextAlign.Right); });
	        this.spreadDispatcher.registerActions();
	        this.historyDispatcher.registerActions();
	        this.bookDispatcher.registerActions();
	        this.store.subscribe(function (state) {
	            window.localStorage.setItem(appStateLocalStorageKey, JSON.stringify(state.serialize()));
	        });
	    }
	    Object.defineProperty(App.prototype, "state", {
	        get: function () {
	            return this.store.getState();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return App;
	}());
	exports.App = App;
	var contextType = { app: react_1.PropTypes.object };
	var BaseAppComponent = (function (_super) {
	    __extends(BaseAppComponent, _super);
	    function BaseAppComponent() {
	        var _this = this;
	        _super.call(this);
	        this.app = new App();
	        this.state = this.app.store.getState();
	        this.app.store.subscribe(function () {
	            _this.setState(_this.app.store.getState());
	        });
	    }
	    Object.defineProperty(BaseAppComponent, "childContextTypes", {
	        get: function () {
	            return contextType;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BaseAppComponent.prototype.getChildContext = function () {
	        return { app: this.app };
	    };
	    return BaseAppComponent;
	}(react_1.Component));
	exports.BaseAppComponent = BaseAppComponent;
	var AppChildComponent = (function (_super) {
	    __extends(AppChildComponent, _super);
	    function AppChildComponent() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(AppChildComponent, "contextTypes", {
	        get: function () {
	            return contextType;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppChildComponent.prototype, "app", {
	        get: function () {
	            return this.context.app;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return AppChildComponent;
	}(react_1.Component));
	exports.AppChildComponent = AppChildComponent;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Redux = __webpack_require__(10);
	function isDebug() {
	    return location.search.match(/[?&]debug=true(&|$)/);
	}
	var ReduxStore = (function () {
	    function ReduxStore(initialState) {
	        this._initialState = initialState;
	        this._actionHandlers = {};
	        this._store = Redux.createStore(this._reducer.bind(this));
	    }
	    ReduxStore.prototype._reducer = function (state, action) {
	        var newState = state || this._initialState;
	        var actionHandler = this._actionHandlers[action.type];
	        if (actionHandler) {
	            newState = actionHandler(state, action.payload);
	        }
	        if (isDebug()) {
	            window.statesHistory = window.statesHistory || [];
	            window.statesHistory.push(newState);
	        }
	        return newState;
	    };
	    ReduxStore.prototype.getState = function () {
	        return this._store.getState();
	    };
	    ReduxStore.prototype.subscribe = function (subscribeFn) {
	        var _this = this;
	        this._store.subscribe(function () {
	            subscribeFn(_this.getState());
	        });
	    };
	    ReduxStore.prototype.dispatch = function (action) {
	        if (isDebug()) {
	            console.debug(JSON.stringify(action) + ",");
	        }
	        this._store.dispatch(action);
	    };
	    ReduxStore.prototype.registerAction = function (actionName, handler) {
	        this._actionHandlers[actionName] = handler;
	    };
	    return ReduxStore;
	}());
	exports.ReduxStore = ReduxStore;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(12);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(19);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(21);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(22);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(23);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(20);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;
	
	var _isPlainObject = __webpack_require__(13);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(17);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;
	
	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, initialState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(14),
	    isHostObject = __webpack_require__(15),
	    isObjectLike = __webpack_require__(16);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;
	
	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}
	
	module.exports = getPrototype;


/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';
	
	module.exports = __webpack_require__(18)(global || window || this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;
	
		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports["default"] = combineReducers;
	
	var _createStore = __webpack_require__(12);
	
	var _isPlainObject = __webpack_require__(13);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(20);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports["default"] = applyMiddleware;
	
	var _compose = __webpack_require__(23);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();
	
	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var model_1 = __webpack_require__(25);
	var canvas_collection_1 = __webpack_require__(26);
	var canvas_element_collection_1 = __webpack_require__(28);
	var spread_element_sticker_1 = __webpack_require__(29);
	var spread_element_text_1 = __webpack_require__(31);
	var newElementWidth = 100;
	var newElementHeight = 100;
	var newTextElementWidth = 20;
	var newTextElementHeight = 24;
	var newParagraphElementWidth = 450;
	var newParagraphElementHeight = 170;
	var AppState = (function (_super) {
	    __extends(AppState, _super);
	    function AppState(init) {
	        if (init === void 0) { init = false; }
	        _super.call(this);
	        if (init) {
	            this._nextId = 1;
	            this.spreads = new canvas_collection_1.CanvasCollection(true);
	            this.clipboard = new canvas_element_collection_1.CanvasElementCollection(true);
	        }
	    }
	    AppState.prototype.getNextId = function () {
	        return this._nextId++;
	    };
	    AppState.prototype.createStickerElement = function (shape, x, y) {
	        var newStickerElement = new spread_element_sticker_1.SpreadStickerElement(this.getNextId());
	        newStickerElement.shape = shape;
	        newStickerElement.x = x - newElementWidth / 2;
	        newStickerElement.y = y - newElementHeight / 2;
	        newStickerElement.width = newElementWidth;
	        newStickerElement.height = newElementHeight;
	        return newStickerElement;
	    };
	    AppState.prototype.createTextElement = function (x, y, autosize) {
	        var newTextElement = new spread_element_text_1.SpreadTextElement(this.getNextId());
	        newTextElement.autosize = autosize;
	        if (autosize) {
	            newTextElement.align = spread_element_text_1.TextAlign.Center;
	            newTextElement.x = x - newTextElementWidth / 2;
	            newTextElement.y = y - newTextElementHeight / 2;
	            newTextElement.width = newTextElementWidth;
	            newTextElement.height = newTextElementHeight;
	        }
	        else {
	            newTextElement.align = spread_element_text_1.TextAlign.Left;
	            newTextElement.x = x - newParagraphElementWidth / 2;
	            newTextElement.y = y - newParagraphElementHeight / 2;
	            newTextElement.width = newParagraphElementWidth;
	            newTextElement.height = newParagraphElementHeight;
	        }
	        return newTextElement;
	    };
	    AppState.prototype.clone = function () {
	        var clone = new AppState;
	        clone.spreads = this.spreads;
	        clone._nextId = this._nextId;
	        clone.clipboard = this.clipboard;
	        return clone;
	    };
	    AppState.prototype.serialize = function () {
	        return {
	            spreads: this.spreads.serialize(),
	            nextId: this._nextId,
	            clipboard: this.clipboard.serialize()
	        };
	    };
	    AppState.prototype.deserialize = function (serializedValue) {
	        this.spreads = new canvas_collection_1.CanvasCollection();
	        this.spreads.deserialize(serializedValue.spreads);
	        this._nextId = serializedValue.nextId;
	        this.clipboard = new canvas_element_collection_1.CanvasElementCollection();
	        this.clipboard.deserialize(serializedValue.clipboard);
	    };
	    return AppState;
	}(model_1.Model));
	exports.AppState = AppState;


/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Model = (function () {
	    function Model() {
	    }
	    Model.prototype.update = function (predicate) {
	        var clonedModel = this.clone();
	        predicate(clonedModel);
	        return clonedModel;
	    };
	    return Model;
	}());
	exports.Model = Model;
	var List = (function (_super) {
	    __extends(List, _super);
	    function List(init) {
	        if (init === void 0) { init = false; }
	        _super.call(this);
	        if (init) {
	            this._array = [];
	        }
	    }
	    Object.defineProperty(List.prototype, "count", {
	        get: function () {
	            return this._array.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "maxIndex", {
	        get: function () {
	            return this._array.length - 1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    List.prototype.find = function (predicate) {
	        for (var _i = 0, _a = this._array; _i < _a.length; _i++) {
	            var item = _a[_i];
	            if (predicate(item)) {
	                return item;
	            }
	        }
	    };
	    List.prototype.get = function (index) {
	        return this._array[index];
	    };
	    List.prototype.indexOf = function (item) {
	        return this._array.indexOf(item);
	    };
	    List.prototype.reset = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i - 0] = arguments[_i];
	        }
	        this._array = items;
	    };
	    List.prototype.push = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i - 0] = arguments[_i];
	        }
	        (_a = this._array).push.apply(_a, items);
	        var _a;
	    };
	    List.prototype.insert = function (index, item) {
	        this._array.splice(index, 0, item);
	    };
	    List.prototype.remove = function (item) {
	        var index = this._array.indexOf(item);
	        this._array.splice(index, 1);
	        return index;
	    };
	    List.prototype.removeAll = function (predicate) {
	        this._array = this.reject(predicate);
	    };
	    List.prototype.replace = function (item, other) {
	        var index = this.remove(item);
	        this.insert(index, other);
	    };
	    List.prototype.map = function (mappingFn) {
	        return this._array.map(mappingFn);
	    };
	    List.prototype.reject = function (predicate) {
	        return this._array.filter(function (item) { return !predicate(item); });
	    };
	    List.prototype.cloneExtended = function (type) {
	        var clonedList = new type();
	        clonedList._array = this._array.slice();
	        return clonedList;
	    };
	    List.prototype.clone = function () {
	        var clonedList = new List();
	        clonedList._array = this._array.slice();
	        return clonedList;
	    };
	    return List;
	}(Model));
	exports.List = List;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var model_1 = __webpack_require__(25);
	var canvas_1 = __webpack_require__(27);
	var CanvasCollection = (function (_super) {
	    __extends(CanvasCollection, _super);
	    function CanvasCollection(init) {
	        if (init === void 0) { init = false; }
	        _super.call(this, init);
	        if (init) {
	            this.push(new canvas_1.Canvas(true));
	            this.push(new canvas_1.Canvas(true));
	            this.push(new canvas_1.Canvas(true));
	            this._currentIndex = 0;
	        }
	    }
	    Object.defineProperty(CanvasCollection.prototype, "current", {
	        get: function () {
	            return this.get(this._currentIndex);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CanvasCollection.prototype, "currentIndex", {
	        get: function () {
	            return this._currentIndex;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CanvasCollection.prototype.select = function (spreadIndex) {
	        this._currentIndex = spreadIndex;
	    };
	    CanvasCollection.prototype.clone = function () {
	        var clone = _super.prototype.cloneExtended.call(this, CanvasCollection);
	        clone._currentIndex = this._currentIndex;
	        return clone;
	    };
	    CanvasCollection.prototype.serialize = function () {
	        return {
	            items: this.map(function (spread) { return spread.serialize(); }),
	            currentIndex: this._currentIndex
	        };
	    };
	    CanvasCollection.prototype.deserialize = function (serializedValue) {
	        this.reset.apply(this, serializedValue.items.map(function (item) {
	            var spread = new canvas_1.Canvas();
	            spread.deserialize(item);
	            return spread;
	        }));
	        this._currentIndex = serializedValue.currentIndex;
	    };
	    return CanvasCollection;
	}(model_1.List));
	exports.CanvasCollection = CanvasCollection;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var model_1 = __webpack_require__(25);
	var canvas_element_collection_1 = __webpack_require__(28);
	var Canvas = (function (_super) {
	    __extends(Canvas, _super);
	    function Canvas(init) {
	        if (init === void 0) { init = true; }
	        _super.call(this);
	        if (init) {
	            this.elements = new canvas_element_collection_1.CanvasElementCollection(true);
	        }
	    }
	    Canvas.prototype.clone = function () {
	        var clone = new Canvas();
	        clone.elements = this.elements;
	        return clone;
	    };
	    Canvas.prototype.serialize = function () {
	        return {
	            elements: this.elements.serialize()
	        };
	    };
	    Canvas.prototype.deserialize = function (serializedValue) {
	        this.elements = new canvas_element_collection_1.CanvasElementCollection();
	        this.elements.deserialize(serializedValue.elements);
	    };
	    return Canvas;
	}(model_1.Model));
	exports.Canvas = Canvas;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var model_1 = __webpack_require__(25);
	var spread_element_sticker_1 = __webpack_require__(29);
	var spread_element_text_1 = __webpack_require__(31);
	var CanvasElementCollection = (function (_super) {
	    __extends(CanvasElementCollection, _super);
	    function CanvasElementCollection(init) {
	        if (init === void 0) { init = false; }
	        _super.call(this, init);
	        if (init) {
	            this._selected = [];
	        }
	    }
	    CanvasElementCollection.prototype.isSelected = function (elementId) {
	        return this._selected.indexOf(elementId) != -1;
	    };
	    CanvasElementCollection.prototype.getById = function (id) {
	        return this.find(function (canvasElement) { return canvasElement.id == id; });
	    };
	    CanvasElementCollection.prototype.getSelected = function () {
	        var _this = this;
	        return this._selected.map(function (elementId) { return _this.getById(elementId); });
	    };
	    CanvasElementCollection.prototype.select = function (exclusive) {
	        var elements = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            elements[_i - 1] = arguments[_i];
	        }
	        this.selectIds.apply(this, [exclusive].concat(elements.map(function (element) { return element.id; })));
	    };
	    CanvasElementCollection.prototype.selectIds = function (exclusive) {
	        var elementIds = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            elementIds[_i - 1] = arguments[_i];
	        }
	        if (exclusive) {
	            this._selected = elementIds.slice(0);
	        }
	        else {
	            for (var _a = 0, elementIds_1 = elementIds; _a < elementIds_1.length; _a++) {
	                var elementId = elementIds_1[_a];
	                var index = this._selected.indexOf(elementId);
	                var selected = index != -1;
	                if (selected) {
	                    this._selected.splice(index, 1);
	                }
	                else {
	                    this._selected.push(elementId);
	                }
	            }
	        }
	    };
	    CanvasElementCollection.prototype.selectAll = function () {
	        this._selected = this.map(function (element) { return element.id; });
	    };
	    CanvasElementCollection.prototype.clearSelection = function () {
	        this._selected = [];
	    };
	    CanvasElementCollection.prototype.deleteSelection = function () {
	        var _this = this;
	        this.removeAll(function (item) { return _this.isSelected(item.id); });
	        this._selected = [];
	    };
	    CanvasElementCollection.prototype.bringToTop = function (canvasElement) {
	        this.remove(canvasElement);
	        this.push(canvasElement);
	    };
	    CanvasElementCollection.prototype.bringToBack = function (canvasElement) {
	        this.remove(canvasElement);
	        this.insert(0, canvasElement);
	    };
	    CanvasElementCollection.prototype.sendForward = function (canvasElement) {
	        var index = this.remove(canvasElement);
	        this.insert(Math.min(index + 1, this.count), canvasElement);
	    };
	    CanvasElementCollection.prototype.sendBackward = function (canvasElement) {
	        var index = this.remove(canvasElement);
	        this.insert(Math.max(index - 1, 0), canvasElement);
	    };
	    CanvasElementCollection.prototype.clone = function () {
	        var clone = _super.prototype.cloneExtended.call(this, CanvasElementCollection);
	        clone._selected = this._selected.slice();
	        return clone;
	    };
	    CanvasElementCollection.prototype.serialize = function () {
	        return {
	            items: this.map(function (element) { return element.serialize(); }),
	            selectedItems: this._selected
	        };
	    };
	    CanvasElementCollection.prototype.deserialize = function (serializedValue) {
	        this.reset.apply(this, serializedValue.items.map(function (item) {
	            var spreadElement;
	            switch (item.type) {
	                case spread_element_sticker_1.SpreadStickerElementType:
	                    spreadElement = new spread_element_sticker_1.SpreadStickerElement(item.id);
	                    break;
	                case spread_element_text_1.SpreadTextElementType:
	                    spreadElement = new spread_element_text_1.SpreadTextElement(item.id);
	                    break;
	                default:
	                    throw new Error("Invalid type value of element");
	            }
	            spreadElement.deserialize(item);
	            return spreadElement;
	        }));
	        this._selected = serializedValue.selectedItems;
	    };
	    return CanvasElementCollection;
	}(model_1.List));
	exports.CanvasElementCollection = CanvasElementCollection;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var spread_element_1 = __webpack_require__(30);
	exports.SpreadStickerElementType = "sticker";
	var SpreadStickerElement = (function (_super) {
	    __extends(SpreadStickerElement, _super);
	    function SpreadStickerElement() {
	        _super.apply(this, arguments);
	    }
	    SpreadStickerElement.prototype.getType = function () {
	        return exports.SpreadStickerElementType;
	    };
	    SpreadStickerElement.prototype.clone = function () {
	        var clone = _super.prototype.cloneSuper.call(this, SpreadStickerElement);
	        clone.shape = this.shape;
	        return clone;
	    };
	    SpreadStickerElement.prototype.serialize = function () {
	        var serializedValue = _super.prototype.serialize.call(this);
	        serializedValue.shape = this.shape;
	        return serializedValue;
	    };
	    SpreadStickerElement.prototype.deserialize = function (serializedValue) {
	        _super.prototype.deserialize.call(this, serializedValue);
	        this.shape = serializedValue.shape;
	    };
	    return SpreadStickerElement;
	}(spread_element_1.SpreadElement));
	exports.SpreadStickerElement = SpreadStickerElement;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var model_1 = __webpack_require__(25);
	var SpreadElement = (function (_super) {
	    __extends(SpreadElement, _super);
	    function SpreadElement(id) {
	        _super.call(this);
	        this.id = id;
	    }
	    SpreadElement.prototype.translate = function (x, y) {
	        this.x += x;
	        this.y += y;
	    };
	    SpreadElement.prototype.setBBox = function (x, y, width, height) {
	        this.x = x;
	        this.y = y;
	        this.width = width;
	        this.height = height;
	    };
	    SpreadElement.prototype.cloneSuper = function (type) {
	        var clone = new type(this.id);
	        clone.id = this.id;
	        clone.x = this.x;
	        clone.y = this.y;
	        clone.width = this.width;
	        clone.height = this.height;
	        clone.angle = this.angle;
	        return clone;
	    };
	    SpreadElement.prototype.serialize = function () {
	        return {
	            type: this.getType(),
	            id: this.id,
	            x: this.x,
	            y: this.y,
	            width: this.width,
	            height: this.height,
	            angle: this.angle
	        };
	    };
	    SpreadElement.prototype.deserialize = function (serializedValue) {
	        this.id = serializedValue.id;
	        this.x = serializedValue.x;
	        this.y = serializedValue.y;
	        this.width = serializedValue.width;
	        this.height = serializedValue.height;
	        this.angle = serializedValue.angle;
	    };
	    return SpreadElement;
	}(model_1.Model));
	exports.SpreadElement = SpreadElement;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var spread_element_1 = __webpack_require__(30);
	(function (TextAlign) {
	    TextAlign[TextAlign["Left"] = 0] = "Left";
	    TextAlign[TextAlign["Right"] = 1] = "Right";
	    TextAlign[TextAlign["Center"] = 2] = "Center";
	    TextAlign[TextAlign["Justify"] = 3] = "Justify";
	})(exports.TextAlign || (exports.TextAlign = {}));
	var TextAlign = exports.TextAlign;
	exports.textAlignStyles = ["left", "right", "center", "justify"];
	exports.textAlignStyle = function (textAlign) { return exports.textAlignStyles[textAlign]; };
	exports.SpreadTextElementType = "text";
	var SpreadTextElement = (function (_super) {
	    __extends(SpreadTextElement, _super);
	    function SpreadTextElement() {
	        _super.apply(this, arguments);
	    }
	    SpreadTextElement.prototype.getType = function () {
	        return exports.SpreadTextElementType;
	    };
	    SpreadTextElement.prototype.clone = function () {
	        var clone = _super.prototype.cloneSuper.call(this, SpreadTextElement);
	        clone.text = this.text;
	        clone.align = this.align;
	        clone.autosize = this.autosize;
	        return clone;
	    };
	    SpreadTextElement.prototype.serialize = function () {
	        var serializedValue = _super.prototype.serialize.call(this);
	        serializedValue.text = this.text;
	        serializedValue.align = this.align;
	        serializedValue.autosize = this.autosize;
	        return serializedValue;
	    };
	    SpreadTextElement.prototype.deserialize = function (serializedValue) {
	        _super.prototype.deserialize.call(this, serializedValue);
	        this.text = serializedValue.text;
	        this.align = serializedValue.align;
	        this.autosize = serializedValue.autosize;
	    };
	    return SpreadTextElement;
	}(spread_element_1.SpreadElement));
	exports.SpreadTextElement = SpreadTextElement;


/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	var HistoryProvider = (function () {
	    function HistoryProvider(_store) {
	        this._store = _store;
	        this._timeline = [_store.getState()];
	        this._position = 0;
	        this._store.subscribe(this._onNewState.bind(this));
	    }
	    HistoryProvider.prototype._onNewState = function (state) {
	        if (this._position == 0 && state == this._timeline[0]) {
	            return;
	        }
	        if (this._position > 0 && state == this._timeline[this._position - 1]) {
	            this._position--;
	            return;
	        }
	        if (this._position < this._timeline.length - 1 && state == this._timeline[this._position + 1]) {
	            this._position++;
	            return;
	        }
	        if (this._timeline.length > this._position + 1) {
	            this._timeline = this._timeline.slice(0, this._position + 1);
	        }
	        this._timeline.push(state);
	        this._position = this._timeline.length - 1;
	    };
	    HistoryProvider.prototype.getPreviousState = function () {
	        if (this._position <= 0)
	            return this._timeline[0];
	        return this._timeline[this._position - 1];
	    };
	    HistoryProvider.prototype.getNextState = function () {
	        if (this._position >= this._timeline.length - 1)
	            return this._timeline[this._timeline.length - 1];
	        return this._timeline[this._position + 1];
	    };
	    return HistoryProvider;
	}());
	exports.HistoryProvider = HistoryProvider;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dispatcher_1 = __webpack_require__(34);
	var UNDO = "history.undo";
	var REDO = "history.redo";
	var HistoryDispatcher = (function (_super) {
	    __extends(HistoryDispatcher, _super);
	    function HistoryDispatcher(store, _provider) {
	        _super.call(this, store);
	        this._provider = _provider;
	    }
	    HistoryDispatcher.prototype.registerActions = function () {
	        var _this = this;
	        this.registerAction(UNDO, function (state) {
	            return _this._provider.getPreviousState();
	        });
	        this.registerAction(REDO, function (state, payload) {
	            return _this._provider.getNextState();
	        });
	    };
	    HistoryDispatcher.prototype.undo = function () {
	        this.sendCommand(UNDO);
	    };
	    HistoryDispatcher.prototype.redo = function () {
	        this.sendCommand(REDO);
	    };
	    return HistoryDispatcher;
	}(dispatcher_1.Dispatcher));
	exports.HistoryDispatcher = HistoryDispatcher;


/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	var Dispatcher = (function () {
	    function Dispatcher(_store) {
	        this._store = _store;
	    }
	    Dispatcher.prototype.sendCommand = function (actionName, payload) {
	        if (payload === void 0) { payload = null; }
	        this._store.dispatch({ type: actionName, payload: payload });
	    };
	    Dispatcher.prototype.registerAction = function (actionName, handler) {
	        this._store.registerAction(actionName, handler);
	    };
	    return Dispatcher;
	}());
	exports.Dispatcher = Dispatcher;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dispatcher_1 = __webpack_require__(34);
	var BookActions = __webpack_require__(36);
	var RESET = "book.reset";
	var SPREAD_SELECT = "book.spread.select";
	var BookDispatcher = (function (_super) {
	    __extends(BookDispatcher, _super);
	    function BookDispatcher() {
	        _super.apply(this, arguments);
	    }
	    BookDispatcher.prototype.registerActions = function () {
	        this.registerAction(RESET, BookActions.reset);
	        this.registerAction(SPREAD_SELECT, BookActions.spreadSelect);
	    };
	    BookDispatcher.prototype.spreadSelect = function (spreadIndex) {
	        this.sendCommand(SPREAD_SELECT, { spreadIndex: spreadIndex });
	    };
	    BookDispatcher.prototype.reset = function () {
	        this.sendCommand(RESET);
	    };
	    return BookDispatcher;
	}(dispatcher_1.Dispatcher));
	exports.BookDispatcher = BookDispatcher;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var app_state_1 = __webpack_require__(24);
	function reset(state, payload) {
	    return new app_state_1.AppState(true);
	}
	exports.reset = reset;
	function spreadSelect(state, payload) {
	    return state.update(function (newState) {
	        return newState.spreads = newState.spreads.update(function (newSpreads) {
	            newSpreads.select(payload.spreadIndex);
	        });
	    });
	}
	exports.spreadSelect = spreadSelect;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dispatcher_1 = __webpack_require__(34);
	var SpreadActions = __webpack_require__(38);
	var ELEMENT_ADD_STICKER = "spread.element.add.sticker";
	var ELEMENT_ADD_TEXT = "spread.element.add.text";
	var ELEMENT_EDIT_TEXT = "spread.element.edit.text";
	var ELEMENTS_SELECT = "spread.elements.select";
	var ELEMENTS_SELECT_ALL = "spread.elements.select.all";
	var SELECTION_TRANSLATE = "spread.selection.move";
	var SELECTION_SEND_FORWARD = "spread.selection.sendForward";
	var SELECTION_SEND_BACKWARD = "spread.selection.sendBackward";
	var SELECTION_BRING_TO_FRONT = "spread.selection.bringToFront";
	var SELECTION_BRING_TO_BACK = "spread.selection.bringToBack";
	var SELECTION_CLEAR = "spread.selection.clear";
	var SELECTION_DELETE = "spread.selection.delete";
	var SELECTION_TEXT_ALIGN = "spread.selection.text.align";
	var SELECTION_COPY = "spread.selection.copy";
	var SELECTION_CUT = "spread.selection.cut";
	var SELECTION_PASTE = "spread.selection.paster";
	var SpreadDispatcher = (function (_super) {
	    __extends(SpreadDispatcher, _super);
	    function SpreadDispatcher() {
	        _super.apply(this, arguments);
	    }
	    SpreadDispatcher.prototype.registerActions = function () {
	        this.registerAction(ELEMENT_ADD_STICKER, SpreadActions.elementAddSticker);
	        this.registerAction(ELEMENT_ADD_TEXT, SpreadActions.elementAddText);
	        this.registerAction(ELEMENT_EDIT_TEXT, SpreadActions.elementEditText);
	        this.registerAction(ELEMENTS_SELECT, SpreadActions.elementsSelect);
	        this.registerAction(ELEMENTS_SELECT_ALL, SpreadActions.elementsSelectAll);
	        this.registerAction(SELECTION_TRANSLATE, SpreadActions.selectionTranslate);
	        this.registerAction(SELECTION_SEND_FORWARD, SpreadActions.selectionSendForward);
	        this.registerAction(SELECTION_SEND_BACKWARD, SpreadActions.selectionSendBackward);
	        this.registerAction(SELECTION_BRING_TO_FRONT, SpreadActions.selectionBringToTop);
	        this.registerAction(SELECTION_BRING_TO_BACK, SpreadActions.selectionBringToBack);
	        this.registerAction(SELECTION_CLEAR, SpreadActions.selectionClear);
	        this.registerAction(SELECTION_DELETE, SpreadActions.selectionDelete);
	        this.registerAction(SELECTION_TEXT_ALIGN, SpreadActions.selectionTextAlign);
	        this.registerAction(SELECTION_COPY, SpreadActions.copySelection);
	        this.registerAction(SELECTION_CUT, SpreadActions.cutSelection);
	        this.registerAction(SELECTION_PASTE, SpreadActions.pasteSelection);
	    };
	    SpreadDispatcher.prototype.add = function (shape, x, y) {
	        this.sendCommand(ELEMENT_ADD_STICKER, { shape: shape, x: x, y: y });
	    };
	    SpreadDispatcher.prototype.addTextElement = function (x, y, autosize) {
	        this.sendCommand(ELEMENT_ADD_TEXT, { x: x, y: y, autosize: autosize });
	    };
	    SpreadDispatcher.prototype.editTextElement = function (elementId, text, x, y, width, height) {
	        this.sendCommand(ELEMENT_EDIT_TEXT, { elementId: elementId, text: text, x: x, y: y, width: width, height: height });
	    };
	    SpreadDispatcher.prototype.select = function (exclusive) {
	        var elements = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            elements[_i - 1] = arguments[_i];
	        }
	        this.sendCommand(ELEMENTS_SELECT, { elements: elements, exclusive: exclusive });
	    };
	    SpreadDispatcher.prototype.elementsSelectAll = function () {
	        this.sendCommand(ELEMENTS_SELECT_ALL);
	    };
	    SpreadDispatcher.prototype.clearSelection = function () {
	        this.sendCommand(SELECTION_CLEAR);
	    };
	    SpreadDispatcher.prototype.deleteSelection = function () {
	        this.sendCommand(SELECTION_DELETE);
	    };
	    SpreadDispatcher.prototype.copySelection = function () {
	        this.sendCommand(SELECTION_COPY);
	    };
	    SpreadDispatcher.prototype.cutSelection = function () {
	        this.sendCommand(SELECTION_CUT);
	    };
	    SpreadDispatcher.prototype.pasteSelection = function () {
	        this.sendCommand(SELECTION_PASTE);
	    };
	    SpreadDispatcher.prototype.translate = function (x, y) {
	        this.sendCommand(SELECTION_TRANSLATE, { x: x, y: y });
	    };
	    SpreadDispatcher.prototype.sendForward = function () {
	        this.sendCommand(SELECTION_SEND_FORWARD);
	    };
	    SpreadDispatcher.prototype.sendBackward = function () {
	        this.sendCommand(SELECTION_SEND_BACKWARD);
	    };
	    SpreadDispatcher.prototype.bringToTop = function () {
	        this.sendCommand(SELECTION_BRING_TO_FRONT);
	    };
	    SpreadDispatcher.prototype.bringToBottom = function () {
	        this.sendCommand(SELECTION_BRING_TO_BACK);
	    };
	    SpreadDispatcher.prototype.textAlign = function (align) {
	        this.sendCommand(SELECTION_TEXT_ALIGN, { align: align });
	    };
	    return SpreadDispatcher;
	}(dispatcher_1.Dispatcher));
	exports.SpreadDispatcher = SpreadDispatcher;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var spread_element_text_1 = __webpack_require__(31);
	function updateCurrentSpread(state, updateFn) {
	    return state.update(function (newState) {
	        return newState.spreads = newState.spreads.update(function (newSpreads) {
	            var currentSpread = newSpreads.current;
	            var updatedSpread = currentSpread.update(function (newSpread) {
	                updateFn(newSpread, newState);
	            });
	            newSpreads.replace(currentSpread, updatedSpread);
	        });
	    });
	}
	function elementAddSticker(state, payload) {
	    return updateCurrentSpread(state, function (newCanvas, newState) {
	        newCanvas.elements = newCanvas.elements.update(function (newCanvasElements) {
	            var newElement = newState.createStickerElement(payload.shape, payload.x, payload.y);
	            newCanvasElements.push(newElement);
	            newCanvasElements.select(true, newElement);
	        });
	    });
	}
	exports.elementAddSticker = elementAddSticker;
	function elementAddText(state, payload) {
	    return updateCurrentSpread(state, function (newCanvas, newState) {
	        newCanvas.elements = newCanvas.elements.update(function (newCanvasElements) {
	            var newElement = newState.createTextElement(payload.x, payload.y, payload.autosize);
	            newCanvasElements.push(newElement);
	            newCanvasElements.select(true, newElement);
	        });
	    });
	}
	exports.elementAddText = elementAddText;
	function elementEditText(state, payload) {
	    return updateCurrentSpread(state, function (newCanvas) {
	        newCanvas.elements = newCanvas.elements.update(function (newCanvasElements) {
	            var textElement = newCanvasElements.getById(payload.elementId);
	            var newTextElement = textElement.clone();
	            newTextElement.text = payload.text;
	            newTextElement.setBBox(payload.x, payload.y, payload.width, payload.height);
	            newCanvasElements.replace(textElement, newTextElement);
	        });
	    });
	}
	exports.elementEditText = elementEditText;
	function elementsSelect(state, payload) {
	    return updateCurrentSpread(state, function (newCanvas) {
	        newCanvas.elements = newCanvas.elements.update(function (newCanvasElements) {
	            newCanvasElements.selectIds.apply(newCanvasElements, [payload.exclusive].concat(payload.elements));
	        });
	    });
	}
	exports.elementsSelect = elementsSelect;
	function elementsSelectAll(state, payload) {
	    return updateCurrentSpread(state, function (newCanvas) {
	        newCanvas.elements = newCanvas.elements.update(function (newCanvasElements) {
	            newCanvasElements.selectAll();
	        });
	    });
	}
	exports.elementsSelectAll = elementsSelectAll;
	function selectionClear(state) {
	    return updateCurrentSpread(state, function (newCanvas) {
	        newCanvas.elements = newCanvas.elements.update(function (newCanvasElements) {
	            newCanvasElements.clearSelection();
	        });
	    });
	}
	exports.selectionClear = selectionClear;
	function selectionDelete(state) {
	    return updateCurrentSpread(state, function (newCanvas) {
	        newCanvas.elements = newCanvas.elements.update(function (newCanvasElements) {
	            newCanvasElements.deleteSelection();
	        });
	    });
	}
	exports.selectionDelete = selectionDelete;
	function copySelection(state) {
	    return state.update(function (newState) {
	        newState.clipboard = newState.clipboard.update(function (newClipboard) {
	            var newElements = newState.spreads.current.elements.getSelected().map(function (element) { return element.clone(); });
	            newClipboard.reset.apply(newClipboard, newElements);
	        });
	    });
	}
	exports.copySelection = copySelection;
	function cutSelection(state) {
	    return state.update(function (newState) {
	        newState.clipboard = newState.clipboard.update(function (newClipboard) {
	            var newElements = newState.spreads.current.elements.getSelected().map(function (element) { return element.clone(); });
	            newClipboard.reset.apply(newClipboard, newElements);
	            return newState.spreads = newState.spreads.update(function (newSpreads) {
	                var currentSpread = newSpreads.current;
	                var updatedSpread = currentSpread.update(function (newSpread) {
	                    newSpread.elements = newSpread.elements.update(function (newSpreadElements) {
	                        newSpreadElements.deleteSelection();
	                    });
	                });
	                newSpreads.replace(currentSpread, updatedSpread);
	            });
	        });
	    });
	}
	exports.cutSelection = cutSelection;
	function pasteSelection(state) {
	    return updateCurrentSpread(state, function (newSpread, newState) {
	        newSpread.elements = newSpread.elements.update(function (newSpreadElements) {
	            var newElements = newState.clipboard.map(function (element) {
	                element.translate(10, 10);
	                var newElement = element.clone();
	                newElement.id = newState.getNextId();
	                return newElement;
	            });
	            newSpreadElements.push.apply(newSpreadElements, newElements);
	            newSpreadElements.select.apply(newSpreadElements, [true].concat(newElements));
	        });
	    });
	}
	exports.pasteSelection = pasteSelection;
	function selectionTranslate(state, payload) {
	    return updateCurrentSpread(state, function (newCanvas) {
	        newCanvas.elements = newCanvas.elements.update(function (newCanvasElements) {
	            for (var _i = 0, _a = newCanvasElements.getSelected(); _i < _a.length; _i++) {
	                var canvasElement = _a[_i];
	                var newCanvasElement = canvasElement.clone();
	                newCanvasElement.translate(payload.x, payload.y);
	                newCanvasElements.replace(canvasElement, newCanvasElement);
	            }
	        });
	    });
	}
	exports.selectionTranslate = selectionTranslate;
	function selectionSendForward(state) {
	    return updateCurrentSpread(state, function (newCanvas) {
	        newCanvas.elements = newCanvas.elements.update(function (newCanvasElements) {
	            for (var _i = 0, _a = newCanvasElements.getSelected(); _i < _a.length; _i++) {
	                var canvasElement = _a[_i];
	                newCanvasElements.sendForward(canvasElement);
	            }
	        });
	    });
	}
	exports.selectionSendForward = selectionSendForward;
	function selectionSendBackward(state) {
	    return updateCurrentSpread(state, function (newCanvas) {
	        newCanvas.elements = newCanvas.elements.update(function (newCanvasElements) {
	            for (var _i = 0, _a = newCanvasElements.getSelected(); _i < _a.length; _i++) {
	                var canvasElement = _a[_i];
	                newCanvasElements.sendBackward(canvasElement);
	            }
	        });
	    });
	}
	exports.selectionSendBackward = selectionSendBackward;
	function selectionBringToTop(state) {
	    return updateCurrentSpread(state, function (newCanvas) {
	        newCanvas.elements = newCanvas.elements.update(function (newCanvasElements) {
	            for (var _i = 0, _a = newCanvasElements.getSelected(); _i < _a.length; _i++) {
	                var canvasElement = _a[_i];
	                newCanvasElements.bringToTop(canvasElement);
	            }
	        });
	    });
	}
	exports.selectionBringToTop = selectionBringToTop;
	function selectionBringToBack(state) {
	    return updateCurrentSpread(state, function (newCanvas) {
	        newCanvas.elements = newCanvas.elements.update(function (newCanvasElements) {
	            for (var _i = 0, _a = newCanvasElements.getSelected(); _i < _a.length; _i++) {
	                var canvasElement = _a[_i];
	                newCanvasElements.bringToBack(canvasElement);
	            }
	        });
	    });
	}
	exports.selectionBringToBack = selectionBringToBack;
	function selectionTextAlign(state, payload) {
	    return updateCurrentSpread(state, function (newCanvas) {
	        newCanvas.elements = newCanvas.elements.update(function (newCanvasElements) {
	            for (var _i = 0, _a = newCanvasElements.getSelected(); _i < _a.length; _i++) {
	                var canvasElement = _a[_i];
	                if (canvasElement instanceof spread_element_text_1.SpreadTextElement) {
	                    var newElement = canvasElement.clone();
	                    newElement.align = payload.align;
	                    newCanvasElements.replace(canvasElement, newElement);
	                }
	            }
	        });
	    });
	}
	exports.selectionTextAlign = selectionTextAlign;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var keys_1 = __webpack_require__(40);
	var HotkeysManager = (function () {
	    function HotkeysManager() {
	        var _this = this;
	        this._hotKeys = {};
	        this._disabled = false;
	        window.addEventListener("keydown", function (e) {
	            if (_this._disabled)
	                return;
	            var code = e.which || e.keyCode;
	            if (e.ctrlKey)
	                code |= keys_1.CTRL;
	            if (e.shiftKey)
	                code |= keys_1.SHIFT;
	            if (e.altKey)
	                code |= keys_1.ALT;
	            if (e.metaKey)
	                code |= keys_1.COMMAND;
	            var handler = _this._hotKeys[code];
	            if (!handler)
	                return;
	            e.preventDefault();
	            handler.apply(_this, e);
	        });
	    }
	    HotkeysManager.prototype.enable = function () {
	        this._disabled = false;
	    };
	    HotkeysManager.prototype.disable = function () {
	        this._disabled = true;
	    };
	    HotkeysManager.prototype.register = function (code, handler) {
	        this._hotKeys[code] = handler;
	        return this;
	    };
	    return HotkeysManager;
	}());
	exports.HotkeysManager = HotkeysManager;


/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	function code(s) {
	    return s.toUpperCase().charCodeAt(0);
	}
	exports.code = code;
	exports.ALT = 1 << 8;
	exports.CTRL = 1 << 9;
	exports.SHIFT = 1 << 10;
	exports.COMMAND = 1 << 11;
	exports.Esc = 27;
	exports.Backspace = 8;
	exports.Left = 37;
	exports.Up = 38;
	exports.Right = 39;
	exports.Down = 40;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(5);
	var app_1 = __webpack_require__(8);
	var button_1 = __webpack_require__(42);
	var ToolbarComponent = (function (_super) {
	    __extends(ToolbarComponent, _super);
	    function ToolbarComponent() {
	        _super.apply(this, arguments);
	    }
	    ToolbarComponent.prototype.render = function () {
	        return (React.createElement("div", {className: "c-app-toolbar"}, React.createElement(button_1.ButtonComponent, {shape: "square"}), React.createElement(button_1.ButtonComponent, {shape: "circle"}), React.createElement(button_1.ButtonComponent, {shape: "triangle"}), React.createElement(button_1.ButtonComponent, {shape: "mixbook"}), React.createElement(button_1.ButtonComponent, {shape: "homer-simpson"}), React.createElement(button_1.ButtonComponent, {shape: "sonic"}), React.createElement(button_1.ButtonComponent, {shape: "slack"}), React.createElement(button_1.ButtonComponent, {shape: "react"}), React.createElement(button_1.ButtonComponent, {shape: "text"}), React.createElement(button_1.ButtonComponent, {shape: "paragraph"})));
	    };
	    return ToolbarComponent;
	}(app_1.AppChildComponent));
	exports.ToolbarComponent = ToolbarComponent;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(5);
	var app_1 = __webpack_require__(8);
	var ButtonComponent = (function (_super) {
	    __extends(ButtonComponent, _super);
	    function ButtonComponent() {
	        _super.apply(this, arguments);
	    }
	    ButtonComponent.prototype.onDragStart = function (e) {
	        e.dataTransfer.setData("shape", this.props.shape);
	    };
	    ButtonComponent.prototype.render = function () {
	        return (React.createElement("button", {className: "c-app-toolbar-button", draggable: "true", onDragStart: this.onDragStart.bind(this)}, React.createElement("svg", null, React.createElement("use", {xlinkHref: "shapes/" + this.props.shape + ".svg#" + this.props.shape, x: "10", y: "10", width: "30", height: "30"}))));
	    };
	    return ButtonComponent;
	}(app_1.AppChildComponent));
	exports.ButtonComponent = ButtonComponent;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(5);
	var app_1 = __webpack_require__(8);
	var spread_1 = __webpack_require__(44);
	var NavComponent = (function (_super) {
	    __extends(NavComponent, _super);
	    function NavComponent() {
	        _super.apply(this, arguments);
	    }
	    NavComponent.prototype.onSpreadClick = function (spread) {
	        var spreads = this.props.spreads;
	        this.app.bookDispatcher.spreadSelect(spreads.indexOf(spread));
	    };
	    NavComponent.prototype.render = function () {
	        var _this = this;
	        var spreads = this.props.spreads;
	        var currentSpreadIndex = spreads.currentIndex;
	        return (React.createElement("div", {className: "c-app-nav"}, spreads.map(function (canvas, i) {
	            var classNames = [
	                "c-app-nav--button"
	            ];
	            if (currentSpreadIndex == i) {
	                classNames.push("active");
	            }
	            return (React.createElement("div", {key: "canvas_" + i, className: classNames.join(" "), onClick: function (e) { return _this.onSpreadClick(canvas); }}, React.createElement(spread_1.SpreadComponent, {canvas: canvas, width: 1200, height: 600})));
	        })));
	    };
	    return NavComponent;
	}(app_1.AppChildComponent));
	exports.NavComponent = NavComponent;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(5);
	var DomUtils = __webpack_require__(45);
	var ObjectUtils = __webpack_require__(46);
	var point_1 = __webpack_require__(47);
	var rect_1 = __webpack_require__(48);
	var spread_element_sticker_1 = __webpack_require__(29);
	var spread_element_text_1 = __webpack_require__(31);
	var drag_drop_1 = __webpack_require__(49);
	var app_1 = __webpack_require__(8);
	var text_1 = __webpack_require__(50);
	var sticker_1 = __webpack_require__(52);
	var getElementKey = function (element, modifier) {
	    if (modifier === void 0) { modifier = null; }
	    var key = "element:" + element.id;
	    if (modifier) {
	        key += ":" + modifier;
	    }
	    return key;
	};
	var SpreadComponent = (function (_super) {
	    __extends(SpreadComponent, _super);
	    function SpreadComponent() {
	        _super.apply(this, arguments);
	        this._editingText = false;
	    }
	    Object.defineProperty(SpreadComponent, "defaultProps", {
	        get: function () {
	            return {
	                contentEditable: false
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SpreadComponent.prototype.getOffset = function () {
	        var rect = this.refs.canvasNode.getBoundingClientRect();
	        return new point_1.Point(rect.left, rect.top);
	    };
	    SpreadComponent.prototype.getScale = function () {
	        var rect = this.refs.canvasNode.getBoundingClientRect();
	        return rect.width * 1.0 / this.props.width;
	    };
	    SpreadComponent.prototype.clientRectToSVGRect = function (clientRect) {
	        var scale = this.getScale();
	        var offset = this.getOffset();
	        var left = clientRect.left, top = clientRect.top, width = clientRect.width, height = clientRect.height;
	        var x = (left - offset.x) / scale;
	        var y = (top - offset.y) / scale;
	        width /= scale;
	        height /= scale;
	        return { x: x, y: y, width: width, height: height };
	    };
	    Object.defineProperty(SpreadComponent.prototype, "selectedElements", {
	        get: function () {
	            //TODO: cache
	            return this.props.canvas.elements.getSelected();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    // Events
	    SpreadComponent.prototype.onDragOver = function (e) {
	        e.preventDefault();
	    };
	    SpreadComponent.prototype.onDrop = function (e) {
	        var _this = this;
	        e.preventDefault();
	        var scale = this.getScale();
	        var offset = this.getOffset();
	        var addX = (e.clientX - offset.x) / scale;
	        var addY = (e.clientY - offset.y) / scale;
	        var shape = e.dataTransfer.getData("shape");
	        switch (shape) {
	            case "text":
	            case "paragraph":
	                this.app.spreadDispatcher.addTextElement(addX, addY, shape != "paragraph");
	                setTimeout(function () {
	                    var canvas = _this.props.canvas;
	                    var elementKey = getElementKey(canvas.elements.get(canvas.elements.maxIndex));
	                    var lastElement = _this.refs[elementKey];
	                    lastElement.focus();
	                }, 100);
	                break;
	            default:
	                this.app.spreadDispatcher.add(shape, addX, addY);
	                break;
	        }
	    };
	    SpreadComponent.prototype.onMouseSelectionStart = function (e) {
	        //
	    };
	    SpreadComponent.prototype.onMouseSelectionChange = function (e) {
	        //
	    };
	    SpreadComponent.prototype.onMouseSelectionStop = function (e) {
	        //
	    };
	    SpreadComponent.prototype.onCanvasMouseDown = function (e) {
	        var _this = this;
	        if (e.button != 0)
	            return;
	        if (e.target != this.refs.canvasNode)
	            return;
	        var selected;
	        var selectionElementNodes;
	        var selectionMouseNode;
	        var offset = this.getOffset();
	        var scale = this.getScale();
	        var startX = (e.clientX - offset.x) / scale;
	        var startY = (e.clientY - offset.y) / scale;
	        var _a = this.refs, contentNode = _a.contentNode, selectionNode = _a.selectionNode, selectionElementsNode = _a.selectionElementsNode, selectionOuterNode = _a.selectionOuterNode;
	        new drag_drop_1.DragSession(e, function (e) {
	            _this._currentDragSession = e.session;
	            selectionElementNodes = DomUtils.childElements(selectionElementsNode);
	            selectionMouseNode = DomUtils.createSVGElement("rect");
	            selectionMouseNode.classList.add("c-app-canvas--selection--mouse");
	            selectionNode.appendChild(selectionMouseNode);
	            selectionElementNodes.forEach(function (el) { return DomUtils.hide(el); });
	            DomUtils.hide(selectionOuterNode);
	            selected = [];
	        }, function (e) {
	            var x = startX;
	            var y = startY;
	            var width = e.translation.x / scale;
	            var height = e.translation.y / scale;
	            if (e.translation.x < 0) {
	                x += e.translation.x / scale;
	                width = -width;
	            }
	            if (e.translation.y < 0) {
	                y += e.translation.y / scale;
	                height = -height;
	            }
	            DomUtils.setSVGRectBounds(selectionMouseNode, x, y, width, height);
	            selected = selectionElementNodes.filter(function (rect) {
	                var _a = DomUtils.getSVGRectBounds(rect), rectX = _a[0], rectY = _a[1], rectWidth = _a[2], rectHeight = _a[3];
	                var selected = rectX + rectWidth > x && rectY + rectHeight > y && rectX < x + width && rectY < y + height;
	                DomUtils.toggleVisibility(rect, selected);
	                return selected;
	            });
	            if (selected.length > 1) {
	                var outer = rect_1.outerRect.apply(void 0, selected.map(function (rect) { return rect_1.Rect.fromArray(DomUtils.getSVGRectBounds(rect)); }));
	                DomUtils.setSVGRectBounds(selectionOuterNode, outer.x, outer.y, outer.width, outer.height);
	                DomUtils.show(selectionOuterNode);
	            }
	            else {
	                DomUtils.hide(selectionOuterNode);
	            }
	        }, function (e) {
	            _this._currentDragSession = null;
	            selectionNode.removeChild(selectionMouseNode);
	            (_a = _this.app.spreadDispatcher).select.apply(_a, [true].concat(selected.map(function (rect) { return parseInt(rect.getAttribute("data-id")); })));
	            var _a;
	        });
	    };
	    SpreadComponent.prototype.onCanvasMouseUp = function (e) {
	        if (this._currentDragSession != null) {
	            return;
	        }
	        if (e.target == this.refs.canvasNode) {
	            this.app.spreadDispatcher.clearSelection();
	        }
	    };
	    SpreadComponent.prototype.onElementDragStart = function (e, element) {
	        this._currentDragSession = e.session;
	        var canvasNode = this.refs.canvasNode;
	        canvasNode.classList.add("dragging");
	        if (!this.app.state.spreads.current.elements.isSelected(element.id)) {
	            this.app.spreadDispatcher.select(!e.originalEvent.shiftKey, element.id);
	        }
	    };
	    SpreadComponent.prototype.onElementDragOver = function (e) {
	        var scale = this.getScale();
	        var translateX = e.translation.x / scale;
	        var translateY = e.translation.y / scale;
	        var translationStyle = "translate(" + translateX + "px, " + translateY + "px)";
	        for (var _i = 0, _a = this.selectedElements; _i < _a.length; _i++) {
	            var selectedElement = _a[_i];
	            var selectedElementComponent = this.refs[getElementKey(selectedElement)];
	            var selectedElementOutline = this.refs[getElementKey(selectedElement, "outline")];
	            selectedElementComponent.refs.rootElement.style.transform = translationStyle;
	            selectedElementOutline.style.transform = translationStyle;
	        }
	        var selectedElementOutlineOuter = this.refs.selectionOuterNode;
	        selectedElementOutlineOuter.style.transform = translationStyle;
	    };
	    SpreadComponent.prototype.onElementDrop = function (e) {
	        var canvasNode = this.refs.canvasNode;
	        canvasNode.classList.remove("dragging");
	        var scale = this.getScale();
	        if (e.translation.x != 0 || e.translation.y != 0) {
	            this.app.spreadDispatcher.translate(e.translation.x / scale, e.translation.y / scale);
	        }
	        for (var _i = 0, _a = this.selectedElements; _i < _a.length; _i++) {
	            var selectedElement = _a[_i];
	            var selectedElementComponent = this.refs[getElementKey(selectedElement)];
	            var selectedElementOutline = this.refs[getElementKey(selectedElement, "outline")];
	            selectedElementComponent.refs.rootElement.style.transform = "";
	            selectedElementOutline.style.transform = "";
	            if (selectedElement instanceof spread_element_text_1.SpreadTextElement) {
	                DomUtils.redraw(selectedElementComponent.refs.rootElement);
	            }
	        }
	        var selectedElementOutlineOuter = this.refs.selectionOuterNode;
	        selectedElementOutlineOuter.style.transform = "";
	        this._currentDragSession = null;
	    };
	    SpreadComponent.prototype.onElementMouseDown = function (e, element) {
	        // TODO: rethink this boxing/unboxing
	        var _this = this;
	        var unboxedEvent = e;
	        unboxedEvent.persist();
	        if (e.button != 0)
	            return;
	        new drag_drop_1.DragSession(unboxedEvent, function (e) { return _this.onElementDragStart(e, element); }, function (e) { return _this.onElementDragOver(e); }, function (e) { return _this.onElementDrop(e); });
	    };
	    SpreadComponent.prototype.onElementMouseUp = function (e, spreadElement) {
	        if (this._currentDragSession != null)
	            return;
	        this.app.spreadDispatcher.select(!e.shiftKey, spreadElement.id);
	    };
	    SpreadComponent.prototype.onElementBBoxChange = function (clientRect, element) {
	        var component = this.refs[getElementKey(element)];
	        var componentOutline = this.refs[getElementKey(element, "outline")];
	        var _a = this.clientRectToSVGRect(clientRect), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
	        DomUtils.setSVGRectBounds(component.refs.rootElement, x, y, width, height);
	        if (componentOutline) {
	            DomUtils.setSVGRectBounds(componentOutline, x, y, width, height);
	        }
	    };
	    SpreadComponent.prototype.onTextElementChange = function (e, element) {
	        var scale = this.getScale();
	        var offset = this.getOffset();
	        var _a = this.clientRectToSVGRect(e.bbox), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
	        this.app.spreadDispatcher.editTextElement(element.id, e.text, x, y, width, height);
	    };
	    SpreadComponent.prototype.onTextElementBlur = function (e, element) {
	        if (!e.text.replace(/<.*?>/g, "")) {
	            this.app.spreadDispatcher.deleteSelection();
	            return false;
	        }
	    };
	    // Render
	    SpreadComponent.prototype.renderDefs = function () {
	        return (React.createElement("defs", null, React.createElement("mask", {id: "left-page"}, React.createElement("rect", {x: "0", y: "0", width: "50%", height: "100%", fill: "#fff"})), React.createElement("mask", {id: "right-page"}, React.createElement("rect", {x: "50%", y: "0", width: "50%", height: "100%", fill: "#fff"})), React.createElement("linearGradient", {id: "overlay--shadow--gradient--left", x1: "0%", y1: "0%", x2: "100%", y2: "0%"}, React.createElement("stop", {offset: "0%", className: "c-app-canvas--overlay--shadow--gradient--stop"}), React.createElement("stop", {offset: "100%", className: "c-app-canvas--overlay--shadow--gradient--start"})), React.createElement("linearGradient", {id: "overlay--shadow--gradient--right", x1: "0%", y1: "0%", x2: "100%", y2: "0%"}, React.createElement("stop", {offset: "0%", className: "c-app-canvas--overlay--shadow--gradient--start"}), React.createElement("stop", {offset: "100%", className: "c-app-canvas--overlay--shadow--gradient--stop"}))));
	    };
	    SpreadComponent.prototype.renderBackground = function () {
	        return (React.createElement("g", {className: "c-app-canvas--background"}, React.createElement("rect", {className: "c-app-canvas--background--rect", x: "0", y: "0", width: "100%", height: "100%"})));
	    };
	    SpreadComponent.prototype.renderElement = function (element) {
	        var contentEditable = this.props.contentEditable;
	        var elementId = getElementKey(element);
	        var attributes = {
	            key: elementId,
	            ref: elementId
	        };
	        if (contentEditable) {
	            ObjectUtils.assign(attributes, {
	                onMouseDown: this.onElementMouseDown.bind(this),
	                onMouseUp: this.onElementMouseUp.bind(this),
	                onBBoxChange: this.onElementBBoxChange.bind(this),
	            });
	        }
	        switch (element.getType()) {
	            case spread_element_sticker_1.SpreadStickerElementType:
	                return React.createElement(sticker_1.SpreadStickerElementComponent, __assign({element: element}, attributes));
	            case spread_element_text_1.SpreadTextElementType:
	                if (contentEditable) {
	                    ObjectUtils.assign(attributes, {
	                        onChange: this.onTextElementChange.bind(this),
	                        onBlur: this.onTextElementBlur.bind(this),
	                    });
	                }
	                return React.createElement(text_1.SpreadTextElementComponent, __assign({element: element}, attributes));
	        }
	    };
	    SpreadComponent.prototype.renderContent = function () {
	        var _this = this;
	        var canvas = this.props.canvas;
	        return (React.createElement("g", {ref: "contentNode", className: "c-app-canvas--content"}, canvas.elements.map(function (spreadElement) { return _this.renderElement(spreadElement); })));
	    };
	    SpreadComponent.prototype.renderSelection = function () {
	        return (React.createElement("g", {ref: "selectionNode", className: "c-app-canvas--selection"}, React.createElement("g", {ref: "selectionElementsNode", className: "c-app-canvas--selection--elements"}, this.renderSelectedElementsOutline()), this.renderSelectedElementsOuterRect()));
	    };
	    SpreadComponent.prototype.renderSelectedElementsOutline = function () {
	        var selectedElements = this.selectedElements;
	        return this.props.canvas.elements.map(function (spreadElement) {
	            var styles = {};
	            if (selectedElements.indexOf(spreadElement) == -1) {
	                styles.display = "none";
	            }
	            var id = getElementKey(spreadElement, "outline");
	            return (React.createElement("rect", {key: id, ref: id, style: styles, className: "c-app-canvas--selection--elements--rect translatable", x: spreadElement.x, y: spreadElement.y, "data-id": spreadElement.id, width: spreadElement.width, height: spreadElement.height}));
	        });
	    };
	    SpreadComponent.prototype.renderSelectedElementsOuterRect = function () {
	        var x = 0;
	        var y = 0;
	        var width = 0;
	        var height = 0;
	        var styles = {};
	        if (this.selectedElements.length > 1) {
	            _a = rect_1.outerRect.apply(void 0, this.selectedElements.map(function (e) { return new rect_1.Rect(e.x, e.y, e.width, e.height); })).toArray(), x = _a[0], y = _a[1], width = _a[2], height = _a[3];
	        }
	        else {
	            styles.display = "none";
	        }
	        return (React.createElement("rect", {ref: "selectionOuterNode", key: "selectionOuterNode", className: "c-app-canvas--selection--outer translatable", style: styles, x: x, y: y, width: width, height: height}));
	        var _a;
	    };
	    SpreadComponent.prototype.renderOverlay = function () {
	        var _a = this.props, width = _a.width, height = _a.height;
	        var middle = width / 2;
	        return (React.createElement("g", {className: "c-app-canvas--overlay"}, React.createElement("rect", {className: "c-app-canvas--overlay--shadow--left", x: "50%", y: "0", width: "50", height: "100%", fill: "url(#overlay--shadow--gradient--left)"}), React.createElement("rect", {className: "c-app-canvas--overlay--shadow--right", x: "50%", y: "0", width: "50", height: "100%", fill: "url(#overlay--shadow--gradient--right)"})));
	    };
	    SpreadComponent.prototype.renderGuidelines = function () {
	        return (React.createElement("g", {className: "c-app-canvas--guidelines"}, React.createElement("line", {x1: "50%", y1: "0", x2: "50%", y2: "100%"})));
	    };
	    SpreadComponent.prototype.renderEditableCanvas = function () {
	        var _a = this.props, width = _a.width, height = _a.height;
	        return (React.createElement("svg", {ref: "canvasNode", className: "c-app-canvas", onDragOver: this.onDragOver.bind(this), onDrop: this.onDrop.bind(this), onMouseDown: this.onCanvasMouseDown.bind(this), onMouseUp: this.onCanvasMouseUp.bind(this), viewBox: "0 0 " + width + " " + height}, this.renderDefs(), this.renderBackground(), this.renderContent(), this.renderOverlay(), this.renderGuidelines(), this.renderSelection()));
	    };
	    SpreadComponent.prototype.renderCanvas = function () {
	        var _a = this.props, width = _a.width, height = _a.height;
	        return (React.createElement("svg", {ref: "canvasNode", className: "c-app-canvas", viewBox: "0 0 " + width + " " + height}, this.renderDefs(), this.renderBackground(), this.renderContent(), this.renderOverlay(), this.renderGuidelines()));
	    };
	    SpreadComponent.prototype.render = function () {
	        var contentEditable = this.props.contentEditable;
	        if (contentEditable) {
	            return this.renderEditableCanvas();
	        }
	        else {
	            return this.renderCanvas();
	        }
	    };
	    return SpreadComponent;
	}(app_1.AppChildComponent));
	exports.SpreadComponent = SpreadComponent;


/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
	function nodeListToArray(nodeList) {
	    return Array.prototype.slice.call(nodeList);
	}
	exports.nodeListToArray = nodeListToArray;
	function querySelectorAll(selector, context) {
	    if (context === void 0) { context = null; }
	    return nodeListToArray((context || document).querySelectorAll(selector));
	}
	exports.querySelectorAll = querySelectorAll;
	function childElements(element) {
	    return nodeListToArray(element.childNodes);
	}
	exports.childElements = childElements;
	function createSVGElement(tagName) {
	    return document.createElementNS(SVG_NAMESPACE, tagName);
	}
	exports.createSVGElement = createSVGElement;
	function hide(element) {
	    element.style.display = "none";
	}
	exports.hide = hide;
	function show(element) {
	    //TODO: Don't use block value for all elements
	    element.style.display = "block";
	}
	exports.show = show;
	function toggleVisibility(element, visible) {
	    (visible ? show : hide)(element);
	}
	exports.toggleVisibility = toggleVisibility;
	function getSVGRectBounds(rect) {
	    return [
	        rect.x.baseVal.value,
	        rect.y.baseVal.value,
	        rect.width.baseVal.value,
	        rect.height.baseVal.value
	    ];
	}
	exports.getSVGRectBounds = getSVGRectBounds;
	function setSVGRectBounds(rect, x, y, width, height) {
	    rect.x.baseVal.value = x;
	    rect.y.baseVal.value = y;
	    rect.width.baseVal.value = width;
	    rect.height.baseVal.value = height;
	}
	exports.setSVGRectBounds = setSVGRectBounds;
	function redraw(element) {
	    // TODO: Find better way to force redraw
	    hide(element);
	    setTimeout(function () { return show(element); }, 1);
	}
	exports.redraw = redraw;


/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	function assign(target) {
	    var extendWith = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        extendWith[_i - 1] = arguments[_i];
	    }
	    for (var _a = 0, extendWith_1 = extendWith; _a < extendWith_1.length; _a++) {
	        var extendObject = extendWith_1[_a];
	        for (var key in extendObject) {
	            if (!extendObject.hasOwnProperty(key))
	                continue;
	            target[key] = extendObject[key];
	        }
	    }
	    return target;
	}
	exports.assign = assign;


/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	var Point = (function () {
	    function Point(x, y) {
	        this.x = x;
	        this.y = y;
	    }
	    Point.prototype.add = function (other) {
	        this.x += other.x;
	        this.y += other.y;
	        return this;
	    };
	    Point.prototype.subtract = function (other) {
	        this.x -= other.x;
	        this.y -= other.y;
	        return this;
	    };
	    Point.prototype.clone = function () {
	        return new Point(this.x, this.y);
	    };
	    return Point;
	}());
	exports.Point = Point;


/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	var Rect = (function () {
	    function Rect(x, y, width, height) {
	        this.x = x;
	        this.y = y;
	        this.width = width;
	        this.height = height;
	    }
	    Rect.fromArray = function (_a) {
	        var x = _a[0], y = _a[1], width = _a[2], height = _a[3];
	        return new Rect(x, y, width, height);
	    };
	    Rect.prototype.toArray = function () {
	        return [this.x, this.y, this.width, this.height];
	    };
	    return Rect;
	}());
	exports.Rect = Rect;
	function outerRect() {
	    var rects = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        rects[_i - 0] = arguments[_i];
	    }
	    if (rects.length == 0)
	        return null;
	    var x = Math.min.apply(null, rects.map(function (e) { return e.x; }));
	    var y = Math.min.apply(null, rects.map(function (e) { return e.y; }));
	    var x2 = Math.max.apply(null, rects.map(function (e) { return e.x + e.width; }));
	    var y2 = Math.max.apply(null, rects.map(function (e) { return e.y + e.height; }));
	    return new Rect(x, y, x2 - x, y2 - y);
	}
	exports.outerRect = outerRect;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var point_1 = __webpack_require__(47);
	var DragSessionEvent = (function () {
	    function DragSessionEvent(session, translation, originalEvent) {
	        this.session = session;
	        this.translation = translation;
	        this.originalEvent = originalEvent;
	    }
	    return DragSessionEvent;
	}());
	exports.DragSessionEvent = DragSessionEvent;
	var DragSession = (function () {
	    function DragSession(e, _onStartDragCallback, _onDragCallback, _onDropCallback) {
	        this._onStartDragCallback = _onStartDragCallback;
	        this._onDragCallback = _onDragCallback;
	        this._onDropCallback = _onDropCallback;
	        this._originalEvent = e;
	        this._startDragPoint = new point_1.Point(e.clientX, e.clientY);
	        this._started = false;
	        window.addEventListener("mousemove", this._windowOnMouseMoveFn = this._onMouseMove.bind(this));
	        window.addEventListener("mouseup", this._windowOnMouseUpFn = this._onMouseUp.bind(this));
	    }
	    DragSession.prototype.getTranslation = function (e) {
	        return new point_1.Point(e.clientX, e.clientY).subtract(this._startDragPoint);
	    };
	    DragSession.prototype.createEventObject = function (e) {
	        return new DragSessionEvent(this, this.getTranslation(e), this._originalEvent);
	    };
	    DragSession.prototype._onMouseMove = function (e) {
	        if (!this._started) {
	            this._onStartDragCallback(this.createEventObject(e));
	            this._onStartDragCallback = null;
	            this._started = true;
	        }
	        this._onDragCallback(this.createEventObject(e));
	    };
	    DragSession.prototype._onMouseUp = function (e) {
	        window.removeEventListener("mousemove", this._windowOnMouseMoveFn);
	        window.removeEventListener("mouseup", this._windowOnMouseUpFn);
	        if (this._started) {
	            this._onDropCallback(this.createEventObject(e));
	        }
	    };
	    return DragSession;
	}());
	exports.DragSession = DragSession;
	// type MouseEventHandler = (e: MouseEvent) => void;
	// export class DragManager {
	//   private _activeDragSessions: DragSession[];
	//   public onMouseDown(e: MouseEvent): MouseEventHandler {
	//     return (e: MouseEvent) => {
	//     };
	//     if (e.button != 0) return;
	//   }
	//   public onMouseUp(e: MouseEvent) {
	//     if (this._isDragActive) return;
	//   }
	// }


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(5);
	var ObjectUtils = __webpack_require__(46);
	var spread_element_text_1 = __webpack_require__(31);
	var element_1 = __webpack_require__(51);
	var SpreadTextElementComponent = (function (_super) {
	    __extends(SpreadTextElementComponent, _super);
	    function SpreadTextElementComponent() {
	        _super.apply(this, arguments);
	    }
	    // Getters
	    SpreadTextElementComponent.prototype.getAttributes = function () {
	        var element = this.props.element;
	        var attributes = ObjectUtils.assign(_super.prototype.getAttributes.call(this), {
	            onDoubleClick: this.onDoubleClick.bind(this)
	        });
	        attributes.className += " c-app-spread-element__text";
	        if (!element.autosize) {
	            attributes.className += " c-app-spread-element__text__paragraph";
	        }
	        return attributes;
	    };
	    SpreadTextElementComponent.prototype.getContentAttributes = function () {
	        var element = this.props.element;
	        return {
	            ref: "contentElement",
	            style: {
	                textAlign: spread_element_text_1.textAlignStyle(element.align)
	            },
	            className: "c-app-spread-element__text--content",
	            dangerouslySetInnerHTML: { __html: element.text },
	            onInput: this.onContentInput.bind(this),
	            onBlur: this.onContentBlur.bind(this),
	        };
	    };
	    // Events
	    SpreadTextElementComponent.prototype.onMouseDown = function (e) {
	        if (this._editing)
	            return;
	        _super.prototype.onMouseDown.call(this, e);
	    };
	    SpreadTextElementComponent.prototype.onDoubleClick = function (e) {
	        this.focus();
	    };
	    SpreadTextElementComponent.prototype.onContentBlur = function (e) {
	        this.blur();
	    };
	    SpreadTextElementComponent.prototype.onContentInput = function (e) {
	        var element = this.props.element;
	        if (element.autosize) {
	            this.resizeRootElement();
	        }
	    };
	    // Render
	    SpreadTextElementComponent.prototype.render = function () {
	        return (React.createElement("foreignObject", __assign({}, this.getAttributes()), React.createElement("div", __assign({}, this.getContentAttributes()))));
	    };
	    // Actions
	    SpreadTextElementComponent.prototype.resizeRootElement = function () {
	        var element = this.props.element;
	        var _a = this.refs, rootElement = _a.rootElement, contentElement = _a.contentElement;
	        var initialBBox = this._initialBBox;
	        var currentBBox = contentElement.getBoundingClientRect();
	        var diffX = currentBBox.width - initialBBox.width;
	        var newX = currentBBox.left;
	        switch (element.align) {
	            case spread_element_text_1.TextAlign.Center:
	                newX = initialBBox.left - diffX / 2.0;
	                break;
	            case spread_element_text_1.TextAlign.Right:
	                newX = initialBBox.left - diffX;
	                break;
	        }
	        this.triggerBBoxChange({
	            left: newX,
	            top: currentBBox.top,
	            width: currentBBox.width,
	            height: currentBBox.height,
	        });
	    };
	    SpreadTextElementComponent.prototype.blur = function () {
	        var _a = this.props, element = _a.element, onChange = _a.onChange, onBlur = _a.onBlur;
	        var _b = this.refs, rootElement = _b.rootElement, contentElement = _b.contentElement;
	        contentElement.contentEditable = String(false);
	        contentElement.spellcheck = false;
	        this.app.hotkeys.enable();
	        this._editing = false;
	        if (onBlur) {
	            if (onBlur.call(this, { text: contentElement.innerHTML }, element) === false) {
	                return;
	            }
	        }
	        if (element.text != contentElement.innerHTML && onChange) {
	            var event_1 = {
	                text: contentElement.innerHTML,
	                bbox: (element.autosize ? contentElement : rootElement).getBoundingClientRect()
	            };
	            onChange.call(this, event_1, element);
	        }
	    };
	    SpreadTextElementComponent.prototype.focus = function () {
	        var contentElement = this.refs.contentElement;
	        contentElement.contentEditable = String(true);
	        contentElement.spellcheck = true;
	        this.app.hotkeys.disable();
	        contentElement.focus();
	        this._initialBBox = contentElement.getBoundingClientRect();
	        this._editing = true;
	    };
	    return SpreadTextElementComponent;
	}(element_1.SpreadElementComponent));
	exports.SpreadTextElementComponent = SpreadTextElementComponent;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var app_1 = __webpack_require__(8);
	var SpreadElementComponent = (function (_super) {
	    __extends(SpreadElementComponent, _super);
	    function SpreadElementComponent() {
	        _super.apply(this, arguments);
	    }
	    SpreadElementComponent.prototype.getAttributes = function () {
	        var element = this.props.element;
	        return {
	            ref: "rootElement",
	            className: "c-app-spread-element",
	            x: element.x,
	            y: element.y,
	            width: element.width,
	            height: element.height,
	            onMouseDown: this.onMouseDown.bind(this),
	            onMouseUp: this.onMouseUp.bind(this),
	        };
	    };
	    SpreadElementComponent.prototype.onMouseDown = function (e) {
	        var _a = this.props, element = _a.element, onMouseDown = _a.onMouseDown;
	        if (onMouseDown) {
	            onMouseDown.call(this, e, element);
	        }
	    };
	    SpreadElementComponent.prototype.onMouseUp = function (e) {
	        var _a = this.props, element = _a.element, onMouseUp = _a.onMouseUp;
	        if (onMouseUp) {
	            onMouseUp.call(this, e, element);
	        }
	    };
	    SpreadElementComponent.prototype.onBBoxChange = function (clientRect) {
	        var _a = this.props, element = _a.element, onBBoxChange = _a.onBBoxChange;
	        if (onBBoxChange) {
	            onBBoxChange.call(this, clientRect, element);
	        }
	    };
	    SpreadElementComponent.prototype.triggerBBoxChange = function (clientRect) {
	        this.onBBoxChange(clientRect);
	    };
	    return SpreadElementComponent;
	}(app_1.AppChildComponent));
	exports.SpreadElementComponent = SpreadElementComponent;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(5);
	var ObjectUtils = __webpack_require__(46);
	var element_1 = __webpack_require__(51);
	var SpreadStickerElementComponent = (function (_super) {
	    __extends(SpreadStickerElementComponent, _super);
	    function SpreadStickerElementComponent() {
	        _super.apply(this, arguments);
	    }
	    // Getters
	    SpreadStickerElementComponent.prototype.getAttributes = function () {
	        var element = this.props.element;
	        var attributes = ObjectUtils.assign(_super.prototype.getAttributes.call(this), {
	            xlinkHref: "shapes/" + element.shape + ".svg#" + element.shape
	        });
	        attributes.className += " c-app-spread-element__sticker";
	        return attributes;
	    };
	    // Render
	    SpreadStickerElementComponent.prototype.render = function () {
	        return React.createElement("use", __assign({}, this.getAttributes()));
	    };
	    return SpreadStickerElementComponent;
	}(element_1.SpreadElementComponent));
	exports.SpreadStickerElementComponent = SpreadStickerElementComponent;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map