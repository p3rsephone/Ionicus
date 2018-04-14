import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomeService } from '../../app/services/home.service';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item: any;
  key: any;
  show1: boolean;
  show2: boolean;
  tfront: boolean;
  tback: boolean;
  token: any;
  photo: any;
  ass: any;
  loading: any;

  constructor(public loadingCtrl: LoadingController, public plt: Platform, public navCtrl: NavController, 
    public sanitizer: DomSanitizer, public navParams: NavParams, private homeService: HomeService) {
    this.show1=true;
    this.show2=false;
    this.tfront=true;
    this.tback=false;
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });
  }

  ngOnInit() {
      this.navParams.get('storage').get('key').then((val) => {
        this.key= val;
        this.navParams.get('storage').get('token').then((val2) => {
          this.token=val2;
          this.getPosts();
        });
      });
  }

  getPosts(){
      this.loading.present();
      this.homeService.getPosts(this.key, this.token).subscribe(response => {
          this.item =response;
          this.getPhoto();
          this.getAss();
          this.loading.dismiss();
        });
  }

  getPhoto(){
    this.photo=this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.item.photo);
  }

  getAss(){
    this.ass=this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.item.ass);
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
