webpackJsonp([0],{

/***/ 178:
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
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_home_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(33);
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
    function HomePage(loadingCtrl, plt, navCtrl, sanitizer, navParams, homeService, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.navParams = navParams;
        this.homeService = homeService;
        this.alertCtrl = alertCtrl;
        this.storage = navParams.get('storage');
        this.show1 = true;
        this.show2 = false;
        this.tfront = true;
        this.tback = false;
        this.loading = this.loadingCtrl.create({
            content: 'Por favor espere...'
        });
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.navParams.get('storage').get('key').then(function (val) {
            _this.key = val;
            _this.navParams.get('storage').get('token').then(function (val2) {
                _this.token = val2;
                _this.getPosts();
            });
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('first').then(function (bool) {
            if (bool) {
                console.log("First time");
                console.log(bool);
                _this.faio();
            }
            else {
                console.log("NOT First time");
            }
        });
    };
    HomePage.prototype.faio = function () {
        var _this = this;
        this.storage.set('first', false);
        var alert = this.alertCtrl.create({
            title: 'Touch ID',
            message: 'Deseja ativar o Touch ID?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        console.log('Não clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        console.log('Sim clicked');
                        _this.storage.set('faio', true);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.getPosts = function () {
        var _this = this;
        this.loading.present();
        this.homeService.getPosts(this.key, this.token).subscribe(function (response) {
            _this.item = response;
            _this.getPhoto();
            _this.getAss();
            _this.loading.dismiss();
        });
    };
    HomePage.prototype.getPhoto = function () {
        this.photo = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.item.photo);
    };
    HomePage.prototype.getAss = function () {
        this.ass = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.item.ass);
    };
    HomePage.prototype.toggleB1 = function () {
        this.show1 = true;
        this.show2 = false;
    };
    HomePage.prototype.toggleB2 = function () {
        this.show1 = false;
        this.show2 = true;
    };
    HomePage.prototype.toggleTB = function () {
        this.tfront = false;
        this.tback = true;
    };
    HomePage.prototype.toggleTF = function () {
        this.tback = false;
        this.tfront = true;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="favorite">\n    <ion-title text-center>Carta de Condução</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button (click)="toggleB1()" ion-button block style="background-color: #ffffff; color: #000000">Mostrar Vista Moderna</button>\n    <button (click)="toggleB2()" ion-button block style="background-color: #ffffff; color: #000000">Mostrar Carta Tradicional</button>\n    <div class="card" *ngIf="show1 && item">\n          <ion-thumbnail *ngIf="item.ass">\n              <img class="imagem" [src]="photo">\n          </ion-thumbnail>\n          <div class="container">\n          <p>\n            <b>1.</b> {{item.surname}}\n          </p>\n          <p>\n            <b>2.</b> {{item.name}}\n          </p>\n          <p>\n            <b>3.</b> {{item.birthday}} {{item.birthSite}}\n          </p>\n          <p>\n            <b>4a.</b> {{item.emissionDate}} <b>4b.</b> {{item.emissionEntity}}\n          </p>\n          <p>\n            <b>4c.</b> {{item.valideDate}} <b>4d.</b> {{item.numberOfControll}}\n          </p>\n          <p>\n            <b>5.</b> {{item.licenseNumber}}\n          </p>\n          <p>\n            <b>7.</b> \n            <ion-thumbnail *ngIf="item.ass">\n                <img class="imagem" [src]="ass">\n            </ion-thumbnail>\n          </p>\n          <ion-list *ngFor="let car of item.types; let in = index">\n            <p>\n              <ion-icon name="car"></ion-icon>\n              <b>classe:</b>  {{item.types[in][\'name\']}}  \n              <b>s:</b> {{item.types[in][\'firstDate\']}} \n              <b>f:</b> {{item.types[in][\'validUntil\']}} \n            </p>\n          </ion-list>\n        </div>\n      </div>\n      <div (click)="toggleTB()" class="row" *ngIf="show2 && item && tfront">\n        <div class="column">\n          <ion-thumbnail *ngIf="item.photo">\n            <img class="imagem3" [src]="photo">\n          </ion-thumbnail>\n        </div>\n        <div class="column">\n          <p>\n            <b>1.</b> {{item.surname}}\n          </p>\n          <p>\n            <b>2.</b> {{item.name}}\n          </p>\n          <p>\n            <b>3.</b> {{item.birthday}} {{birthSite}}\n          </p>\n          <p>\n            <b>4a.</b> {{item.emissionDate}} <b>4b.</b> {{item.emissionEntity}}\n          </p>\n          <p>\n            <b>4c.</b> {{item.valideDate}} <b>4d.</b> {{item.numberOfControll}}\n          </p>\n          <p>\n            <b>5.</b> {{item.licenseNumber}}\n          </p>\n          <p>\n            <b>7.</b> \n            <ion-thumbnail *ngIf="item.ass">\n              <img class="imagem2" [src]="ass">\n            </ion-thumbnail>\n          </p>\n        </div>\n      </div>\n      <div (click)="toggleTF()" class="row2" *ngIf="show2 && item && tback">\n        <div class="back">\n          <table>\n              <tr>\n                <th>9.</th>\n                <th>10.</th>\n                <th>11.</th>\n                <th>12.</th>\n              </tr>\n              <tr *ngFor="let car of item.types; let in = index">\n                <td>{{item.types[in][\'name\']}} </td>\n                <td><ion-icon name="car"></ion-icon></td>\n                <td>{{item.types[in][\'firstDate\']}} </td>\n                <td>{{item.types[in][\'validUntil\']}} </td>\n              </tr> \n          </table>\n        </div>\n      </div>        \n</ion-content>\n\n'/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 223:
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
webpackEmptyAsyncContext.id = 223;

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic2_pincode_input__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(95);
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
    function SettingsPage(navCtrl, navParams, pincodeCtrl, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pincodeCtrl = pincodeCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.storage = navParams.get('storage');
    }
    SettingsPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.storage.get('password_encrypt').then(function (pwd) {
            _this.pincode = String(pwd);
        });
        this.storage.get('faio').then(function (result) {
            if (result !== undefined) {
                _this.faio = result;
            }
        });
    };
    SettingsPage.prototype.toggleFaio = function () {
        this.storage.set('faio', this.faio);
        this.presentAlert("Touch ID", "Nova configuração de Touch ID efetuada. Reinicie a aplicação para concluir.");
    };
    SettingsPage.prototype.resetPassword = function () {
        this.openPinCode(false);
    };
    SettingsPage.prototype.cleanReset = function () {
        this.storage.remove('password_encrypt');
        this.storage.set('faio', false);
        this.storage.remove('token');
        this.storage.remove('key');
        this.presentAlert("Feito", "Todos os seus dados foram removidos. Reinicie a aplicação para terminar.");
    };
    SettingsPage.prototype.cleanHistory = function () {
        var _this = this;
        this.storage.remove('history').then(function (val) {
            _this.storage.set('history', []);
            _this.presentAlert("Feito", "O seu histórico foi removido.");
        });
    };
    SettingsPage.prototype.cleanToken = function () {
        this.storage.remove('token');
        this.storage.remove('key');
        this.presentAlert("Feito", "Chave única apagada. Reinicie a aplicação para terminar.");
    };
    SettingsPage.prototype.openPinCode = function (register) {
        var _this = this;
        var title = "Insira o seu PIN";
        if (register)
            title = "Insira o seu novo PIN";
        var pinCode = this.pincodeCtrl.create({
            title: title,
            passSize: 6,
            hideForgotPassword: true,
            hideCancelButton: false,
            enableBackdropDismiss: true
        });
        pinCode.present();
        pinCode.onDidDismiss(function (code, status) {
            // If user enter a password and the fase if confirm
            // do a login
            if (status === 'done' && !register) {
                _this.login(code);
            }
            else if (status === 'done' && register) {
                _this.newPincode = code;
                // Confirm if pincodes match
                _this.confirmCode();
            }
        });
    };
    SettingsPage.prototype.login = function (pincode) {
        var _this = this;
        var entered_pincode = String(__WEBPACK_IMPORTED_MODULE_3_crypto_js___default.a.SHA256(pincode));
        this.storage.get('password_encrypt').then(function (pwd) {
            var stored_pincode = String(pwd);
            console.log("Stored password: " + stored_pincode);
            if (entered_pincode == stored_pincode) {
                _this.presentAlert("Novo PIN", "Configure o seu novo PIN");
                _this.openPinCode(true);
            }
            else {
                _this.presentAlert("Erro", "PIN errado");
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    SettingsPage.prototype.confirmCode = function () {
        var _this = this;
        var pinCode = this.pincodeCtrl.create({
            title: 'Confirme o seu novo PIN',
            passSize: 6,
            hideForgotPassword: true,
            hideCancelButton: false,
            enableBackdropDismiss: true
        });
        pinCode.present();
        pinCode.onDidDismiss(function (code, status) {
            if (status === 'done') {
                if (_this.newPincode == code) {
                    // if match send a message and do a registration of pin code
                    _this.presentAlert("PIN", "Novo PIN configurado!");
                    _this.register();
                }
                else {
                    _this.presentAlert("Erro!", "Os PINs inseridos não são iguais. Tente novamente.");
                    _this.openPinCode(true);
                }
            }
        });
    };
    SettingsPage.prototype.resetToken = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Apagar chave",
            subTitle: "Tem a certeza que quer apagar a chave? Esta ação não pode ser desfeita.",
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: 'Apagar',
                    handler: function () {
                        _this.cleanToken();
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.resetAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Apagar dados",
            subTitle: "Tem a certeza que quer apagar os dados? Esta ação não pode ser desfeita.",
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: 'Apagar',
                    handler: function () {
                        _this.cleanReset();
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.presentAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ["OK"]
        });
        alert.present();
    };
    SettingsPage.prototype.register = function () {
        var _this = this;
        var hash = String(__WEBPACK_IMPORTED_MODULE_3_crypto_js___default.a.SHA256(this.newPincode));
        this.storage.remove('password_encrypt').then(function (done) {
            console.log("Nova password");
            _this.storage.set('password_encrypt', hash);
            console.log(hash);
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
<<<<<<< HEAD
            selector: 'settings',template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar color="favorite">\n    <ion-title text-center>\n      Definições\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      Segurança e Privacidade\n    </ion-list-header>\n    <button ion-item (click)="resetPassword()">\n      <ion-icon name="lock" item-start></ion-icon>\n      Alterar o PIN\n    </button>\n    <ion-item>\n        <ion-label>Touch ID</ion-label>\n        <ion-icon name="finger-print" item-start></ion-icon>\n        <ion-toggle [(ngModel)]="faio" (ionChange)="toggleFaio()"></ion-toggle>\n    </ion-item>\n    <ion-list-header>\n      Dados pessoais\n    </ion-list-header>\n    <button ion-item block outline color="danger" (click)="resetToken()">\n        Apagar chave única\n    </button>\n    <button ion-item block outline color="danger" (click)="resetAlert()">\n        Apagar todos os dados\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/settings/settings.html"*/,
=======
            selector: 'settings',template:/*ion-inline-start:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/Ionicus/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar color="favorite">\n    <ion-title text-center>\n      Definições\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      Segurança e Privacidade\n    </ion-list-header>\n    <button ion-item (click)="resetPassword()">\n      <ion-icon name="lock" item-start></ion-icon>\n      Alterar o PIN\n    </button>\n    <ion-item>\n        <ion-label>Touch ID</ion-label>\n        <ion-icon name="finger-print" item-start></ion-icon>\n        <ion-toggle [(ngModel)]="faio" (ionChange)="toggleFaio()"></ion-toggle>\n    </ion-item>\n    <ion-list-header>\n      Dados pessoais\n    </ion-list-header>\n    <button ion-item block outline color="danger" (click)="cleanHistory()">\n      Apagar histórico\n  </button>\n    <button ion-item block outline color="danger" (click)="resetToken()">\n        Apagar chave única\n    </button>\n    <button ion-item block outline color="danger" (click)="resetAlert()">\n        Apagar todos os dados\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/Ionicus/src/pages/settings/settings.html"*/,
>>>>>>> 5a9372b585a8cb29ca1f3e38b44b08095784fc32
=======
            selector: 'settings',template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar color="favorite">\n    <ion-title text-center>\n      Definições\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      Segurança e Privacidade\n    </ion-list-header>\n    <button ion-item (click)="resetPassword()">\n      <ion-icon name="lock" item-start></ion-icon>\n      Alterar o PIN\n    </button>\n    <ion-item>\n        <ion-label>Touch ID</ion-label>\n        <ion-icon name="finger-print" item-start></ion-icon>\n        <ion-toggle [(ngModel)]="faio" (ionChange)="toggleFaio()"></ion-toggle>\n    </ion-item>\n    <ion-list-header>\n      Dados pessoais\n    </ion-list-header>\n    <button ion-item block outline color="danger" (click)="cleanHistory()">\n      Apagar histórico\n  </button>\n    <button ion-item block outline color="danger" (click)="resetToken()">\n        Apagar chave única\n    </button>\n    <button ion-item block outline color="danger" (click)="resetAlert()">\n        Apagar todos os dados\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/settings/settings.html"*/,
>>>>>>> dc3fa88483a68ab37704a93d7fbe39f2d1a79fa2
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic2_pincode_input__["PincodeController"], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_home_service__ = __webpack_require__(85);
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
    function QrCodePage(navCtrl, homeService, navParams) {
        this.navCtrl = navCtrl;
        this.homeService = homeService;
        this.navParams = navParams;
        this.showAll = false;
        this.show18 = false;
        this.show21 = false;
    }
    QrCodePage.prototype.createJSON18 = function () {
        if (this.items != undefined) {
            var data = this.items.birthday.split("-", 3);
            var d = new Date(Date.parse(data[1] + "/" + data[2] + "/" + data[0]));
            var time = (new Date().getTime()) - d.getTime();
            var ageDate = new Date(time);
            var anos = Math.abs(ageDate.getUTCFullYear() - 1970);
            console.log(anos);
            var obj;
            if (anos >= 18) {
                this.decision = true;
                obj = "[{maior18:true}]";
                this.output18 = obj;
            }
            else {
                this.decision = false;
                obj = "[{maior18:false}]";
                this.output18 = obj;
            }
        }
    };
    QrCodePage.prototype.createJSON21 = function () {
        if (this.items != undefined) {
            var data = this.items.birthday.split("-", 3);
            var d = new Date(Date.parse(data[1] + "/" + data[2] + "/" + data[0]));
            var time = (new Date().getTime()) - d.getTime();
            var ageDate = new Date(time);
            var anos = Math.abs(ageDate.getUTCFullYear() - 1970);
            var obj;
            if (anos >= 21) {
                this.decision = true;
                obj = "[{maior21:true}]";
                this.output21 = obj;
            }
            else {
                this.decision = false;
                obj = "[{maior21:false}]";
                this.output21 = obj;
            }
        }
    };
    QrCodePage.prototype.infoArray = function () {
        if (this.items != undefined) {
            var jstr = '[{site:"http://dev-ionicus.herokuapp.com/users/' + this.key + '"}]';
            this.allinfo = jstr;
        }
    };
    QrCodePage.prototype.toggleAllInfo = function () {
        var _this = this;
        this.infoArray();
        if (this.showAll) {
            this.showAll = false;
        }
        else {
            this.showAll = true;
            this.navParams.get('storage').get('history').then(function (val) {
                var array = val;
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1;
                var yyyy = today.getFullYear();
                var dds, mms, todays;
                todays = dd + '/' + mm + '/' + yyyy;
                val.unshift({ hdr: "Toda a informação", cnt: "Mostrei toda a minha informação.", date: todays });
                _this.navParams.get('storage').set('history', val);
            });
        }
    };
    QrCodePage.prototype.toggle18 = function () {
        var _this = this;
        this.createJSON18();
        if (this.show18) {
            this.show18 = false;
        }
        else {
            this.show18 = true;
            this.navParams.get('storage').get('history').then(function (val) {
                var array = val;
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1;
                var yyyy = today.getFullYear();
                var todays;
                todays = dd + '/' + mm + '/' + yyyy;
                var bool;
                if (_this.decision)
                    bool = " não tinha ";
                else
                    bool = " tinha ";
                val.unshift({ hdr: "Maior do que 18 anos", cnt: "Mostrei que" + bool + "mais de 18 anos.", date: todays });
                _this.navParams.get('storage').set('history', val);
            });
        }
    };
    QrCodePage.prototype.toggle21 = function () {
        var _this = this;
        this.createJSON21();
        if (this.show21) {
            this.show21 = false;
        }
        else {
            this.show21 = true;
            this.navParams.get('storage').get('history').then(function (val) {
                var array = val;
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1;
                var yyyy = today.getFullYear();
                var todays;
                todays = dd + '/' + mm + '/' + yyyy;
                var bool;
                if (_this.decision)
                    bool = " não tinha ";
                else
                    bool = " tinha ";
                val.unshift({ hdr: "Maior do que 21 anos", cnt: "Mostrei que" + bool + "mais de 21 anos.", date: todays });
                _this.navParams.get('storage').set('history', val);
            });
        }
    };
    QrCodePage.prototype.ngOnInit = function () {
        var _this = this;
        this.navParams.get('storage').get('key').then(function (val) {
            _this.key = val;
            _this.navParams.get('storage').get('token').then(function (val2) {
                _this.token = val2;
                _this.getPosts();
            });
        });
    };
    QrCodePage.prototype.getPosts = function () {
        var _this = this;
        this.homeService.getPosts(this.key, this.token).subscribe(function (response) {
            _this.items = response;
        });
    };
    QrCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'qrcode',template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/qrcode/qrcode.html"*/'<ion-header>\n    <ion-navbar color="favorite">\n      <ion-title text-center>\n          QR\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class="card">\n      <button (click)="toggleAllInfo()" ion-button block style="background-color: #ffffff; color: #000000">{{showAll ? "Partilhar toda a informação" : "Partilhar toda a informação"}}</button>\n      <div *ngIf="showAll">\n        <ngx-qrcode [qrc-value]="allinfo" [qrc-version]=5 qrc-errorCorrectionLevel = "L"></ngx-qrcode>\n      </div>\n    </div>\n    <div class="card">\n      <button (click)="toggle18()" ion-button block style="background-color: #ffffff; color: #000000">{{show18 ? "Sou maior de 18" : "Sou maior de 18"}}</button>\n      <div *ngIf="show18">\n        <ngx-qrcode [qrc-value]="output18"></ngx-qrcode>\n      </div>\n    </div>\n    <div class="card">\n      <button (click)="toggle21()" ion-button block style="background-color: #ffffff; color: #000000">{{show21 ? "Sou maior de 21" : "Sou maior de 21"}}</button>\n      <div *ngIf="show21">\n        <ngx-qrcode [qrc-value]="output21"></ngx-qrcode>\n      </div>\n    </div>\n  </ion-content>\n  '/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/qrcode/qrcode.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], QrCodePage);
    return QrCodePage;
}());

//# sourceMappingURL=qrcode.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qrcode_qrcode__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_history__ = __webpack_require__(365);
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
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__qrcode_qrcode__["a" /* QrCodePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__history_history__["a" /* HistoryPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
        this.tabParams = {
            storage: this.navParams.get('storage')
        };
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/tabs/tabs.html"*/'<ion-tabs color="favorite">\n  <ion-tab [root]="tab1Root" [rootParams]="tabParams" tabTitle="Início" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" [rootParams]="tabParams" tabTitle="QR" tabIcon="qr-scanner"></ion-tab>\n  <ion-tab [root]="tab3Root" [rootParams]="tabParams" tabTitle="Histórico" tabIcon="paper"></ion-tab>\n  <ion-tab [root]="tab4Root" [rootParams]="tabParams" tabTitle="Definições" tabIcon="construct"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.navParams.get('storage').get('history').then(function (val) {
            _this.history = val;
        });
    };
    HistoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navParams.get('storage').get('history').then(function (val) {
            _this.history = val;
        });
    };
    HistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.navParams.get('storage').get('history').then(function (val) {
            _this.history = val;
        });
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
<<<<<<< HEAD
            selector: 'history',template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/history/history.html"*/'<ion-header>\n    <ion-navbar color="favorite">\n      <ion-title text-center>\n          Histórico\n      </ion-title>\n    </ion-navbar>\n</ion-header>\n  \n<ion-content padding>\n    <div *ngIf="history != undefined">\n        <p class="item" *ngFor="let item of history">\n            {{item}}\n        </p>\n    </div>\n</ion-content>\n  '/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/history/history.html"*/
=======
            selector: 'page-history',template:/*ion-inline-start:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/Ionicus/src/pages/history/history.html"*/'<ion-header>\n    <ion-navbar color="favorite">\n      <ion-title text-center>\n          Histórico\n      </ion-title>\n    </ion-navbar>\n</ion-header>\n  \n<ion-content padding>\n    <div *ngIf="history !== undefined">\n        <div *ngFor="let item of history">\n            <ion-card>\n              <ion-note item-end>\n                {{item.date}}\n              </ion-note>\n              <ion-card-header>\n                {{item.hdr}}\n              </ion-card-header>\n              <ion-card-content>\n                {{item.cnt}}\n              </ion-card-content>\n            </ion-card>\n        </div>\n      </div>\n</ion-content>\n  '/*ion-inline-end:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/Ionicus/src/pages/history/history.html"*/,
>>>>>>> 5a9372b585a8cb29ca1f3e38b44b08095784fc32
=======
            selector: 'page-history',template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/history/history.html"*/'<ion-header>\n    <ion-navbar color="favorite">\n      <ion-title text-center>\n          Histórico\n      </ion-title>\n    </ion-navbar>\n</ion-header>\n  \n<ion-content padding>\n    <div *ngIf="history !== undefined">\n        <div *ngFor="let item of history">\n            <ion-card>\n              <ion-note item-end>\n                {{item.date}}\n              </ion-note>\n              <ion-card-header>\n                {{item.hdr}}\n              </ion-card-header>\n              <ion-card-content>\n                {{item.cnt}}\n              </ion-card-content>\n            </ion-card>\n        </div>\n      </div>\n</ion-content>\n  '/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/history/history.html"*/,
>>>>>>> dc3fa88483a68ab37704a93d7fbe39f2d1a79fa2
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_home_service__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KeyPage = /** @class */ (function () {
    function KeyPage(navCtrl, storage, homeService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.homeService = homeService;
        this.alertCtrl = alertCtrl;
        this.show = false;
    }
    KeyPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('key').then(function (pwd) {
            if (pwd) {
                _this.storage.get('token').then(function (pwd2) {
                    if (pwd2) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], {
                            storage: _this.storage
                        });
                    }
                    else {
                        _this.showT = true;
                    }
                });
            }
            else {
                _this.show = true;
            }
        });
    };
    KeyPage.prototype.toggleKey = function () {
        var _this = this;
        if (this.key != undefined) {
            this.homeService.getToken(this.key).subscribe(function (response) {
                _this.error = response;
                if (_this.error.status == "error") {
                    var alert_1 = _this.alertCtrl.create({
                        title: "ERRO",
                        subTitle: "Chave única errada",
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'ok'
                            }
                        ]
                    });
                    alert_1.present();
                }
                else {
                    _this.show = false;
                    _this.showT = true;
                }
            });
        }
    };
    KeyPage.prototype.toggleBC = function () {
        this.show = true;
        this.showT = false;
    };
    KeyPage.prototype.toggleToken = function () {
        var _this = this;
        if ((this.key != undefined) && (this.token != undefined)) {
            this.homeService.getPosts(this.key, this.token).subscribe(function (response) {
                _this.item = response;
                console.log(_this.item.status);
                if (_this.item.status == "error") {
                    var alert_2 = _this.alertCtrl.create({
                        title: "ERRO",
                        subTitle: "Token errado",
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'ok'
                            }
                        ]
                    });
                    alert_2.present();
                }
                else {
                    var array = [];
                    _this.storage.set('key', _this.key);
                    _this.storage.set('history', array);
                    _this.storage.set('token', _this.token);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], {
                        storage: _this.storage
                    });
                }
            });
        }
    };
    KeyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'key',template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/key/key.html"*/'<ion-header>\n    <ion-navbar color="favorite">\n      <ion-title text-center>\n          Chave Móvel Digital\n      </ion-title>\n    </ion-navbar>\n</ion-header>\n  \n<ion-content padding>\n  <form *ngIf="show" (ngSubmit)="toggleKey()">\n      <ion-item>\n        <ion-label>Chave Móvel Digital:</ion-label>\n        <ion-textarea [(ngModel)]="key" name="key"></ion-textarea>\n      </ion-item>\n      <button ion-button type="submit" block style="background-color: #32db64;">Confirmar</button>\n  </form>\n  <form *ngIf="showT" (ngSubmit)="toggleToken()">\n      <ion-item>\n        <ion-label>Token:</ion-label>\n        <ion-textarea [(ngModel)]="token" name="token"></ion-textarea>\n      </ion-item>\n      <button ion-button type="submit" block style="background-color: #32db64;">Confirmar</button>\n  </form>\n</ion-content>\n  '/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/key/key.html"*/
=======
            selector: 'key',template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/key/key.html"*/'<ion-header>\n    <ion-navbar color="favorite">\n      <ion-title text-center>\n          Chave Móvel Digital\n      </ion-title>\n    </ion-navbar>\n</ion-header>\n  \n<ion-content padding>\n  <form *ngIf="show" (ngSubmit)="toggleKey()">\n      <ion-item>\n        <ion-label>Chave Móvel Digital:</ion-label>\n        <ion-textarea [(ngModel)]="key" name="key"></ion-textarea>\n      </ion-item>\n      <button ion-button type="submit" block style="background-color: #32db64;">Confirmar</button>\n  </form>\n  <div *ngIf="showT">\n    <form (ngSubmit)="toggleToken()">\n        <ion-item>\n          <ion-label>Token:</ion-label>\n          <ion-textarea [(ngModel)]="token" name="token"></ion-textarea>\n        </ion-item>\n        <button ion-button type="submit" block style="background-color: #32db64;">Confirmar</button>\n    </form>\n    <form (ngSubmit)="toggleBC()">\n        <button ion-button type="submit" block style="background-color: #32db64;">Voltar Atrás</button>\n    </form>\n    </div>\n</ion-content>\n  '/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/key/key.html"*/
>>>>>>> dc3fa88483a68ab37704a93d7fbe39f2d1a79fa2
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__app_services_home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], KeyPage);
    return KeyPage;
}());

