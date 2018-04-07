webpackJsonp([0],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
        this.baseUrl = 'https://ionicus.herokuapp.com/user/1';
    }
    HomeService.prototype.getPosts = function () {
        return this.http.get(this.baseUrl)
            .map(function (res) { return res.json(); });
    };
    HomeService.prototype.getURL = function () {
        return this.baseUrl;
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HomeService);
    return HomeService;
}());

//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_home_service__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, homeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homeService = homeService;
        this.pincode = navParams.get('pincode');
    }
    HomePage.prototype.ngOnInit = function () {
        this.getPosts();
    };
    HomePage.prototype.getPosts = function () {
        var _this = this;
        this.homeService.getPosts().subscribe(function (response) {
            _this.items = response.data;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="favorite">\n    <ion-title>Carta de Condução</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngFor="let item of items">\n      <div class="card">\n          <ion-thumbnail *ngIf="item[0]">\n              <img src="data:image/jpg;base64,{{item[0]}}">\n          </ion-thumbnail>\n          <div class="container">\n          <p>\n            <b>1.</b> {{item[1]}}\n          </p>\n          <p>\n            <b>2.</b> {{item[2]}}\n          </p>\n          <p>\n            <b>3.</b> {{item[3]}}\n          </p>\n          <p>\n            <b>4a.</b> {{item[\'4a\']}} <b>4b.</b> {{item[\'4b\']}}\n          </p>\n          <p>\n            <b>4c.</b> {{item[\'4c\']}} <b>4d.</b> {{item[\'4d\']}}\n          </p>\n          <p>\n            <b>5.</b> {{item[5]}}\n          </p>\n          <p>\n            <b>7.</b> \n            <ion-thumbnail *ngIf="item[7]">\n                <img src="data:image/jpg;base64,{{item[7]}}">\n            </ion-thumbnail>\n          </p>\n          <p>\n            <b>8.</b> {{item[8]}}\n          </p>\n          <p>\n              <b>9.</b>\n          </p>\n          <ion-list *ngFor="let car of item[9]; let in = index">\n            <p>\n              <ion-icon name="car"></ion-icon>\n              <b>classe:</b>  {{item[9][in][\'classe\']}}  \n              <b>s:</b> {{item[9][in][\'s\']}} \n              <b>f:</b> {{item[9][in][\'f\']}} \n            </p>\n          </ion-list>\n        </div>\n        </div>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_home_service__["a" /* HomeService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 220;

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'settings',template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/settings/settings.html"*/'<ion-header>\n    <ion-navbar color="favorite">\n      <ion-title>\n          Settings\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    This is settings\n  </ion-content>\n  '/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_home_service__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QrCodePage = /** @class */ (function () {
    function QrCodePage(navCtrl, homeService) {
        this.navCtrl = navCtrl;
        this.homeService = homeService;
    }
    QrCodePage.prototype.ngOnInit = function () {
        this.getPosts();
    };
    QrCodePage.prototype.getPosts = function () {
        var _this = this;
        this.homeService.getPosts().subscribe(function (response) {
            _this.items = response.data;
        });
    };
    QrCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'qrcode',template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/qrcode/qrcode.html"*/'<ion-header>\n    <ion-navbar color="favorite">\n      <ion-title>\n          QrCode\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class="card">\n      <h3>Aqui está o seu qrcode:</h3>\n      <div>\n        <ngx-qrcode [qrc-value]="items"></ngx-qrcode>\n      </div>\n    </div>\n  </ion-content>\n  '/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/qrcode/qrcode.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_home_service__["a" /* HomeService */]])
    ], QrCodePage);
    return QrCodePage;
}());

//# sourceMappingURL=qrcode.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__qrcode_qrcode__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__qrcode_qrcode__["a" /* QrCodePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/tabs/tabs.html"*/'<ion-tabs color="favorite">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="QrCode" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="construct"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_pincode_input_dist__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LockScreenPage = /** @class */ (function () {
    //Fazer tentativas depois
    function LockScreenPage(navCtrl, navParams, pincodeCtrl, storage, alertCtrl, faio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pincodeCtrl = pincodeCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.faio = faio;
    }
    LockScreenPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Try to get password stored
        this.storage.get('password_encrypt').then(function (pdw) {
            if (pdw) {
                console.log("Encrypted passwordk: " + pdw);
            }
            else {
                _this.presentAlert('PIN', "Para começar a usar a aplicação precisa de configurar um PIN de 6 digitos.", true);
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    LockScreenPage.prototype.openPinCode = function (register) {
        var _this = this;
        var pinCode = this.pincodeCtrl.create({
            title: 'Insira um PIN',
            passSize: 6,
            hideForgotPassword: true,
            hideCancelButton: register,
            enableBackdropDismiss: !register //Se estiver a registar tem que configurar
        });
        pinCode.present();
        pinCode.onDidDismiss(function (code, status) {
            // If user enter a password and the fase if confirm
            // do a login
            if (status === 'done' && !register) {
                _this.login(code);
            }
            else if (status === 'done' && register) {
                _this.code = code;
                // Confirm if pincodes match
                _this.confirmCode();
            }
        });
    };
    LockScreenPage.prototype.confirmCode = function () {
        var _this = this;
        var pinCode = this.pincodeCtrl.create({
            title: 'Confirme o seu PIN',
            passSize: 6,
            hideForgotPassword: true,
            hideCancelButton: true,
            enableBackdropDismiss: false
        });
        pinCode.present();
        pinCode.onDidDismiss(function (code, status) {
            if (status === 'done') {
                if (_this.code == code) {
                    // if match send a message and do a registration of pin code
                    _this.presentAlert("PIN configurado!", "Pode mudar o PIN mais tarde nas Definições.", false);
                    _this.register(code);
                }
                else {
                    _this.presentAlert("Erro!", "Os PINs inseridos não são iguais. Tente novamente.", false);
                    _this.openPinCode(true);
                }
            }
        });
    };
    LockScreenPage.prototype.startTouchID = function () {
        var _this = this;
        this.faio.show({
            clientId: 'FingerPrintLockScreen',
            clientSecret: 'lasd08aah@981',
            disableBackup: true,
            localizedFallbackTitle: 'Insira o Pin',
            localizedReason: 'Autentique-se' //Only for iOS
        })
            .then(function (result) {
            // If the TouchID is correct
            _this.storage.get('password_encrypt').then(function (pwd) {
                var stored_pincode = String(pwd);
                console.log("Stored password: " + stored_pincode);
                // Go to tabs page
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */], {
                    pincode: stored_pincode
                });
            });
        });
    };
    LockScreenPage.prototype.presentAlert = function (title, message, register) {
        var _this = this;
        var botoes;
        if (register) {
            botoes = [
                {
                    text: 'OK',
                    handler: function () {
                        _this.openPinCode(true);
                    }
                }
            ];
        }
        else {
            botoes = ["OK"];
        }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: botoes
        });
        alert.present();
    };
    //Encryption
    LockScreenPage.prototype.register = function (pincode) {
        var hash = String(__WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.SHA256(pincode));
        this.storage.set('password_encrypt', hash);
        this.storage.set('settings', "");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */], {
            pincode: hash
        });
    };
    LockScreenPage.prototype.login = function (pincode) {
        var _this = this;
        // store passwords 
        var entered_pincode = String(__WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.SHA256(pincode));
        // get password stored on local storage
        this.storage.get('password_encrypt').then(function (pwd) {
            var stored_pincode = String(pwd);
            console.log("Stored password: " + stored_pincode);
            // if match go to tabs page
            if (entered_pincode == stored_pincode) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */], {
                    pincode: entered_pincode
                });
            }
            else {
                _this.presentAlert("Erro", "PIN errado", false);
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    LockScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-lockscreen',template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/lock-screen/lock-screen.html"*/'<!--\n  Generated template for the LockScreenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="favorite">\n      <ion-title text-center>\n        CC\n      </ion-title>\n    </ion-navbar>\n</ion-header>\n  \n  <ion-content padding>\n      <!--<h4 text-center>Insira o seu PIN</h4> -->\n    <div class="pin-container">\n      <button ion-button icon-only full (click)="openPinCode(false)" style="background-color: #32db64;">\n        <ion-icon name="lock"></ion-icon>\n      </button>\n        <button ion-button icon-only full (click)="startTouchID()" style="background-color: #32db64;">\n          <ion-icon name="finger-print"></ion-icon>\n        </button>\n    </div>  \n  </ion-content>\n'/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/lock-screen/lock-screen.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic2_pincode_input_dist__["PincodeController"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]])
    ], LockScreenPage);
    return LockScreenPage;
}());

//# sourceMappingURL=lock-screen.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(378);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_qrcode_qrcode__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_lock_screen_lock_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic2_pincode_input__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_fingerprint_aio__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_qrcode2__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_barcode_scanner__ = __webpack_require__(754);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_lock_screen_lock_screen__["a" /* LockScreenPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_qrcode_qrcode__["a" /* QrCodePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15_ionic2_pincode_input__["PincodeInputModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_lock_screen_lock_screen__["a" /* LockScreenPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_qrcode_qrcode__["a" /* QrCodePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_lock_screen_lock_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_home_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_lock_screen_lock_screen__["a" /* LockScreenPage */];
        platform.ready().then(function () {
            /*
              if (PIN) {
                rootPage = HomePage;
                lockService.init();
              } else {
                rootPage = StartPage;
              }
              TIRAR O LOCKSERVICE DAQUI DE BAIXO
              */
            //lockService.init();
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_home_service__["a" /* HomeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[373]);
//# sourceMappingURL=main.js.map