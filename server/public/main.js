(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_works_works_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/works/works.component */ "./src/app/components/works/works.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");






var routes = [
    { path: '', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], pathMatch: 'full' },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'works', component: _components_works_works_component__WEBPACK_IMPORTED_MODULE_4__["WorksComponent"] },
    { path: 'skills', component: _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-nav{\r\n    background: #e0ebe8;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLW5hdntcclxuICAgIGJhY2tncm91bmQ6ICNlMGViZTg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/', 'about']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_about_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/header/header.component */ "./src/app/components/about/header/header.component.ts");
/* harmony import */ var _components_about_resume_resume_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/resume/resume.component */ "./src/app/components/about/resume/resume.component.ts");
/* harmony import */ var _components_about_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about/footer/footer.component */ "./src/app/components/about/footer/footer.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_works_works_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/works/works.component */ "./src/app/components/works/works.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _components_about_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_about_resume_resume_component__WEBPACK_IMPORTED_MODULE_7__["ResumeComponent"],
                _components_about_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _components_works_works_component__WEBPACK_IMPORTED_MODULE_10__["WorksComponent"],
                _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-header {\r\n    background: #e0ebe8;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlMGViZTg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-resume></app-resume>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/about/footer/footer.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/about/footer/footer.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n    background: #c5ded7;\r\n    height: 100px; \r\n}\r\n.fotter-content{\r\n    height: 100px;\r\n}\r\n.btn{\r\n    border: 1px solid #ccc;\r\n    background: rgba(38, 132, 80, 0.31);\r\n    border-radius: 10px;\r\n    color: white;\r\n    transition: 0.2s all;\r\n    cursor: pointer;\r\n}\r\n.btn:hover{\r\n    background: rgba(38, 132, 80, 0.404);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICAgIGJhY2tncm91bmQ6ICNjNWRlZDc7XHJcbiAgICBoZWlnaHQ6IDEwMHB4OyBcclxufVxyXG4uZm90dGVyLWNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5idG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzOCwgMTMyLCA4MCwgMC4zMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzgsIDEzMiwgODAsIDAuNDA0KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/about/footer/footer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/about/footer/footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"fotter-content col d-flex flex-row justify-content-around align-items-center text-light\">\n          <a href=\"./assets/files/Web Developer - Gaby Buchnik.doc\" class=\"btn\">Download Cv</a>\n          <a href=\"mailto:gabybuchnik@gmail.com\" class=\"btn\">Contact Me</a>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/about/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/about/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/about/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/about/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/about/header/header.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/about/header/header.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".worker {\r\n    background-image: url('worker.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    height: 300px;\r\n    background-position-x: 50%;\r\n}\r\n\r\n.welcome {\r\n    background: rgba(243, 243, 243, 0.527);\r\n    border-radius: 20px;\r\n    padding: 10px;\r\n    width: 100%;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.text-animation{\r\n    -webkit-animation: moveRight 1.5s;\r\n            animation: moveRight 1.5s;\r\n    position: relative;\r\n}\r\n\r\n@-webkit-keyframes moveRight {\r\n    from {\r\n        left: -500px;\r\n    }\r\n    to {\r\n        left: 0px;\r\n    }\r\n}\r\n\r\n@keyframes moveRight {\r\n    from {\r\n        left: -500px;\r\n    }\r\n    to {\r\n        left: 0px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBNkQ7SUFDN0Qsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksU0FBUztJQUNiO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFNBQVM7SUFDYjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29ya2VyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy93b3JrZXIucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTAlO1xyXG59XHJcblxyXG4ud2VsY29tZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMjQzLCAyNDMsIDAuNTI3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi50ZXh0LWFuaW1hdGlvbntcclxuICAgIGFuaW1hdGlvbjogbW92ZVJpZ2h0IDEuNXM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZVJpZ2h0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIGxlZnQ6IC01MDBweDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/about/header/header.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/about/header/header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 d-flex justify-content-center align-items-center\">\n      <div class=\"welcome\">\n        <h1 class=\"text-animation greenTitle\">I'm Gaby .</h1>\n        <h5 class=\"text-animation greenTitle\">a web developer</h5>\n      </div>\n    </div>\n    <div class=\"col-sm-6 worker my-5 my-sm-0\">\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/about/header/header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/about/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/about/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/about/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/about/resume/resume.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/about/resume/resume.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-wrapper{\r\n    background: #f0f0f0;\r\n    height: 100%;\r\n}\r\n.work-img{\r\n    background: #45b29a;\r\n    min-height: 220px;\r\n}\r\n.font{\r\n    font-size: 1.5em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ud29yay1pbWd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDViMjlhO1xyXG4gICAgbWluLWhlaWdodDogMjIwcHg7XHJcbn1cclxuLmZvbnR7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/about/resume/resume.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/about/resume/resume.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\">\r\n\r\n  <div class=\"row my-3 px-1\">\r\n    <div class=\"col-sm-3 border d-flex justify-content-center align-items-center order-sm-2 work-img\">\r\n      <div src=\"../../../../assets/images/Bynet.png\" class=\"font font-weight-bold greenTitle\">Matrix</div>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <div class=\"d-flex align-items-start flex-column justify-content-center content-wrapper px-3\">\r\n        <h4 class=\"title greenTitle\">Front End Developer</h4>\r\n        <div class=\"desc \">\r\n          <ul>\r\n            <li><b>Kendo UI Html5 Css3 JavaScript jQuery Bootstrap4 JSON</b></li>\r\n            <li>Improved existing component visually and removed dead code</li>\r\n            <li>Improved general look</li>\r\n            <li>Expanded components functionality</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row my-3 px-1\">\r\n    <div class=\"col-sm-3 border d-flex justify-content-center align-items-center work-img\">\r\n      <div src=\"../../../../assets/images/Bynet.png\" class=\"font font-weight-bold greenTitle\">Bynet Software System\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <div class=\"d-flex align-items-start flex-column justify-content-center content-wrapper px-3\">\r\n        <h4 class=\"title greenTitle\">Front End Developer</h4>\r\n        <div class=\"desc\">\r\n          <ul>\r\n            <li><b>HTML5 , Css3 , Javscript , Jquery , Handlebars , Ajax , Bootstrap , JSON</b></li>\r\n            <li>Build components / portals from scratch by style guide and specification</li>\r\n            <li>Create supports lists in SharePoint</li>\r\n            <li>Create dynamic components / portals using REST API</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/about/resume/resume.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/about/resume/resume.component.ts ***!
  \*************************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/components/about/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/components/about/resume/resume.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav>ul{\r\n    display:flex;\r\n    justify-content: flex-end;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    height: 80px;\r\n}\r\nnav>ul>li>a{\r\n    padding:0px 15px;\r\n    color: #45b29a;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    transition: 0.2s all;\r\n}\r\nnav>ul>li>a:hover{\r\n    color : #3e8878;\r\n}\r\nnav>ul>li>a.active{\r\n    color: #21564b;\r\n}\r\nul{\r\n    margin:0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXY+dWx7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxubmF2PnVsPmxpPmF7XHJcbiAgICBwYWRkaW5nOjBweCAxNXB4O1xyXG4gICAgY29sb3I6ICM0NWIyOWE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxufVxyXG5uYXY+dWw+bGk+YTpob3ZlcntcclxuICAgIGNvbG9yIDogIzNlODg3ODtcclxufVxyXG5uYXY+dWw+bGk+YS5hY3RpdmV7XHJcbiAgICBjb2xvcjogIzIxNTY0YjtcclxufVxyXG51bHtcclxuICAgIG1hcmdpbjowO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <nav>\n        <ul>\n          <li>\n            <a routerLink=\"about\" routerLinkActive=\"active\">About</a>\n          </li>\n          <li>\n            <a routerLink=\"works\" routerLinkActive=\"active\">Works</a>\n          </li>\n          <li>\n            <a routerLink=\"skills\" routerLinkActive=\"active\">Skills</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/skills/skills.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/skills/skills.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#skills-container {\r\n    min-height: 81.4%;\r\n}\r\n\r\n.content {\r\n    display: block;\r\n    height: 50%;\r\n}\r\n\r\nh5 {\r\n    margin: 0;\r\n}\r\n\r\n.title{\r\n    width: 30%;\r\n}\r\n\r\n.bar-wrapper {\r\n    width: 70%;\r\n    height: 20px;\r\n    background: #ccc;\r\n}\r\n\r\n.bar {\r\n    transition: 2s all;\r\n    height: 20px;\r\n    background: rgb(152, 183, 185);\r\n}\r\n\r\n.item{\r\n    margin:10px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNza2lsbHMtY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDgxLjQlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG4uYmFyLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuXHJcbi5iYXIge1xyXG4gICAgdHJhbnNpdGlvbjogMnMgYWxsO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1MiwgMTgzLCAxODUpO1xyXG59XHJcbi5pdGVte1xyXG4gICAgbWFyZ2luOjEwcHggMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/skills/skills.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/skills/skills.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"skills-container\">\n  <div class=\"content-wrapper p-5\">\n    <div class=\"content\">\n\n      <div class=\"item d-flex flex-row justify-content-between align-items-center\">\n        <h5 class=\"title\">Html</h5>\n        <div class=\"bar-wrapper d-flex flex-row justify-content-start align-items-center\">\n          <div class=\"bar\" [ngStyle]=\"{'width.%':bar1}\"></div>\n        </div>\n      </div>\n\n      <div class=\"item d-flex flex-row justify-content-between align-items-center\">\n        <h5 class=\"title\">Css</h5>\n        <div class=\"bar-wrapper d-flex flex-row justify-content-start align-items-center\">\n          <div class=\"bar\" [ngStyle]=\"{'width.%':bar2}\"></div>\n        </div>\n      </div>\n\n      <div class=\"item d-flex flex-row justify-content-between align-items-center\">\n        <h5 class=\"title\">Javascript</h5>\n        <div class=\"bar-wrapper d-flex flex-row justify-content-start align-items-center\">\n          <div class=\"bar\" [ngStyle]=\"{'width.%':bar3}\"></div>\n        </div>\n      </div>\n\n      <div class=\"item d-flex flex-row justify-content-between align-items-center\">\n        <h5 class=\"title\">Jquery</h5>\n        <div class=\"bar-wrapper d-flex flex-row justify-content-start align-items-center\">\n          <div class=\"bar\" [ngStyle]=\"{'width.%':bar4}\"></div>\n        </div>\n      </div>\n\n      <div class=\"item d-flex flex-row justify-content-between align-items-center\">\n        <h5 class=\"title\">Angular 7</h5>\n        <div class=\"bar-wrapper d-flex flex-row justify-content-start align-items-center\">\n          <div class=\"bar\" [ngStyle]=\"{'width.%':bar5}\"></div>\n        </div>\n      </div>\n\n      <div class=\"item d-flex flex-row justify-content-between align-items-center\">\n        <h5 class=\"title\">Nodejs</h5>\n        <div class=\"bar-wrapper d-flex flex-row justify-content-start align-items-center\">\n          <div class=\"bar\" [ngStyle]=\"{'width.%':bar6}\"></div>\n        </div>\n      </div>\n\n      <div class=\"item d-flex flex-row justify-content-between align-items-center\">\n        <h5 class=\"title\">Git</h5>\n        <div class=\"bar-wrapper d-flex flex-row justify-content-start align-items-center\">\n          <div class=\"bar\" [ngStyle]=\"{'width.%':bar7}\"></div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.bar1 = null;
        this.bar2 = null;
        this.bar3 = null;
        this.bar4 = null;
        this.bar5 = null;
        this.bar6 = null;
        this.bar7 = null;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.bar1 = 0;
        this.bar2 = 0;
        this.bar3 = 0;
        this.bar4 = 0;
        this.bar5 = 0;
        this.bar6 = 0;
        this.bar7 = 0;
    };
    SkillsComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.intervalId = setTimeout(function () {
            _this.bar1 = 100;
            _this.bar2 = 95;
            _this.bar3 = 87;
            _this.bar4 = 87;
            _this.bar5 = 80;
            _this.bar6 = 80;
            _this.bar7 = 85;
        }, 100);
    };
    SkillsComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalId);
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/components/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/components/skills/skills.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/components/works/works.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/works/works.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#works-container{\r\n    min-height: 81.4%;\r\n}\r\n.content{\r\n    display: block;\r\n    -webkit-filter: grayscale(100%);\r\n            filter: grayscale(100%);\r\n}\r\nimg{\r\n    max-width: 80%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3Jrcy93b3Jrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsK0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd29ya3Mvd29ya3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3b3Jrcy1jb250YWluZXJ7XHJcbiAgICBtaW4taGVpZ2h0OiA4MS40JTtcclxufVxyXG4uY29udGVudHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbn1cclxuaW1ne1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/works/works.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/works/works.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"works-container\">\r\n  <div class=\"content d-flex justify-content-center align-items-center flex-column\">\r\n    <img src=\"../../../assets/images/under.png\" #buildImg>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/works/works.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/works/works.component.ts ***!
  \*****************************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorksComponent = /** @class */ (function () {
    function WorksComponent() {
    }
    WorksComponent.prototype.ngOnInit = function () {
    };
    WorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-works',
            template: __webpack_require__(/*! ./works.component.html */ "./src/app/components/works/works.component.html"),
            styles: [__webpack_require__(/*! ./works.component.css */ "./src/app/components/works/works.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorksComponent);
    return WorksComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gabybu\Desktop\cv\client\mycv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map