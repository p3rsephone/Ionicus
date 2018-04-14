import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { QrCodePage } from '../qrcode/qrcode';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { HistoryPage } from '../history/history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = QrCodePage;
  tab3Root = HistoryPage;
  tab4Root = SettingsPage;
  tabParams = {
    storage: this.navParams.get('storage')
  }

  constructor(public navParams: NavParams) {
  }
}
