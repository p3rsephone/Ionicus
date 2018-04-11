import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { HomeService } from '../../app/services/home.service';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public pincode: string;
  item: any;
  key: any;
  show1: boolean;
  show2: boolean;
  tfront: boolean;
  tback: boolean;

  constructor(public plt: Platform, public navCtrl: NavController, public navParams: NavParams, private homeService: HomeService) {
    this.show1=true;
    this.show2=false;
    this.tfront=true;
    this.tback=false;
  }

  ngOnInit() {
      this.navParams.get('storage').get('key').then((val) => {
        this.key= val;
        this.getPosts();
      });
  }

  getPosts(){
      this.homeService.getPosts(this.key).subscribe(response => {
          this.item =response;
      });
  }

  toggleB1(){
    this.show1=true;
    this.show2=false;
  }

  toggleB2(){
    this.show1=false;
    this.show2=true;
  }

  toggleTB(){
    this.tfront=false;
    this.tback=true;
  }

  toggleTF(){
    this.tback=false;
    this.tfront=true;
  }
}
