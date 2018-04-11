import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from './../tabs/tabs';

@Component({
  selector: 'key',
  templateUrl: 'key.html'
})
export class KeyPage {
  key: any;
  show: boolean;

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.show=false;
  }

  ngOnInit(){
      this.storage.get('key').then(pwd=> {
        if(pwd){
          this.navCtrl.setRoot(TabsPage,{
            storage: this.storage
          });
        }
        else{
          this.show=true;
        }
      });
  }

  toggleKey(){
    if(this.key != undefined){
      this.storage.set('key', this.key);
      this.navCtrl.setRoot(TabsPage,{
        storage: this.storage
      });
    }
  }
}
