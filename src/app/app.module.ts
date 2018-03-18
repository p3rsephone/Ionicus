import { HomePage } from './../pages/home/home';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage'

import { MyApp } from './app.component';
import { LockScreenPage } from '../pages/lock-screen/lock-screen';
import { PincodeInputModule } from 'ionic2-pincode-input';
import {FingerprintAIO} from "@ionic-native/fingerprint-aio";

@NgModule({
  declarations: [
    MyApp,
    LockScreenPage,
    HomePage
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    PincodeInputModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LockScreenPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FingerprintAIO,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
