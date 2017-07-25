webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__submit_review_submit_review_component__ = __webpack_require__("../../../../../src/app/submit-review/submit-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//importing the core angular module

//importing the routing module to allow me to define routes in this file





// import { FileUploadComponent } from ./'file-upload/file-upload.component';
var routes = [
    {
        path: 'browse',
        component: __WEBPACK_IMPORTED_MODULE_2__product_list_product_list_component__["a" /* ProductListComponent */]
    },
    {
        path: 'product/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__products_products_component__["a" /* ProductsComponent */]
    },
    {
        path: 'submit',
        component: __WEBPACK_IMPORTED_MODULE_4__submit_review_submit_review_component__["a" /* SubmitReviewComponent */]
    },
    {
        // the login/logout/signup are going to be in the same component like in express
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]
    },
    {
        // the login/logout/signup are going to be in the same component like in express
        path: 'logout',
        component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]
    },
    {
        // the login/logout/signup are going to be in the same component like in express
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n    <title>{{ title }}</title>\n\n</head>\n\n  <body class='full-bg-img body-main image-responsive'>\n    <header>\n      <!--Navbar-->\n      <nav class=\"navbar navbar-toggleable-md navbar-dark fixed-top scrolling-navbar\">\n          <div class=\"container\">\n              <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav1\" aria-controls=\"navbarNav1\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                  <span class=\"navbar-toggler-icon\"></span>\n              </button>\n              <a class=\"navbar-brand\" href=\"#\">\n                  <strong>microReviews</strong>\n              </a>\n              <div class=\"collapse navbar-collapse\" id=\"navbarNav1\">\n                  <ul class=\"navbar-nav mr-auto\">\n                      <!-- <li class=\"nav-item active\">\n                          <a class=\"nav-link\">Home <span class=\"sr-only\">(current)</span></a>\n                      </li> -->\n                      <li class=\"nav-item\">\n                          <a [routerLink]=\"['/browse']\" class=\"nav-link\">Browse</a>\n                      </li>\n                      <li class=\"nav-item\">\n                          <a [routerLink]=\"['/submit']\" class=\"nav-link\">Submit a review</a>\n                      </li>\n                      <li class=\"nav-item\">\n                          <a [routerLink]=\"['/']\" fragment=\"about\" class=\"nav-link\">About</a>\n                      </li>\n                      <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n                          <a [routerLink]=\"['#about']\"  class=\"nav-link\">About</a>\n                      </li>\n                  </ul>\n                  <form class=\"form-inline waves-effect waves-light\">\n                      <input class=\"form-control\" type=\"text\" placeholder=\"Search\">\n                  </form>\n              </div>\n          </div>\n      </nav>\n      <!--/.Navbar-->\n    </header>\n\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n\n      <!--Footer-->\n      <footer class=\"page-footer center-on-small-only\">\n\n          <!--Footer Links-->\n          <div class=\"container-fluid\">\n              <div class=\"row\">\n\n                  <!--First column-->\n                  <div class=\"col-lg-3 offset-lg-1 hidden-lg-down\">\n                      <h5 class=\"title\" id=\"about\">ABOUT microReviews</h5>\n                      <p>microReviews was developed to better inform manufacturers and consumers about several products.</p>\n\n                      <p>While a consumer wants to make an informed purchase, manufacturers want to know what they did right so that they can sell more products.</p>\n\n                      <p>This site can give everyone the opportunity to express their experiences with the smallest components that make a product.</p>\n                  </div>\n                  <!--/.First column-->\n\n                  <hr class=\"hidden-md-up\">\n\n                  <!--Second column-->\n                  <div class=\"col-lg-2 col-md-4 offset-lg-1\">\n                      <h5 class=\"title\">First column</h5>\n                      <ul>\n                          <li><a href=\"#!\">Link 1</a></li>\n                          <li><a href=\"#!\">Link 2</a></li>\n                          <li><a href=\"#!\">Link 3</a></li>\n                          <li><a href=\"#!\">Link 4</a></li>\n                      </ul>\n                  </div>\n                  <!--/.Second column-->\n\n                  <hr class=\"hidden-md-up\">\n\n                  <!--Third column-->\n                  <div class=\"col-lg-2 col-md-4\">\n                      <h5 class=\"title\">Second column</h5>\n                      <ul>\n                          <li><a href=\"#!\">Link 1</a></li>\n                          <li><a href=\"#!\">Link 2</a></li>\n                          <li><a href=\"#!\">Link 3</a></li>\n                          <li><a href=\"#!\">Link 4</a></li>\n                      </ul>\n                  </div>\n                  <!--/.Third column-->\n\n                  <hr class=\"hidden-md-up\">\n\n                  <!--Fourth column-->\n                  <div class=\"col-lg-2 col-md-4\">\n                      <h5 class=\"title\">Third column</h5>\n                      <ul>\n                          <li><a href=\"#!\">Link 1</a></li>\n                          <li><a href=\"#!\">Link 2</a></li>\n                          <li><a href=\"#!\">Link 3</a></li>\n                          <li><a href=\"#!\">Link 4</a></li>\n                      </ul>\n                  </div>\n                  <!--/.Fourth column-->\n\n              </div>\n          </div>\n          <!--/.Footer Links-->\n\n          <hr>\n          <!--Call to action-->\n          <div class=\"call-to-action\">\n              <h4>Made with &hearts; at Ironhack by Sherwino</h4>\n              <ul>\n                  <li>\n                      <h5>Check me out on github</h5></li>\n                  <li><a target=\"_blank\" href=\"https://github.com/sherwino\" class=\"btn btn-danger\" rel=\"nofollow\">Sherwino</a></li>\n                  <li><a href=\"/\" class=\"btn btn-default\" rel=\"nofollow\">This is the way back home</a></li>\n              </ul>\n          </div>\n          <!--/.Call to action-->\n\n    </footer>\n\n\n  </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.title = 'microReviews';
        console.log(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* VERSION */].full);
        // I saw this example to pull data from a RESTful API easily
        this.http.get("https://jsonplaceholder.typicode.com/photos")
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.myApiData = res; });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/styles.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reviews_reviews_component__ = __webpack_require__("../../../../../src/app/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__articles_articles_component__ = __webpack_require__("../../../../../src/app/articles/articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__comments_comments_component__ = __webpack_require__("../../../../../src/app/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__submit_review_submit_review_component__ = __webpack_require__("../../../../../src/app/submit-review/submit-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
 //need to see what DomSanitizer does

 //a form handling module from angular core
 //a HTTP routing module



//a module that will let me select files and upload them
// ng2-file-upload is a third party module need to install to use
// import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
// to be able to import the modules into app.module all of the modules mention need to have an export












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__reviews_reviews_component__["a" /* ReviewsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__articles_articles_component__["a" /* ArticlesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__comments_comments_component__["a" /* CommentsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__submit_review_submit_review_component__["a" /* SubmitReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_completer__["a" /* Ng2CompleterModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MdSidenavModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__services_product_service__["a" /* ProductService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/articles/articles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/articles/articles.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  articles works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/articles/articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticlesComponent = (function () {
    function ArticlesComponent() {
    }
    ArticlesComponent.prototype.ngOnInit = function () {
    };
    return ArticlesComponent;
}());
ArticlesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-articles',
        template: __webpack_require__("../../../../../src/app/articles/articles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/articles/articles.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ArticlesComponent);

//# sourceMappingURL=articles.component.js.map

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  comments works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentsComponent = (function () {
    function CommentsComponent() {
    }
    CommentsComponent.prototype.ngOnInit = function () {
    };
    return CommentsComponent;
}());
CommentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-comments',
        template: __webpack_require__("../../../../../src/app/comments/comments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comments/comments.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CommentsComponent);

//# sourceMappingURL=comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"login\">Login</h1>\n<br>\n<br>\n<br>\n<p>And if you haven't done so alread....</p>\n<h1 id=\"signup\">Signup</h1>\n<br>\n<br>\n<br>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*md-grid-tile {\n  background: lightblue;\n}*/\n\n/*.mat-grid-list {\n  min-height: ;\n}*/\n\n.product-card {\n  height: 100%;\n  background: rgba(255, 255, 255, 0.80);\n  margin: 5px 10px;\n  padding: 0px;\n}\n\n.mat-card-image {\n  width: 100%;\n  margin: 0px -8px 16px 0px;\n}\n\n.mat-card-content {\n  padding: 20px;\n}\n\n.example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Browse for Products</h2>\n<br>\n\n<!-- If there as an error let the user know on the top of the page -->\n<div class=\" error\" *ngIf=\"errorMessage\"> {{ errorMessage }} </div>\n<div class = \"product-list\">\n  <md-grid-list cols=\"3\" rowHeight=\"2:3\">\n    <md-grid-tile *ngFor =\"let oneProduct of products\">\n      <md-card class=\"product-card\">\n        <md-card-header>\n          <div md-card-avatar class=\"brand-logo\"></div>\n          <md-card-title>\n            <h3> {{ oneProduct.prodName }} </h3>\n          </md-card-title>\n          <md-card-subtitle>\n            <h4><i> {{ oneProduct.prodBrand }} </i> </h4>\n            <h4><i> {{ oneProduct.prodModel }} </i> </h4>\n          </md-card-subtitle>\n        </md-card-header>\n        <img md-card-image [src]=\"oneProduct.prodImg\">\n        <md-card-content>\n          <h4><i> {{ oneProduct.prodUPC }} </i> </h4>\n          <h4><i> {{ oneProduct.prodMfg }} </i> </h4>\n          <h4><i> {{ oneProduct.prodParts }} </i> </h4>\n        </md-card-content>\n        <md-card-actions>\n          <button md-button>LIKE</button>\n          <button md-button>SHARE</button>\n        </md-card-actions>\n      </md-card>\n    </md-grid-tile>\n  </md-grid-list>\n\n<!-- List all of the products -->\n    <!-- Using the router, find the product by the id and lets see details page -->\n    <!-- <a [routerLink]='product, oneProduct._id'>Details</a> -->\n  </div>\n\n  <md-sidenav-container class=\"example-container\">\n    <md-sidenav #sidenav class=\"example-sidenav\">\n      Jolly good!\n    </md-sidenav>\n\n    <div class=\"example-sidenav-content\">\n      <button type=\"button\" md-button (click)=\"sidenav.open()\">\n        Open sidenav\n      </button>\n    </div>\n\n  </md-sidenav-container>\n\n<!-- If you want to limit the results on a ngFor loop -->\n<!-- <div *ngFor=\"let data of (myData ? myData.slice(0,10); []); let i = index\">\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = (function () {
    function ProductListComponent(myProductService) {
        this.myProductService = myProductService;
        this.products = [];
        this.errorMessage = ''; //not sure why I need this here yet
        this.title = "microReviews - Browse";
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myProductService.getList()
            .then(function (productList) {
            _this.products = productList;
        })
            .catch(function (err) {
            _this.errorMessage = 'There was an error with your request... try again later';
        });
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-list/product-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], ProductListComponent);

var _a;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  products works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductsComponent);

//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/reviews/reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reviews/reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  reviews works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/reviews/reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewsComponent = (function () {
    function ReviewsComponent() {
    }
    ReviewsComponent.prototype.ngOnInit = function () {
    };
    return ReviewsComponent;
}());
ReviewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-reviews',
        template: __webpack_require__("../../../../../src/app/reviews/reviews.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reviews/reviews.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReviewsComponent);

//# sourceMappingURL=reviews.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = (function () {
    function ProductService(myHttp) {
        this.myHttp = myHttp;
        // maybe I should have an env variable here instead of localhost
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
    }
    ProductService.prototype.getList = function () {
        return this.myHttp.get(this.BASE_URL + "/api/products")
            .toPromise()
            .then(function (apiResponse) { return apiResponse.json(); });
    };
    //send a get request to the express api
    // localhost:3000/api/products/product#1
    // using the promise angular will wait for the response
    // and then store the response in the json to be utilized by angular
    ProductService.prototype.get = function (id) {
        return this.myHttp.get(this.BASE_URL + "/api/products/" + id)
            .toPromise()
            .then(function (apiResponse) { return apiResponse.json(); });
    };
    // this when you want to send something to the middleware
    // like req.body
    // so you send a post request to the express api with the dataToSend
    // and express receives it to do whatever with this information
    // in this case we want express to grab the data and post it to mongoDB
    ProductService.prototype.createNew = function (dataToSend) {
        return this.myHttp.post(this.BASE_URL + "/api/products", dataToSend)
            .toPromise()
            .then(function (apiResponse) { return apiResponse.json(); });
    };
    //very similar to the get request but now you are asking the express api to delete
    // then you want to get the results of that request in a json
    ProductService.prototype.delete = function (id) {
        return this.myHttp.delete(this.BASE_URL + "/api/products/" + id)
            .toPromise()
            .then(function (apiResponse) { return apiResponse.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/styles.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-bg-img{background:url(" + __webpack_require__("../../../../../src/assets/caps.jpg") + ")}.view:not(.hm-zoom){overflow:visible}.container .row{margin-top:2.5rem}.simple-blog-listing .single-post{margin-bottom:5rem}.simple-blog-listing .single-post.simple-post-text{margin-bottom:0;border-bottom:1px solid #e0e0e0}.simple-blog-listing .single-post.simple-post-text .post-pictures img{margin-bottom:1.5rem}.simple-blog-listing .single-post h5{text-align:center;margin-bottom:1.5rem}.simple-blog-listing .single-post h2{text-align:center;margin-top:2rem;margin-bottom:1.2rem}.simple-blog-listing .single-post .post-data h5{margin-bottom:2rem;font-weight:400}.simple-blog-listing .single-post .post-data h5 i{padding-left:1rem}.archive ul li{padding-top:0.8rem;border-top:1px solid #eceeef;padding-bottom:0.3rem}.archive ul li:first-of-type{border-top:none}.simple-author-widget .author-photo{margin-bottom:1.8rem}.simple-author-widget .about-author h4{text-align:center;margin-bottom:1.5rem}.simple-author-widget .about-author p{text-align:justify}.simple-author-page h1{margin-bottom:2rem}.simple-author-page p{text-align:center}.simple-author-page .view img{margin-top:2rem}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/submit-review/submit-review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Submit Review Form*/\n.review-form {\n  margin: 0 25%;\n  max-width: 600px;\n  background: rgba(255, 255, 255, 0.80);\n  padding: 10px 45px;\n}\n\nng2-completer {\n  border: 0px;\n  box-shadow: none;\n  /*background: #fff;*/\n  border-radius: 2px;\n  padding: 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/submit-review/submit-review.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Submit a New Review</h2>\n\n\n<a [routerLink]=\"['/browse']\"> Back to list </a>\n\n<div class=\"review-form\">\n  <form (ngSubmit)=\"newProductform()\" #myForm=\"ngForm\">\n    <div class=\"form-group\">\n      <p>\n        <label for=\"brand\"> Brand: <small><i>Apple</i></small></label>\n        <input class=\"form-control\" id=\"brand\" type=\"text\" name=\"brand\" [(ngModel)]=\"newProduct.brand\" required />\n      </p>\n      <p>\n        <label for=\"modelName\"> Model Name: <small><i>iPhone 6s Plus</i></small></label>\n        <input class=\"form-control\" id=\"modelName\" type=\"text\" name=\"modelName\" [(ngModel)]=\"newProduct.modelName\" required />\n      </p>\n      <p>\n        <label for=\"modelNum\"> Model Number: <small><i>A1633</i></small></label>\n        <input class=\"form-control\" id=\"modelNum\" type=\"text\" name=\"modelNum\" [(ngModel)]=\"newProduct.modelNum\">\n      </p>\n      <p>\n        <label for=\"prodUPC\"> Product's UPC: <small><i>700362685371</i></small></label>\n        <input class=\"form-control\" id=\"prodUPC\" type=\"text\" name=\"prodUPC\" [(ngModel)]=\"newProduct.prodUPC\">\n      </p>\n      <p>\n        <label for=\"mfgBy\"> Manufactured By: <small><i>Foxcomm, Samsung, Carl Zeiss, Dolby Labs</i></small></label>\n        <input class=\"form-control\" id=\"mfgBy\" type=\"text\" name=\"mfgBy\" [(ngModel)]=\"newProduct.mfgBy\">\n      </p>\n      <p>\n        <label for=\"prodParts\"> Product Components: <small><i>Camera, Microphone, Speaker, Compass</i></small></label>\n        <input class=\"form-control\" id=\"prodParts\" type=\"text\" name=\"prodParts\" [(ngModel)]=\"newProduct.prodParts\">\n      </p>\n    </div>\n    <div class=\"form-group\">\n      <p>\n        <label for=\"prodImg\"> Product Image: <small><i>Upload an image of the product</i></small></label>\n        <input class=\"form-control-file\" id=\"prodImg\" type=\"text\" name=\"prodImg\" [(ngModel)]=\"newProduct.prodImg\">\n      </p>\n    </div>\n    <button class=\"btn btn-primary\">Submit </button>\n  </form>\n</div>\n\n<a [routerLink]=\"['/browse']\"> Back to list </a>\n\n<p> {{ feedback }} </p>\n\n\n<!-- <ng2-completer [(ngModel)]=\"searchStr\" [datasource]=\"captains\" [minSearchLength]=\"0\"\nclass=\"form-control\" type=\"text\" name=\"brand\" required ></ng2-completer> -->\n"

/***/ }),

/***/ "../../../../../src/app/submit-review/submit-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubmitReviewComponent = (function () {
    function SubmitReviewComponent(
        // creating a routing instance in this view
        myRoute, myProductService, myRouter) {
        this.myRoute = myRoute;
        this.myProductService = myProductService;
        this.myRouter = myRouter;
        //this object is going to hold the key value pairs for the Reviews
        this.newProduct = {};
    } // <<<<----This goes in there this.dataService = completerService.local(this.searchData, 'color', 'color')
    SubmitReviewComponent.prototype.ngOnInit = function () {
        // similar to document.ready
        // listen to all of the paramaters passed through the active route
        // return the parameters as an object
        // this.myRoute.params.subscribe((params) => this.newProduct = {} );
    };
    // when you submit the form from the dom it calls this function which will capture all of the values
    SubmitReviewComponent.prototype.newProductform = function () {
        var _this = this;
        //lets see what we are receiving from the form
        this.myProductService.createNew(this.newProduct).then(function (dataFromApi) {
            console.log(_this.newProduct);
            _this.myRouter.navigate(['/browse']);
        })
            .catch(function (errResponse) {
            var apiInfo = errResponse.json();
            _this.errorMessage = apiInfo.message;
        });
    };
    return SubmitReviewComponent;
}());
SubmitReviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-submit-review',
        template: __webpack_require__("../../../../../src/app/submit-review/submit-review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/submit-review/submit-review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], SubmitReviewComponent);

var _a, _b, _c;
//# sourceMappingURL=submit-review.component.js.map

/***/ }),

/***/ "../../../../../src/assets/caps.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "caps.7632d285d546445d49a8.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// DEVELOPMENT vars
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map