//# sourceMappingURL=key.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Splash = /** @class */ (function () {
    function Splash(viewCtrl, splashScreen) {
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    Splash.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 4000);
    };
    Splash = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/splash/splash.html"*/'<ion-content>\n    <table>\n        <tr><img src="assets/imgs/imt.png"></tr>\n        <tr><img src="assets/imgs/incm.png"></tr>\n        <tr><img src="assets/imgs/uminho.png"></tr>\n        <tr><img src="assets/imgs/unu-egov.png"></tr>\n    </table>\n</ion-content>'/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Splash);
    return Splash;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__key_key__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_pincode_input_dist__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(95);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pincodeCtrl = pincodeCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.faio = faio;
        this.storage.get('faio').then(function (fid) {
            if (fid !== undefined) {
                console.log("FAIO IS SET");
                console.log(fid);
                _this.id = fid;
            }
            else {
                console.log("SET FAIO FALSE");
                _this.storage.set('faio', false);
            }
        })
            .catch(function (error) { return console.log(error); });
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
                // Go to key page
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__key_key__["a" /* KeyPage */], {
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
        this.storage.set('first', true);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__key_key__["a" /* KeyPage */], {
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__key_key__["a" /* KeyPage */], {
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
            selector: 'page-lockscreen',template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/lock-screen/lock-screen.html"*/'<!--\n  Generated template for the LockScreenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="favorite">\n      <ion-title text-center>\n        Carta de Condução\n      </ion-title>\n    </ion-navbar>\n</ion-header>\n  \n  <ion-content padding>\n      <!--<h4 text-center>Insira o seu PIN</h4> -->\n    <div class="pin-container">\n      <button ion-button icon-only full (click)="openPinCode(false)" style="background-color: #32db64;">\n        <ion-icon name="lock"></ion-icon>\n      </button>\n        <button ion-button icon-only full *ngIf="id" (click)="startTouchID()" style="background-color: #32db64;">\n          <ion-icon name="finger-print"></ion-icon>\n        </button>\n    </div>  \n  </ion-content>\n'/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/pages/lock-screen/lock-screen.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic2_pincode_input_dist__["PincodeController"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]])
    ], LockScreenPage);
    return LockScreenPage;
}());

