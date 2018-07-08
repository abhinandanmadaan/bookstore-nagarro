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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-listing/add-listing.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-listing/add-listing.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\r\n  width:50%;\r\n  display: block;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  margin-top: 50px;\r\n\r\n}\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/add-listing/add-listing.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-listing/add-listing.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\n\n\n    <form (submit)=\"onAdd(addForm)\" #addForm=\"ngForm\">\n\n        <mat-form-field>\n            <input matInput name=\"seller\" ngModel type=\"text\" placeholder=\"Your Name\" #sellerInput=\"ngModel\" required>\n            <mat-error *ngIf=\"sellerInput\">please enter a valid name</mat-error>\n          </mat-form-field>\n\n\n      <mat-form-field>\n        <input matInput name=\"name\" ngModel type=\"text\" placeholder=\"Book-Name\" #nameInput=\"ngModel\" required>\n        <mat-error *ngIf=\"nameInput\">please enter a valid book name</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput name=\"author\" ngModel type=\"text\" placeholder=\"Author-Name\" #authorInput=\"ngModel\" required>\n        <mat-error *ngIf=\"authorInput.invalid\">please enter a valid author name</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n          <input matInput name=\"price\" ngModel type=\"number\" placeholder=\"price\" #priceInput=\"ngModel\" required>\n          <mat-error *ngIf=\"priceInput.invalid\">please enter a valid price</mat-error>\n        </mat-form-field>\n\n      <mat-form-field>\n          <input matInput name=\"imageUrl\" ngModel type=\"text\" placeholder=\"imageUrl\" >\n\n        </mat-form-field>\n\n      <mat-form-field>\n          <mat-select  [(ngModel)]=\"selectedCondition\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Select Book Condition\" required>\n\n            <mat-option value=\"New\">New</mat-option>\n            <mat-option value=\"Almost New\">Almost New</mat-option>\n            <mat-option value=\"Slight Damage\">Slight Damage</mat-option>\n            <mat-option value=\"Worn\">Worn</mat-option>\n\n          </mat-select>\n\n        </mat-form-field>\n\n\n\n\n\n\n      <button mat-raised-button color=\"accent\" type=\"submit\">Add Listing</button>\n    </form>\n  </mat-card>\n\n"

/***/ }),

/***/ "./src/app/add-listing/add-listing.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-listing/add-listing.component.ts ***!
  \******************************************************/
