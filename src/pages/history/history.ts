import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  history: any;

  constructor(public navParams: NavParams, public navCtrl: NavController) {

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
