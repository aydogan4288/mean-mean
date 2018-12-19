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
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _single_single_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single/single.component */ "./src/app/single/single.component.ts");







var routes = [
    { path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: 'newanimal', component: _new_new_component__WEBPACK_IMPORTED_MODULE_4__["NewComponent"] },
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] },
    { path: 'animal/:id', component: _single_single_component__WEBPACK_IMPORTED_MODULE_6__["SingleComponent"] }
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

module.exports = "* {\n    margin: 0 auto;\n    padding: 10px;\n}\ndiv {\n    width: 970px;\n}\n#container {\n    /* background-color: gold; */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztDQUNqQjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUVEO0lBQ0ksNkJBQTZCO0NBQ2hDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuZGl2IHtcbiAgICB3aWR0aDogOTcwcHg7XG59XG5cbiNjb250YWluZXIge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7ICovXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n\n<!-- Optional theme -->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">\n\n<hr>\n  <nav class=\"navbar navbar-dark bg-dark\">\n    <a [routerLink]=\"['/']\" class=\"navbar-brand\">Pet Shelter</a>\n      <a [routerLink]=\"['/newanimal']\"><button class=\"btn btn-success\" >New Pet</button></a>\n  </nav>\n  <hr>\n\n<div id=\"container\">\n\n\n\n    <router-outlet></router-outlet>\n\n</div>\n<br>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _single_single_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./single/single.component */ "./src/app/single/single.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pet.service */ "./src/app/pet.service.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
                _single_single_component__WEBPACK_IMPORTED_MODULE_8__["SingleComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_9__["NewComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [_pet_service__WEBPACK_IMPORTED_MODULE_11__["PetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"animal\">\n  <form  (submit)=\"update(animal._id)\">\n    <input type=\"text\" name=\"animal.name\" [(ngModel)]=\"animal.name\" placeholder=\"name\">\n    <p *ngIf=\"errors.name\"> {{errors.name.message}}</p>\n    <br>\n    <input type=\"text\" name=\"animal.type\" [(ngModel)]=\"animal.type\" placeholder=\"type\">\n    <p *ngIf=\"errors.type\"> {{errors.type.message}}</p>\n    <br>\n    <textarea name=\"animal.description\" [(ngModel)]=\"animal.description\" rows=5 cols=50></textarea>\n    <p *ngIf=\"errors.description\"> {{errors.description.message}}</p>\n    <br>\n    <input type=\"text\" name=\"animal.skillOne\" [(ngModel)]=\"animal.skillOne\" placeholder=\"skillOne\">\n    <p *ngIf=\"errors.skillOne\"> {{errors.skillOne.message}}</p>\n    <br>\n    <input type=\"text\" name=\"animal.skillTwo\" [(ngModel)]=\"animal.skillTwo\" placeholder=\"skillTwo\">\n    <p *ngIf=\"errors.skillTwo\"> {{errors.skillTwo.message}}</p>\n    <br>\n    <input type=\"text\" name=\"animal.skillThree\" [(ngModel)]=\"animal.skillThree\" placeholder=\"skillThree\">\n    <p *ngIf=\"errors.skillThree\"> {{errors.skillThree.message}}</p>\n    <br>\n    <input type=\"submit\" value=\"Edit Pet\"/>\n    \n    <button (click) = \"delete(animal._id)\">Delete</button>\n    <button (click) = \"cancel(animal._id)\">Cancel</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pet.service */ "./src/app/pet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditComponent = /** @class */ (function () {
    function EditComponent(_ftservice, _router, _route) {
        this._ftservice = _ftservice;
        this._router = _router;
        this._route = _route;
        this.animal = {};
        this.errors = {};
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.getAnimal(params['id']);
        });
    };
    EditComponent.prototype.getAnimal = function (id) {
        var _this = this;
        var observable = this._ftservice.getOne(id);
        observable.subscribe(function (data) {
            _this.animal = data['pet'];
        });
    };
    EditComponent.prototype.update = function (id) {
        var _this = this;
        var observable = this._ftservice.updateOne(id, this.animal);
        observable.subscribe(function (data) {
            if (data['status'] == 'not ok') {
                _this.errors = data['errors']['errors'];
            }
            else {
                _this._router.navigate(['/']);
            }
        });
    };
    EditComponent.prototype.delete = function (id) {
        var _this = this;
        var observable = this._ftservice.deleteOne(id);
        observable.subscribe(function (data) {
            _this._router.navigate(['/']);
        });
    };
    EditComponent.prototype.cancel = function () {
        this._router.navigate(['/']);
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Latest compiled and minified CSS -->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n\n<!-- Optional theme -->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">\n\n\n<div class=\"\">\n  <h1>Pet Shelter</h1>\n  <h2>These pets are looking for home</h2>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Type</th>\n        <th scope=\"col\">Actions</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let animal of animals\" >\n      <tr>\n        <td>{{animal.name}}</td>\n        <td>{{animal.type}}</td>\n        <td>\n          <a [routerLink]=\"['/edit', animal._id]\"><button (click) = \"edit(animal._id)\" class=\"btn btn-warning\" >Update</button></a>\n          <a [routerLink]=\"['/animal', animal._id]\"><button class=\"btn btn-primary\" >Details</button></a>\n          <button class=\"btn btn-danger\" (click) = \"delete(animal._id)\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pet.service */ "./src/app/pet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ListComponent = /** @class */ (function () {
    function ListComponent(_ftservice, _router) {
        this._ftservice = _ftservice;
        this._router = _router;
        this.animals = [];
        this.animal = {};
        this.update = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getAllAnimals();
    };
    ListComponent.prototype.getAllAnimals = function () {
        var _this = this;
        var observable = this._ftservice.getAnimals();
        observable.subscribe(function (data) {
            _this.animals = data['pets'];
            console.log(data);
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        var observable = this._ftservice.deleteOne(id);
        observable.subscribe(function (data) {
            // this._router.navigate(['/']);
            _this.getAllAnimals();
        });
    };
    ListComponent.prototype.edit = function (id) {
        this.update = true;
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy9uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"create()\">\n  Pet Name: <br>\n  <input type=\"text\" name=\"animal.name\" [(ngModel)]=\"animal.name\" placeholder=\"name\">\n  <p *ngIf=\"errors.name\"> {{errors.name.message}}</p>\n  <br><hr>\n\n  Pet Type: <br>\n  <input type=\"text\" name=\"animal.type\" [(ngModel)]=\"animal.type\" placeholder=\"type\">\n  <p *ngIf=\"errors.type\"> {{errors.type.message}}</p>\n  <br><hr>\n\n  Description: <br>\n  <textarea name=\"animal.description\" [(ngModel)]=\"animal.description\" rows=5 cols=50></textarea>\n  <p *ngIf=\"errors.description\"> {{errors.description.message}}</p>\n  <br><hr>\n\n  Skills: <br>\n  <input type=\"text\" name=\"animal.skillOne\" [(ngModel)]=\"animal.skillOne\" placeholder=\"skillsOne\">\n  <p *ngIf=\"errors.skillOne\"> {{errors.skillOne.message}}</p>\n  <br>\n\n  <input type=\"text\" name=\"animal.skillTwo\" [(ngModel)]=\"animal.skillTwo\" placeholder=\"skillsTwo\">\n  <p *ngIf=\"errors.skillTwo\"> {{errors.skillTwo.message}}</p>\n  <br>\n\n  <input type=\"text\" name=\"animal.skillThree\" [(ngModel)]=\"animal.skillThree\" placeholder=\"skillsThree\">\n  <p *ngIf=\"errors.skillThree\"> {{errors.skillThree.message}}</p>\n  <br>\n\n  <input type=\"submit\" value=\"Create a Pet\"/>\n  <button (click) = \"cancel(animal._id)\">Cancel</button>\n</form>\n"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pet.service */ "./src/app/pet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewComponent = /** @class */ (function () {
    function NewComponent(_ftService, _router) {
        this._ftService = _ftService;
        this._router = _router;
        this.animal = {
            "name": '',
            "type": '',
            'description': '',
            "skills": {
                "skillOne": '',
                "skillTwo": '',
                "skillThree": '',
            }
        };
        this.errors = {};
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.create = function () {
        var _this = this;
        var observable = this._ftService.createAnimal(this.animal);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['status'] == 'not ok') {
                console.log(data);
                _this.errors = data['errors']['errors'];
            }
            else {
                localStorage.setItem("id", data['id']);
                _this._router.navigate(['/']);
            }
        });
    };
    NewComponent.prototype.cancel = function () {
        this._router.navigate(['/']);
    };
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/pet.service.ts":
/*!********************************!*\
  !*** ./src/app/pet.service.ts ***!
  \********************************/
/*! exports provided: PetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetService", function() { return PetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PetService = /** @class */ (function () {
    function PetService(_http) {
        this._http = _http;
    }
    PetService.prototype.getAnimals = function () {
        return this._http.get('/pets');
    };
    PetService.prototype.createAnimal = function (animal) {
        return this._http.post('/pet', animal);
    };
    PetService.prototype.getOne = function (id) {
        return this._http.get("/pet/" + id);
    };
    PetService.prototype.addReview = function (id, review) {
        return this._http.post("/pet/" + id + "/review", review);
    };
    PetService.prototype.updateOne = function (id, animal) {
        return this._http.put("/pet/" + id, animal);
    };
    PetService.prototype.deleteOne = function (id) {
        return this._http.delete("/pet/" + id);
    };
    PetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PetService);
    return PetService;
}());



/***/ }),

/***/ "./src/app/single/single.component.css":
/*!*********************************************!*\
  !*** ./src/app/single/single.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollables{\n  height: 250px;\n  overflow: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlL3NpbmdsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUvc2luZ2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsYWJsZXN7XG4gIGhlaWdodDogMjUwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/single/single.component.html":
/*!**********************************************!*\
  !*** ./src/app/single/single.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"animal\">\n  <h2>Details about {{animal.name}}</h2>\n  <p>Pet type: {{animal.type}}</p>\n  <p>Description: {{animal.description}}</p>\n  <p>Skills: {{animal.skillOne}}, {{animal.skillTwo}}, {{animal.skillThree}}</p>\n</div>\n<button (click) = \"cancel(animal._id)\">Cancel</button>\n<button (click) = \"delete(animal._id)\">Adopt</button>\n"

/***/ }),

/***/ "./src/app/single/single.component.ts":
/*!********************************************!*\
  !*** ./src/app/single/single.component.ts ***!
  \********************************************/
/*! exports provided: SingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleComponent", function() { return SingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pet.service */ "./src/app/pet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SingleComponent = /** @class */ (function () {
    function SingleComponent(_ftservice, _router, _route) {
        this._ftservice = _ftservice;
        this._router = _router;
        this._route = _route;
        this.errors = {};
    }
    SingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.getAnimal(params['id']);
        });
    };
    SingleComponent.prototype.getAnimal = function (id) {
        var _this = this;
        var observable = this._ftservice.getOne(id);
        observable.subscribe(function (data) {
            _this.animal = data['pet'];
        });
    };
    SingleComponent.prototype.delete = function (id) {
        var _this = this;
        var observable = this._ftservice.deleteOne(id);
        observable.subscribe(function (data) {
            _this._router.navigate(['/']);
        });
    };
    SingleComponent.prototype.cancel = function () {
        this._router.navigate(['/']);
    };
    SingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single',
            template: __webpack_require__(/*! ./single.component.html */ "./src/app/single/single.component.html"),
            styles: [__webpack_require__(/*! ./single.component.css */ "./src/app/single/single.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SingleComponent);
    return SingleComponent;
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

module.exports = __webpack_require__(/*! /Users/ferhatshirin/Desktop/third_time/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map