/*! exports provided: AddListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListingComponent", function() { return AddListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddListingComponent = /** @class */ (function () {
    function AddListingComponent(http) {
        this.http = http;
        // tslint:disable-next-line:no-inferrable-types
        this.selectedCondition = '';
    }
    AddListingComponent.prototype.ngOnInit = function () {
    };
    AddListingComponent.prototype.onAdd = function (form) {
        if (form.invalid) {
            return;
        }
        console.log(form.value.condition);
        // tslint:disable-next-line:max-line-length
        this.http.post('api/add', { seller: form.value.seller, name: form.value.name, author: form.value.author, price: form.value.price, img: form.value.imageUrl, condition: this.selectedCondition })
            .subscribe(function (response) {
            console.log(response);
            if (response === true) 
            // tslint:disable-next-line:one-line
            {
                alert('your listing has been  successfully added');
            }
            else {
                alert('you have already added this listing');
            }
        });
    };
    AddListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-listing',
            template: __webpack_require__(/*! ./add-listing.component.html */ "./src/app/add-listing/add-listing.component.html"),
            styles: [__webpack_require__(/*! ./add-listing.component.css */ "./src/app/add-listing/add-listing.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AddListingComponent);
    return AddListingComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet> </router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _listings_listings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listings/listings.component */ "./src/app/listings/listings.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-listing/add-listing.component */ "./src/app/add-listing/add-listing.component.ts");
/* harmony import */ var _single_listing_single_listing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./single-listing/single-listing.component */ "./src/app/single-listing/single-listing.component.ts");
/* harmony import */ var _listings_filter_search_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./listings/filter-search.pipe */ "./src/app/listings/filter-search.pipe.ts");
/* harmony import */ var _listings_filter_condition_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./listings/filter-condition.pipe */ "./src/app/listings/filter-condition.pipe.ts");
/* harmony import */ var _listings_filter_price_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./listings/filter-price.pipe */ "./src/app/listings/filter-price.pipe.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: '',
        component: _listings_listings_component__WEBPACK_IMPORTED_MODULE_9__["ListingsComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"]
    },
    {
        path: 'add',
        component: _add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_12__["AddListingComponent"]
    },
    {
        path: 'wishlist',
        component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_17__["WishlistComponent"]
    },
    {
        path: ':id',
        component: _single_listing_single_listing_component__WEBPACK_IMPORTED_MODULE_13__["SingleListingComponent"]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _listings_listings_component__WEBPACK_IMPORTED_MODULE_9__["ListingsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_12__["AddListingComponent"],
                _single_listing_single_listing_component__WEBPACK_IMPORTED_MODULE_13__["SingleListingComponent"],
                _listings_filter_search_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterSearchPipe"],
                _listings_filter_condition_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterConditionPipe"],
                _listings_filter_price_pipe__WEBPACK_IMPORTED_MODULE_16__["FilterPricePipe"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_17__["WishlistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\">Welcome {{userName}}</a>\n\n  <form class=\"form-inline my-2 my-lg-0\">\n\n    <div *ngIf=\"auth_status;else guest \">\n      <a href=\"#\" class=\"btn btn-outline-success\" tabindex=\"-1\" role=\"button\" routerLink=\"/add\" style=\"float:right\">Add Your Own Listing</a>\n       <a href=\"#\" class=\"btn btn-outline-danger\" tabindex=\"-1\" role=\"button\" routerLink=\"/wishlist\" style=\"float:right\">Wishlist</a>\n     <!--  <a href=\"#\" class=\"btn btn-outline-success\" tabindex=\"-1\" role=\"button\" style=\"float:right\" style=\"float:right\">Logout</a> -->\n      <!-- iska button bna -->\n      <!-- <button class = \"btn btn-success\" (click)=\"onWish()\"style=\"float:right\" >Wishlist</button> -->\n      <button class = \"btn btn-success\" (click)=\"onLogout()\"style=\"float:right\" >Logout</button>\n    </div>\n\n    <ng-template #guest>\n      <div>\n        <a href=\"#\" class=\"btn btn-outline-primary\" tabindex=\"-1\" role=\"button\" routerLink=\"/login\">Login</a>\n        <a href=\"#\" class=\"btn btn-outline-danger\" tabindex=\"-1\" role=\"button\" routerLink=\"/signup\">Signup</a>\n\n      </div>\n    </ng-template>\n\n  </form>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(http, route) {
        this.http = http;
        this.route = route;
        // tslint:disable-next-line:no-inferrable-types
        this.auth_status = false;
        // tslint:disable-next-line:no-inferrable-types
        this.userName = 'Guest';
        // tslint:disable-next-line:no-inferrable-types
        this.userId = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!!localStorage.getItem('token')) {
            this.http.post('api/check-auth', { token: (localStorage.getItem('token')) })
                .subscribe(function (response) {
                if (response !== false) {
                    _this.auth_status = true;
                    _this.userName = response.userName;
                    _this.userId = response.userId;
                    localStorage.setItem('userId', JSON.stringify(_this.userId));
                }
            });
        }
    };
    HeaderComponent.prototype.onLogout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        this.route.navigate(['/login']);
        this.route.navigate(['']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/listings/filter-condition.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/listings/filter-condition.pipe.ts ***!
  \***************************************************/
/*! exports provided: FilterConditionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterConditionPipe", function() { return FilterConditionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterConditionPipe = /** @class */ (function () {
    function FilterConditionPipe() {
    }
    FilterConditionPipe.prototype.transform = function (value, filter_condition) {
        if (filter_condition === 'No Filter' || value.length === 0) {
            return value;
        }
        else {
            var resultArray = [];
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var item = value_1[_i];
                if (item.condition === filter_condition) {
                    resultArray.push(item);
                }
            }
            return resultArray;
        }
    };
    FilterConditionPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterCondition'
        })
    ], FilterConditionPipe);
    return FilterConditionPipe;
}());



/***/ }),

/***/ "./src/app/listings/filter-price.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/listings/filter-price.pipe.ts ***!
  \***********************************************/
