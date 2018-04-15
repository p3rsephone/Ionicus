import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from './../tabs/tabs';
import { HomeService } from '../../app/services/home.service';
import { Response } from '@angular/http';

@Component({
  selector: 'key',
  templateUrl: 'key.html'
})
export class KeyPage {
  key: any;
  token: any;
  show: boolean;
  showT: boolean;
  item: any;
  error: any;

  constructor(public navCtrl: NavController, private storage: Storage, private homeService: HomeService, public alertCtrl: AlertController) {
    this.show=false;
  }

  ngOnInit(){
      this.storage.get('key').then(pwd=> {
        if(pwd){
          this.storage.get('token').then(pwd2 => {
            if(pwd2){
              this.navCtrl.setRoot(TabsPage,{
                storage: this.storage
              });
            }
            else{
              this.showT=true;
            }
          });
        }
        else{
          this.show=true;
        }
      });
  }

  toggleKey(){
    if(this.key != undefined){
      this.homeService.getToken(this.key).subscribe(response => {
        this.error=response;
        if(this.error.status == "error"){
          let alert = this.alertCtrl.create({
            title: "ERRO",
            subTitle: "Chave única errada",
            buttons: [
              {
                text:'Ok',
                role: 'ok'
              }
          ]
          });
          alert.present();
        }
        else{
          this.show=false;
          this.showT=true;
        }
      });
    }
  }
  
  toggleBC(){
    this.show=true;
    this.showT=false;
  }

  toggleToken(){
    if((this.key != undefined) && (this.token != undefined)){
      this.homeService.getPosts(this.key, this.token).subscribe(response => {
        this.item =response;
        console.log(this.item.status);
        if(this.item.status == "error"){
          let alert = this.alertCtrl.create({
            title: "ERRO",
            subTitle: "Token errado",
            buttons: [
              {
                text:'Ok',
                role: 'ok'
              }
          ]
          });
          alert.present();
        }
        else{
          var array = [];
          this.storage.set('key', this.key);
          this.storage.set('history', array);
          this.storage.set('token', this.token);
          this.navCtrl.setRoot(TabsPage,{
            storage: this.storage
          });
        }
        });
    }
  }
}
