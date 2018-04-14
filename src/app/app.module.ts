import { HomePage } from './../pages/home/home';
import { SettingsPage } from './../pages/settings/settings';
import { QrCodePage } from './../pages/qrcode/qrcode';
import { TabsPage } from './../pages/tabs/tabs';
import { KeyPage } from './../pages/key/key';
import { HistoryPage } from './../pages/history/history';
import { Splash } from './../pages/splash/splash';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage'
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MyApp } from './app.component';
import { LockScreenPage } from '../pages/lock-screen/lock-screen';
import { PincodeInputModule } from 'ionic2-pincode-input';
import {FingerprintAIO} from "@ionic-native/fingerprint-aio";

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    LockScreenPage,
    HomePage,
    KeyPage,
    Splash,
    SettingsPage,
    HistoryPage,
    QrCodePage,
    TabsPage
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    PincodeInputModule,
    HttpClientModule,
    HttpModule,
    NgxQRCodeModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LockScreenPage,
    HomePage,
    KeyPage,
    Splash,
    SettingsPage,
    HistoryPage,
    QrCodePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    FingerprintAIO,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
