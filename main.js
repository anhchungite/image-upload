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

module.exports = "<app-upload-form></app-upload-form>\r\n<router-outlet></router-outlet>"

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
        this.title = 'app';
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _upload_form_upload_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upload-form/upload-form.component */ "./src/app/upload-form/upload-form.component.ts");
/* harmony import */ var _token_token_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./token/token.component */ "./src/app/token/token.component.ts");
/* harmony import */ var _time_since_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./time-since.pipe */ "./src/app/time-since.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'token', component: _token_token_component__WEBPACK_IMPORTED_MODULE_8__["TokenComponent"] },
    { path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _upload_form_upload_form_component__WEBPACK_IMPORTED_MODULE_7__["UploadFormComponent"],
                _token_token_component__WEBPACK_IMPORTED_MODULE_8__["TokenComponent"],
                _time_since_pipe__WEBPACK_IMPORTED_MODULE_9__["TimeSincePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/oauth.service.ts":
/*!**********************************!*\
  !*** ./src/app/oauth.service.ts ***!
  \**********************************/
/*! exports provided: OAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuthService", function() { return OAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OAuthService = /** @class */ (function () {
    function OAuthService(firebase) {
        this.firebase = firebase;
    }
    OAuthService.prototype.getAuthData = function () {
        this.authObj = this.firebase.object('oauth');
        return this.authObj;
    };
    OAuthService.prototype.insertAuthData = function (oauth) {
        this.authObj.set(oauth);
    };
    OAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], OAuthService);
    return OAuthService;
}());



/***/ }),

/***/ "./src/app/time-since.pipe.ts":
/*!************************************!*\
  !*** ./src/app/time-since.pipe.ts ***!
  \************************************/
/*! exports provided: TimeSincePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSincePipe", function() { return TimeSincePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeSincePipe = /** @class */ (function () {
    function TimeSincePipe() {
    }
    TimeSincePipe.prototype.transform = function (value) {
        var date = new Date(value);
        var current = new Date();
        var seconds = Math.floor((current - date) / 1000);
        if (seconds < 5) {
            return 'Vừa xong';
        }
        else if (seconds < 60) {
            return seconds + ' giây trước';
        }
        else if (seconds < 3600) {
            var minutes = Math.floor(seconds / 60);
            if (minutes > 1) {
                return minutes + ' phút trước';
            }
            else {
                return '1 phút trước';
            }
        }
        else if (seconds < 86400) {
            var hours = Math.floor(seconds / 3600);
            if (hours > 1) {
                return hours + ' giờ trước';
            }
            else {
                return '1 giờ trước';
            }
        }
        else if (seconds < 172800) {
            var days = Math.floor(seconds / 86400);
            if (days > 1) {
                return days + ' ngày trước';
            }
            else {
                return '1 ngày trước';
            }
        }
        else {
            return date.getDate().toString() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
        }
    };
    TimeSincePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'timeSince' })
    ], TimeSincePipe);
    return TimeSincePipe;
}());



/***/ }),

/***/ "./src/app/token/token.component.css":
/*!*******************************************!*\
  !*** ./src/app/token/token.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/token/token.component.html":
/*!********************************************!*\
  !*** ./src/app/token/token.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/token/token.component.ts":
/*!******************************************!*\
  !*** ./src/app/token/token.component.ts ***!
  \******************************************/
/*! exports provided: TokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenComponent", function() { return TokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _oauth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../oauth.service */ "./src/app/oauth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenComponent = /** @class */ (function () {
    function TokenComponent(oauthService) {
        this.oauthService = oauthService;
        this.access_token = '';
        this.expires_in = '';
        this.refresh_token = '';
        this.client_id = '3a349709bbe2f2b';
        this.client_secret = 'e11eec75929fbd10305e02aeb5db1f806249deac';
    }
    TokenComponent.prototype.ngOnInit = function () {
        this.access_token = this.extractParam('access_token');
        this.expires_in = this.extractParam('expires_in');
        this.refresh_token = this.extractParam('refresh_token');
        this.oauthService.getAuthData();
        if (this.access_token && this.expires_in && this.refresh_token) {
            this.storageAccessToken();
        }
    };
    TokenComponent.prototype.storageAccessToken = function () {
        var oauth = {
            access_token: this.access_token,
            expires_in: this.expires_in,
            refresh_token: this.refresh_token
        };
        this.oauthService.insertAuthData(oauth);
    };
    TokenComponent.prototype.extractParam = function (param) {
        var regex = new RegExp(param + '=(\\w+)');
        var match = document.location.hash.match(regex);
        return !!match && match[1];
    };
    TokenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-token',
            template: __webpack_require__(/*! ./token.component.html */ "./src/app/token/token.component.html"),
            styles: [__webpack_require__(/*! ./token.component.css */ "./src/app/token/token.component.css")],
            providers: [_oauth_service__WEBPACK_IMPORTED_MODULE_1__["OAuthService"]]
        }),
        __metadata("design:paramtypes", [_oauth_service__WEBPACK_IMPORTED_MODULE_1__["OAuthService"]])
    ], TokenComponent);
    return TokenComponent;
}());



/***/ }),

/***/ "./src/app/upload-form/upload-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/upload-form/upload-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-wrap {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0px 0px 27px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n.upload {\r\n  margin-top: 40px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n@media only screen and (max-width: 640px) {\r\n  .main-wrap {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.input-group{\r\n  width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.history h3{\r\n  padding-left: 10px;\r\n}\r\n\r\n.upload .progress {\r\n  border-radius: 0;\r\n  display: none;\r\n}"

/***/ }),