/*! exports provided: FilterPricePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPricePipe", function() { return FilterPricePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPricePipe = /** @class */ (function () {
    function FilterPricePipe() {
    }
    FilterPricePipe.prototype.transform = function (value, filter_price) {
        if (filter_price === 'No Filter' || value.length === 0) {
            return value;
        }
        else {
            var resultArray = [];
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var item = value_1[_i];
                if (filter_price === 'less than 250' && item.price < 250) {
                    resultArray.push(item);
                }
                else if (filter_price === '250-500' && (item.price >= 250 && item.price <= 500)) {
                    resultArray.push(item);
                }
                else if (filter_price === '500-1000' && (item.price >= 500 && item.price <= 1000)) {
                    resultArray.push(item);
                }
                else if (filter_price === 'greater than 1000' && item.price > 1000) {
                    resultArray.push(item);
                }
            }
            return resultArray;
        }
    };
    FilterPricePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterPrice'
        })
    ], FilterPricePipe);
    return FilterPricePipe;
}());



/***/ }),

/***/ "./src/app/listings/filter-search.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/listings/filter-search.pipe.ts ***!
  \************************************************/
/*! exports provided: FilterSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterSearchPipe", function() { return FilterSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterSearchPipe = /** @class */ (function () {
    function FilterSearchPipe() {
    }
    FilterSearchPipe.prototype.transform = function (value, filterString) {
        if (filterString === '' || value.length === 0) {
            return value;
        }
        console.log(value.length);
        filterString = filterString.toLowerCase();
        return value.filter(function (it) {
            var item_name = it.name.toLowerCase().includes(filterString);
            var item_author = it.author.toLowerCase().includes(filterString);
            if (item_name) {
                return item_name;
            }
            else if (item_author) {
                return item_author;
            }
        });
    };
    FilterSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterSearch'
        })
    ], FilterSearchPipe);
    return FilterSearchPipe;
}());



/***/ }),

/***/ "./src/app/listings/listings.component.css":
/*!*************************************************!*\
  !*** ./src/app/listings/listings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-card{\r\n  width:50%;\r\n  display: block;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  margin-top: 50px;\r\n\r\n}\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/listings/listings.component.html":
/*!**************************************************!*\
  !*** ./src/app/listings/listings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header> </app-header>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" >\n\n\n  <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" >\n\n        <div></div>\n\n      <mat-form-field>\n          <mat-select  [(ngModel)]=\"selectedCondition\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Select Book Condition\" >\n\n              <mat-option value=\"New\">New</mat-option >\n              <mat-option value=\"Almost New\">Almost New</mat-option>\n              <mat-option value=\"Slight Damage\">Slight Damage</mat-option>\n              <mat-option value=\"Worn\">Worn</mat-option>\n              <mat-option value=\"No Filter\">No Filter</mat-option>\n\n            </mat-select>\n\n      </mat-form-field>\n\n\n        <mat-form-field>\n            <mat-select [(ngModel)]=\"selectedPrice\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Select Price Range\">\n\n                <mat-option value= \"less than 250\">less than 250</mat-option>\n                <mat-option value=\"250-500\">250-500</mat-option>\n                <mat-option value=\"500-1000\">500-1000</mat-option>\n                <mat-option value=\"greater than 1000\">greater than 1000</mat-option>\n                <mat-option value=\"No Filter\">No Filter</mat-option>\n\n              </mat-select>\n        </mat-form-field>\n\n    </form>\n\n  </nav>\n\n                     <hr><hr>\n<!--          HEADER OVER                                                -->\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n\n      <div class=\"card-columns\">\n\n       <div class=\"card border-dark mb-3\" style=\"max-width: 18rem;\" *ngFor = \"let book of books | filterSearch : searchText  | filterCondition : selectedCondition | filterPrice : selectedPrice    \">\n\n\n          <div class=\"card-body\">\n          <h5 class=\"card-title\">{{book.name}} </h5>\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{book.author}} </h6>\n          <img class=\"card-img-top\" [src]=\"book.img\" alt=\"Card image cap\" height=\"250\">\n             <hr>\n          <p class=\"card-text\">Rs. {{book.price}} </p>\n          <p class=\"card-text\">condition: {{book.condition}}</p>\n           <button class = \"btn btn-success\" (click)=\"listing_item(book.id)\">See More</button>\n        </div>\n      </div>\n       </div>\n\n\n\n\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/listings/listings.component.ts":
/*!************************************************!*\
  !*** ./src/app/listings/listings.component.ts ***!
  \************************************************/
