import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  history: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.navParams.get('storage').get('history').then((val) => {
      this.history=val;
    });
  }

  ionViewDidLoad(){
    this.navParams.get('storage').get('history').then((val) => {
      this.history=val;
    });
  }

  ngOnInit(){
    this.navParams.get('storage').get('history').then((val) => {
      this.history=val;
    });
  }
}
