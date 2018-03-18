import { LockScreenPage } from './../pages/lock-screen/lock-screen';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any= LockScreenPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
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
}

