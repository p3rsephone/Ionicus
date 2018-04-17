import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'qr',
  templateUrl: 'qr.html'
})
export class QrPage {
  qrData: any;
  name: any;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
  }

  ngOnInit(){
    this.name = this.navParams.get('name');
    this.qrData = this.navParams.get('qrData');
  }

}