//# sourceMappingURL=lock-screen.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(382);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_qrcode_qrcode__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_key_key__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_history_history__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_lock_screen_lock_screen__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic2_pincode_input__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_fingerprint_aio__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_qrcode2__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_barcode_scanner__ = __webpack_require__(757);
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
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_lock_screen_lock_screen__["a" /* LockScreenPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_key_key__["a" /* KeyPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_qrcode_qrcode__["a" /* QrCodePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18_ionic2_pincode_input__["PincodeInputModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_20_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_lock_screen_lock_screen__["a" /* LockScreenPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_key_key__["a" /* KeyPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_qrcode_qrcode__["a" /* QrCodePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_lock_screen_lock_screen__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_splash_splash__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_home_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(164);
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
    function MyApp(platform, statusBar, splashScreen, modalCtrl) {
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
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_splash_splash__["a" /* Splash */]);
            splash.present();
            //splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/asac/Desktop/asac/Experiments/ionic/Ionicus/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_home_service__["a" /* HomeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(419);
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
        this.baseUrl = 'http://dev-ionicus.herokuapp.com/';
    }
    HomeService.prototype.getPosts = function (key, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.baseUrl + "users/" + key, options)
            .map(function (res) { return res.json(); });
    };
    HomeService.prototype.getURL = function () {
        return this.baseUrl;
    };
    HomeService.prototype.getToken = function (key) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify({
            pin: key
        });
        new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'auth/login', data, options)
                .toPromise()
                .then(function (response) {
                console.log('API Response : ', response.json());
                resolve(response.json());
            })
                .catch(function (error) {
                console.error('API Error : ', error.status);
                console.error('API Error : ', JSON.stringify(error));
                reject(error.json());
            });
        });
        return this.http.post(this.baseUrl + 'auth/login', data, options)
            .map(function (res) { return res.json(); });
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HomeService);
    return HomeService;
}());

//# sourceMappingURL=home.service.js.map

/***/ })

},[377]);
//# sourceMappingURL=main.js.map