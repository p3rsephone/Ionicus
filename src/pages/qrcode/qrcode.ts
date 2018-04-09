import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from '../../app/services/home.service';

@Component({
  selector: 'qrcode',
  templateUrl: 'qrcode.html'
})
export class QrCodePage {
  items: any;

  constructor(public navCtrl: NavController, private homeService: HomeService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.homeService.getPosts().subscribe(response => {
        this.items =response.data;
    });
  }
}
