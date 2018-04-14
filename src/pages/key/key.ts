import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from './../tabs/tabs';
import { HomeService } from '../../app/services/home.service';

@Component({
  selector: 'key',
  templateUrl: 'key.html'
})
export class KeyPage {
  key: any;
  token: any;
  show: boolean;
  showT: boolean;

  constructor(public navCtrl: NavController, private storage: Storage, private homeService: HomeService) {
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
      this.showT=true;
      this.show=false;
      this.homeService.getToken(this.key);
    }
  }

  toggleToken(){
    if((this.key != undefined) && (this.token != undefined)){
        var array = [];
        this.storage.set('key', this.key);
        this.storage.set('history', array);
        this.storage.set('token', this.token);
        this.navCtrl.setRoot(TabsPage,{
          storage: this.storage
        });
    }
  }
}
