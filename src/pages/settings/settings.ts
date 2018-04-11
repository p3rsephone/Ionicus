import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navParams: NavParams, public navCtrl: NavController) {

  }

  toggleReset(){
    this.navParams.get('storage').set('key',null);
  }

}
