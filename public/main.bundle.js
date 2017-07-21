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
        path: 'login, logout, signup',
        component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]
    }
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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!!\n  </h1>\n  <img width=\"300\" src=\"../assets/microReview-Logo.png\" />\n</div>\n<h2>Things to note: </h2>\n<ul>\n  <li>\n    <h2>This is A Work in Progress</h2>\n  </li>\n  <li>\n    <h2>Only 1% Complete <progress value=\"1\" max=\"100\">1% Complete</progress></h2>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'microReviews';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reviews_reviews_component__ = __webpack_require__("../../../../../src/app/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__articles_articles_component__ = __webpack_require__("../../../../../src/app/articles/articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__comments_comments_component__ = __webpack_require__("../../../../../src/app/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__products_service__ = __webpack_require__("../../../../../src/app/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__submit_review_submit_review_component__ = __webpack_require__("../../../../../src/app/submit-review/submit-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__reviews_reviews_component__["a" /* ReviewsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__articles_articles_component__["a" /* ArticlesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__comments_comments_component__["a" /* CommentsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__submit_review_submit_review_component__["a" /* SubmitReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__products_service__["a" /* ProductService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
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

module.exports = "<p>\n  login works!\n</p>\n"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Search Products</h2>\n\n<!-- If there as an error let the user know on the top of the page -->\n<div class=\" error\" *ngIf=\"errorMessage\"> {{ errorMessage }} </div>\n\n<!-- List all of the products -->\n<div class = \"product-list\">\n  <div *ngFor =\"let oneProduct of products\">\n    <img [src]=\"oneProduct.image\">\n    <h3> {{ oneProduct.name }} </h3>\n    <h4><i> {{ oneProduct.brand }} </i> </h4>\n\n    <!-- Using the router, find the product by the id and lets see details page -->\n    <!-- <a [routerLink]='product, oneProduct._id'>Details</a> -->\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("../../../../../src/app/products.service.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-list/product-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductService */]) === "function" && _a || Object])
], ProductListComponent);

var _a;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
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
        this.BASE_URL = 'http://localhost:3000';
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
//# sourceMappingURL=products.service.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-reviews',
        template: __webpack_require__("../../../../../src/app/reviews/reviews.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reviews/reviews.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReviewsComponent);

//# sourceMappingURL=reviews.component.js.map

/***/ }),

/***/ "../../../../../src/app/submit-review/submit-review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/submit-review/submit-review.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Submit a New Review</h2>\n<a [routerLink]=\"['']\"> Back to list </a>\n\n<form (ngSubmit)=\"newReviewObject(datafromform)\" #myForm=\"ngForm\">\n  <p>\n    Brand: <small><i>Apple</i></small>\n    <input type=\"text\" name=\"brand\" [(ngModel)]=\"brand\" required />\n  </p>\n  <p>\n    Model Name: <small><i>iPhone 6s Plus</i></small>\n    <input type=\"text\" name=\"modelName\" [(ngModel)]=\"modelName\" required />\n  </p>\n  <p>\n    Model Number: <small><i>A1633</i></small>\n    <input type=\"text\" name=\"modelNum\" [(ngModel)]=\"modelNum\" required />\n  </p>\n  <p>\n    Product's UPC: <small><i>700362685371</i></small>\n    <input type=\"text\" name=\"prodUPC\" [(ngModel)]=\"prodUPC\" required />\n  </p>\n  <p>\n    Manufactured By: <small><i>Foxcomm, Samsung, Carl Zeiss, Dolby Labs</i></small>\n    <input type=\"text\" name=\"mfgBy\" [(ngModel)]=\"mfgBy\" required />\n  </p>\n  <p>\n    Product Components: <small><i>Camera, Microphone, Speaker, Compass</i></small>\n    <input type=\"text\" name=\"prodParts\" [(ngModel)]=\"prodParts\" required />\n  </p>\n  <p>\n    Product Image: <small><i>Upload an image of the product</i></small>\n    <input type=\"text\" name=\"prodImg\" [(ngModel)]=\"prodImg\" required />\n  </p>\n  <button (click)=\"submit()\"> submit </button>\n</form>\n\n<a [routerLink]=\"['']\"> Back to list </a>\n\n<p> {{ feedback }} </p>\n"

/***/ }),

/***/ "../../../../../src/app/submit-review/submit-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_service__ = __webpack_require__("../../../../../src/app/products.service.ts");
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
    }
    ;
    SubmitReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // similar to document.ready
        // listen to all of the paramaters passed through the active route
        // return the parameters as an object
        this.myRoute.params.subscribe(function (params) { return _this.newReview = {}; });
    };
    // when you submit the form from the dom it calls this function which will capture all of the values
    SubmitReviewComponent.prototype.newReviewObject = function (datafromform) {
        //lets see what we are receiving from the form
        console.log(datafromform);
        // all of the variables that we created interface of above will grab values from form and store them
        this.brand = datafromform.form.controls.brand._value;
        this.modelName = datafromform.form.controls.modelName._value;
        this.modelNum = datafromform.form.controls.modelNum._value;
        this.prodUPC = datafromform.form.controls.prodUPC._value;
        this.mfgBy = datafromform.form.controls.mfgBy._value.split(",");
        // this.mfgStart =     datafromform.form.controls.mfgStart._value;
        // this.mfgEnd =       datafromform.form.controls.mfgEnd._value;
        this.prodParts = datafromform.form.controls.prodParts._value.split(",");
        this.prodImg = datafromform.form.controls.prodImg._value;
        // then lets call the function that is going to submit all of this info to the backend express app
        // note the scope
        this.reviewtoApi();
    };
    // since this object is going directly to the backend the key ie brand: needs to match the mongo one
    SubmitReviewComponent.prototype.reviewtoApi = function () {
        var _this = this;
        this.newReview = {
            brand: this.brand,
            model: this.modelName,
            modelNum: this.modelNum,
            productUPC: this.prodUPC,
            manufacturedBy: this.mfgBy,
            // manufacturingStart:  this.mfgStart,
            // manufacturingStop:   this.mfgEnd,
            productParts: this.prodParts,
            productImg: this.prodImg
        };
        // product service create this new object, and then empty the values for the next form submission
        this.myProductService.createNew(this.newReview).then(function () {
            _this.brand = "";
            _this.modelName = "";
            _this.prodUPC = "";
            _this.mfgBy = [];
            // this.mfgStart = "";
            // this.mfgEnd = "";
            _this.prodParts = [];
            _this.prodImg = "";
            _this.newReview = {};
        });
    };
    return SubmitReviewComponent;
}());
SubmitReviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-submit-review',
        template: __webpack_require__("../../../../../src/app/submit-review/submit-review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/submit-review/submit-review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__products_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__products_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], SubmitReviewComponent);

var _a, _b, _c;
//# sourceMappingURL=submit-review.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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