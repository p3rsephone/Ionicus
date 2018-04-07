import { Component } from '@angular/core';

import { QrCodePage } from '../qrcode/qrcode';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = QrCodePage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
