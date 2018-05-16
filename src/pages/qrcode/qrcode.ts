import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HomeService } from '../../app/services/home.service';
import { QrPage } from '../qr/qr';

@Component({
  selector: 'qrcode',
  templateUrl: 'qrcode.html'
})
export class QrCodePage {
  items: any;
  alljson: any;
  output18: any;
  output21: any;
  allinfo: any;
  scasa: any;
  ecooltra: any;
  key: any;
  token: any;
  decision: boolean;

  constructor(public navCtrl: NavController, private homeService: HomeService, private navParams: NavParams) {
  }

  createJSON18(){
    if(this.items!=undefined){
      var data = this.items.birthday.split("-", 3);
      var d = new Date(Date.parse(data[1]+"/"+data[2]+"/"+data[0]));
      var time = (new Date().getTime()) - d.getTime();
      var ageDate = new Date(time);
      var anos = Math.abs(ageDate.getUTCFullYear() - 1970);
      var obj;
      
      this.decision = (anos>=18);
      obj = '[{"maior18":'+ this.decision + '}]';
      this.output18 = obj;
    }
  }

  createJSON21(){
    if(this.items!=undefined){
      var data = this.items.birthday.split("-", 3);
      var d = new Date(Date.parse(data[1]+"/"+data[2]+"/"+data[0]));
      var time = (new Date().getTime()) - d.getTime();
      var ageDate = new Date(time);
      var anos = Math.abs(ageDate.getUTCFullYear() - 1970);
      var obj

      this.decision = (anos>=21);
      obj = '[{"maior21":'+ this.decision +'}]';
      this.output21 = obj;
    }
  }

  infoArray(){
    if(this.items!=undefined){
      var jstr = '[{"site":"http://dev-ionicus.herokuapp.com/users/index/'+ this.key +'","token":"'+this.token+'"}]';
      this.allinfo = jstr;
    }
  }

  createJSONSC(){
    if(this.items!=undefined){
      var data = this.items.birthday.split("-", 3);
      var d = new Date(Date.parse(data[1]+"/"+data[2]+"/"+data[0]));
      var time = (new Date().getTime()) - d.getTime();
      var ageDate = new Date(time);
      var anos = Math.abs(ageDate.getUTCFullYear() - 1970);
      var obj;
      
      this.decision = (anos>=18);
      obj = '[{"santaCasa":'+ this.decision + '}]';
      this.scasa = obj;
    }
  }

  createJSONEC(){
    if(this.items!=undefined){
      var jstr = '[{"eCooltra":"alugar"}]';
      this.ecooltra = jstr;
    }
  }

  toggleAllInfo(){
    this.infoArray();
    
    this.navParams.get('storage').get('history').then((val) => {
      var array = val;
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      var dds, mms, todays;
      todays = dd + '/' + mm + '/' + yyyy;
      val.unshift({hdr: "Toda a informação", cnt: "Mostrei toda a minha informação.", date: todays});
      this.navParams.get('storage').set('history', val);

      this.navCtrl.push(QrPage, {
        qrData: this.allinfo,
        name: 'Toda a Informação'
      });
    });
  }

  toggle18(){
    this.createJSON18();
    
    this.navParams.get('storage').get('history').then((val) => {
      var array = val;
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      var todays;
      todays = dd + '/' + mm + '/' + yyyy;
      var bool;
      
      if (this.decision) bool = " tinha "
      else bool = " não posso "
      
      val.unshift({hdr: "Maior do que 18 anos", cnt: "Mostrei que"+bool+"mais de 18 anos.", date:todays});
      this.navParams.get('storage').set('history', val);

      this.navCtrl.push(QrPage, {
        qrData: this.output18,
        name: "Maior de 18"
      });
    });
  }

  toggle21(){
    this.createJSON21();
    this.navParams.get('storage').get('history').then((val) => {
      var array = val;
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      var todays;
      todays = dd + '/' + mm + '/' + yyyy;
      var bool;

      if (this.decision) bool = " tinha "
      else bool = " não posso "

      val.unshift({hdr: "Maior do que 21 anos", cnt: "Mostrei que"+bool+"mais de 21 anos.", date:todays});
      this.navParams.get('storage').set('history', val);

      this.navCtrl.push(QrPage, {
        qrData: this.output21,
        name: "Maior de 21"
      });
    });
  }

  toggleSC(){
    this.createJSONSC();
    this.navParams.get('storage').get('history').then((val) => {
      var array = val;
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      var todays;
      todays = dd + '/' + mm + '/' + yyyy;
      var bool;

      if (this.decision) bool = " posso "
      else bool = " não posso "

      val.unshift({hdr: "Jogar na Santa Casa", cnt: "Mostrei que"+bool+"jogar na Santa Casa.", date:todays});
      this.navParams.get('storage').set('history', val);

      this.navCtrl.push(QrPage, {
        qrData: this.scasa,
        name: "Santa Casa"
      });
    });
  }

  toggleEco(){
    this.createJSONEC();
    this.navParams.get('storage').get('history').then((val) => {
      var array = val;
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      var todays;
      todays = dd + '/' + mm + '/' + yyyy;

      val.unshift({hdr: "Alugar na eCooltra", cnt: "Mostrei que posso alugar na eCooltra.", date:todays});
      this.navParams.get('storage').set('history', val);

      this.navCtrl.push(QrPage, {
        qrData: this.ecooltra,
        name: "eCooltra"
      });
    });
  }

  ngOnInit() {
    this.navParams.get('storage').get('key').then((val) => {
      this.key= val;
      this.navParams.get('storage').get('token').then((val2) => {
        this.token=val2;
        this.navParams.get('storage').get('users').then( users =>{
          if(users){
            this.alljson =  users;
            this.getUser();
          }
          else{
            this.getPosts();
          }
        });
      });
    });
  }

  getPosts(){
    this.homeService.getPosts(this.key, this.token).subscribe(response => {
        this.alljson =response;
        this.getUser();
    });
  }

  getUser(){
    this.alljson.users.forEach(element => {
      if(element.secret == this.token) this.items=element;
    });
  }
}
