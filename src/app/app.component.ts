import { LockScreenPage } from './../pages/lock-screen/lock-screen';
import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { Splash } from '../pages/splash/splash';
import { HomeService } from './services/home.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
  providers: [HomeService]
})
export class MyApp {
  rootPage:any= LockScreenPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
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
      //let splash = modalCtrl.create(Splash);
      //splash.present();
      splashScreen.hide();
    });
  }
}