/***/ "./src/app/upload-form/upload-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/upload-form/upload-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"main-wrap box-shadow upload\">\n        <input type=\"file\" class=\"dropify\" data-allowed-file-extensions=\"jpg jpeg png gif\" data-max-file-size=\"3M\" (change)=\"fileChange($event.target.files)\" />\n        <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\">\n              Đang tải lên ...\n            </div>\n          </div>\n    </div>\n    \n    <div class=\"main-wrap\" *ngIf=\"historyUpload.length > 0\">\n        <h4>Tải lên gần đây:</h4>\n        <div class=\"history table-responsive\">\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">Hình ảnh</th>\n                  <th class=\"text-center\">Liên kết</th>\n                  <th class=\"text-center\">Thời gian</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let history of historyUpload\">\n                  <td class=\"text-center\">\n                    <img src=\"{{ history.link }}\" width=\"100px\"/>\n                  </td>\n                  <td class=\"text-center\">\n                      <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" #hlink value=\"{{ history.link }}\">\n                        <div class=\"input-group-btn\">\n                          <button class=\"btn btn-default btn-copy\" type=\"button\" (click)=\"copyToClipboard(hlink)\">\n                            Copy\n                          </button>\n                        </div>\n                      </div>\n                  </td>\n                  <td class=\"text-center\">{{ history.datetime | timeSince }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n    </div>\n    \n    \n  <!-- <h1>Upload</h1>\n  <button (click)=\"openInput()\">\n    Select File to Upload\n</button>\n<input id=\"fileInput\" hidden type=\"file\" (change)=\"fileChange($event.target.files)\" >\n</div>\n<a href=\"https://api.imgur.com/oauth2/authorize?response_type=token&client_id=5da1d9888a8c682\">Get Tk</a> -->\n</div>"

/***/ }),

/***/ "./src/app/upload-form/upload-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/upload-form/upload-form.component.ts ***!
  \******************************************************/
/*! exports provided: UploadFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFormComponent", function() { return UploadFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _oauth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../oauth.service */ "./src/app/oauth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadFormComponent = /** @class */ (function () {
    function UploadFormComponent(oauthService) {
        this.oauthService = oauthService;
        this.historyUpload = [];
        this.drError = false;
    }
    UploadFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.oauthService.getAuthData();
        x.snapshotChanges().subscribe(function (item) {
            _this.oauthInfo = item.payload.toJSON();
        });
        var drEvent = $('.dropify').dropify({
            messages: {
                'default': 'Kéo thả hình ảnh vào đây hoặc click',
                'replace': 'Kéo thả hình ảnh hoặc click để thay đổi',
                'remove': 'Xóa',
                'error': 'Ồ shit, bị cái mọe gì vậy nhỉ.'
            },
            error: {
                'fileSize': 'Dung lượng hình quá lớn (tối đa {{ value }}).',
                'imageFormat': 'Định dạng không cho phép (chỉ {{ value }}).'
            }
        });
        drEvent.on('dropify.errors', function (event, element) {
            _this.drError = true;
        });
        this.historyUpload = this.getHistoryUpload().reverse();
    };
    UploadFormComponent.prototype.fileChange = function (files) {
        if (files.length > 0) {
            this.selectFiles = files[0];
            var r_1 = new FileReader();
            var self_1 = this;
            r_1.onloadend = function (e) {
                var base64Str = r_1.result;
                base64Str = base64Str.replace(/.*,/, '');
                self_1.upload(base64Str);
            };
            r_1.readAsDataURL(this.selectFiles);
        }
    };
    UploadFormComponent.prototype.upload = function (base64) {
        if (this.drError) {
            this.drError = false;
            return;
        }
        $('.upload .progress').fadeIn();
        $.ajax({
            url: 'https://api.imgur.com/3/image',
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + this.oauthInfo.access_token,
                Accept: 'application/json'
            },
            data: {
                image: base64,
                type: 'base64'
            },
            success: function (result) {
                $('.upload .progress').fadeOut();
                this.setHistoryUpload(result.data);
                this.historyUpload = this.getHistoryUpload().reverse();
            }.bind(this)
        });
    };
    UploadFormComponent.prototype.setHistoryUpload = function (data) {
        var d = new Date();
        var hdata = {
            datetime: d,
            link: data.link,
            id: data.id
        };
        var history = this.getHistoryUpload();
        history.push(hdata);
        localStorage.history = JSON.stringify(history.slice(-5));
    };
    UploadFormComponent.prototype.getHistoryUpload = function () {
        if (localStorage.history) {
            var history_1 = JSON.parse(localStorage.history);
            return history_1;
        }
        return [];
    };
    UploadFormComponent.prototype.copyToClipboard = function (element) {
        element.select();
        document.execCommand('copy');
    };
    UploadFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-form',
            template: __webpack_require__(/*! ./upload-form.component.html */ "./src/app/upload-form/upload-form.component.html"),
            styles: [__webpack_require__(/*! ./upload-form.component.css */ "./src/app/upload-form/upload-form.component.css")],
            providers: [_oauth_service__WEBPACK_IMPORTED_MODULE_1__["OAuthService"]]
        }),
        __metadata("design:paramtypes", [_oauth_service__WEBPACK_IMPORTED_MODULE_1__["OAuthService"]])
    ], UploadFormComponent);
    return UploadFormComponent;
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
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyDLNxi3CnKSHk2ir8fjmLEfx7GxufwLqvQ",
        authDomain: "imgur-upload.firebaseapp.com",
        databaseURL: "https://imgur-upload.firebaseio.com",
        projectId: "imgur-upload",
        storageBucket: "",
        messagingSenderId: "793597820346"
    }
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

module.exports = __webpack_require__(/*! D:\Project\imgur-upload\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map