/*! exports provided: ListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsComponent", function() { return ListingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListingsComponent = /** @class */ (function () {
    function ListingsComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        // tslint:disable-next-line:whitespace
        this.searchText = '';
        this.selectedCondition = 'No Filter';
        this.selectedPrice = 'No Filter';
        this.books = [];
    }
    ListingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/listings')
            .subscribe(function (data) { _this.books = data; });
    };
    ListingsComponent.prototype.listing_item = function (id) {
        this.route.navigate([id], { relativeTo: this.router });
        console.log(id);
    };
    ListingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__(/*! ./listings.component.html */ "./src/app/listings/listings.component.html"),
            styles: [__webpack_require__(/*! ./listings.component.css */ "./src/app/listings/listings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListingsComponent);
    return ListingsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-card{\r\n  width:50%;\r\n  display: block;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    margin-top: 50px;\r\n\r\n}\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\n  <form (submit)=\"onlogin(loginform)\" #loginform=\"ngForm\">\n\n    <mat-form-field>\n      <input matInput name=\"email\" ngModel type=\"email\" placeholder=\"E-Mail\" #emailInput=\"ngModel\" required email>\n      <mat-error *ngIf=\"emailInput.invalid\"> please enter a valid email </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input type=\"password\" name=\"password\" ngModel matInput placeholder=\"Password\" #passwordInput=\"ngModel\" required>\n      <mat-error *ngIf=\"passwordInput.invalid\">please enter a valid password</mat-error>\n    </mat-form-field>\n    <button mat-raised-button color=\"accent\" type=\"submit\">Login</button>\n  </form>\n\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, route) {
        this.http = http;
        this.route = route;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onlogin = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        // tslint:disable-next-line:max-line-length
        this.http.post('api/login', { email: form.value.email, password: form.value.password })
            .subscribe(function (response) {
            console.log(response.userId);
            console.log(response.userName);
            console.log(response.token);
            // tslint:disable-next-line:max-line-length
            if (response === false) {
                alert('incorrect username or password or both');
            }
            else {
                localStorage.setItem('token', response.token);
                alert('you are successfully logged in ');
                _this.route.navigate(['']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\r\n  width:50%;\r\n  display: block;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    margin-top: 50px;\r\n\r\n}\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\n  <form (submit)=\"onSignup(signupForm)\" #signupForm=\"ngForm\">\n\n    <mat-form-field>\n      <input matInput name=\"name\" ngModel type=\"text\" placeholder=\"Name\" #nameInput=\"ngModel\" required>\n      <mat-error *ngIf=\"nameInput\">please enter valid name</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput name=\"college\" ngModel type=\"text\" placeholder=\"College\" #collegeInput=\"ngModel\" required>\n      <mat-error *ngIf=\"collegeInput.invalid\">please enter valid college name</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput name=\"address\" ngModel type=\"text\" placeholder=\"Address\" #addressInput=\"ngModel\" required>\n      <mat-error *ngIf=\"addressInput.invalid\">please enter valid address</mat-error>\n    </mat-form-field>\n\n\n    <mat-form-field>\n      <input matInput name=\"phone\" ngModel type=\"text\" pattern=\"[0-9]*\" minlength=\"10\" maxlength=\"10\" placeholder=\"Phone-Number\"\n        #phnumInput=\"ngModel\" required>\n      <span matPrefix>+91 &nbsp;</span>\n      <mat-error *ngIf=\"phnumInput.invalid\">please enter valid Phone number</mat-error>\n    </mat-form-field>\n\n\n    <mat-form-field>\n      <input matInput name=\"email\" ngModel type=\"email\" placeholder=\"E-Mail\" #emailInput=\"ngModel\" required email>\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n\n      <input type=\"password\" name=\"password\" ngModel matInput placeholder=\"Password\" #passwordInput=\"ngModel\" required>\n      <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password.</mat-error>\n    </mat-form-field>\n    <button mat-raised-button color=\"accent\" type=\"submit\">Signup</button>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(http, route) {
        this.http = http;
        this.route = route;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        // tslint:disable-next-line:max-line-length
        this.http.post('api/signup', { name: form.value.name, email: form.value.email, address: form.value.address, phone: form.value.phone, password: form.value.password, college: form.value.college })
            .subscribe(function (response) {
            // tslint:disable-next-line:max-line-length
            if (response === false) {
                alert('A user with the entered email already exists');
            }
            else {
                localStorage.setItem('token', (response.token));
                alert('you are successfully registered');
                _this.route.navigate(['']);
            }
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/single-listing/single-listing.component.css":
/*!*************************************************************!*\
  !*** ./src/app/single-listing/single-listing.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/single-listing/single-listing.component.html":
/*!**************************************************************!*\
  !*** ./src/app/single-listing/single-listing.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header> </app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n\n\n\n       <div class=\"card-columns\">\n       <div class=\"card border-dark mb-3\" style=\"max-width: 18rem;\">\n\n          <div class=\"card-body\">\n          <h5 class=\"card-title\">{{books.name}} </h5>\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{books.author}} </h6>\n          <img class=\"card-img-top\" [src]=\"books.img\" alt=\"Card image cap\" height=\"250\">\n             <hr>\n          <p class=\"card-text\">Rs. {{books.price}} </p>\n          <p class=\"card-text\">condition: {{books.condition}}</p>\n          <p class=\"card-text\">seller: {{books.seller}}</p>\n\n           <button class = \"btn btn-success\" (click)=\"add_wish(books.id)\">Add to Wishlist</button>\n        </div>\n      </div>\n      </div>\n\n\n\n\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/single-listing/single-listing.component.ts":
/*!************************************************************!*\
  !*** ./src/app/single-listing/single-listing.component.ts ***!
  \************************************************************/
/*! exports provided: SingleListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleListingComponent", function() { return SingleListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleListingComponent = /** @class */ (function () {
    function SingleListingComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    SingleListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.paramMap.subscribe(function (params) {
            _this.http.post('api/list-item', { id: +(params.get('id')) })
                .subscribe(function (response) {
                _this.books = response;
            });
        });
    };
    SingleListingComponent.prototype.add_wish = function (bookId) {
        var _this = this;
        // phele authentication lga
        this.http.post('api/check-auth', { token: (localStorage.getItem('token')) })
            .subscribe(function (response) {
            if (response === false) {
                alert('you need to login first');
            }
            else {
                /* const userId = localStorage.getItem(JSON.parse('userId')); */
                var userId = response.userId;
                // tslint:disable-next-line:semicolon
                _this.http.post('api/add_to_wishlist', { userId: userId, bookId: bookId })
                    .subscribe(function (res) {
                    if (res) {
                        alert('added to wishlist');
                    }
                    else {
                        alert('already added to wishlist');
                    }
                });
            }
        });
    };
    SingleListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-listing',
            template: __webpack_require__(/*! ./single-listing.component.html */ "./src/app/single-listing/single-listing.component.html"),
            styles: [__webpack_require__(/*! ./single-listing.component.css */ "./src/app/single-listing/single-listing.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SingleListingComponent);
    return SingleListingComponent;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header> </app-header>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n\n      <div class=\"card-columns\">\n       <div class=\"card border-dark mb-3\" style=\"max-width: 18rem;\" *ngFor = \"let book of books \">\n\n          <div class=\"card-body\"  >\n          <h5 class=\"card-title\">{{book.name}} </h5>\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{book.author}} </h6>\n          <img class=\"card-img-top\" [src]=\"book.img\" alt=\"Card image cap\" height=\"250\">\n             <hr>\n          <p class=\"card-text\">Rs. {{book.price}} </p>\n          <p class=\"card-text\">condition: {{book.condition}}</p>\n          <p class=\"card-text\">seller: {{book.seller}}</p>\n\n        </div>\n      </div>\n       </div>\n\n\n\n\n\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(http) {
        this.http = http;
        this.books = [];
        // tslint:disable-next-line:no-inferrable-types
        this.userId = 0;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        this.initialise();
    };
    WishlistComponent.prototype.initialise = function () {
        var _this = this;
        this.http.post('api/check-auth', { token: (localStorage.getItem('token')) })
            .subscribe(function (response) {
            console.log(response.userId);
            _this.userId = response.userId;
            _this.http.post('api/wishlist', { userId: _this.userId })
                .subscribe(function (data) {
                console.log(data);
                _this.books = data;
            });
        });
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WishlistComponent);
    return WishlistComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\USER\Desktop\final project\my-website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map