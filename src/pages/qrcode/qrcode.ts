import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HomeService } from '../../app/services/home.service';

@Component({
  selector: 'qrcode',
  templateUrl: 'qrcode.html'
})
export class QrCodePage {
  items: any;
  showAll: boolean;
  show18: boolean;
  show21: boolean;
  output18: any;
  output21: any;
  allinfo: any;
  key: any;
  token: any;

  constructor(public navCtrl: NavController, private homeService: HomeService, private navParams: NavParams) {
    this.showAll=false;
    this.show18=false;
    this.show21=false;
  }

  createJSON18(){
    if(this.items!=undefined){
      var data = this.items.birthday.split("-", 3);
      var d = new Date(Date.parse(data[1]+"/"+data[2]+"/"+data[0]));
      var time = (new Date().getTime()) - d.getTime();
      var ageDate = new Date(time);
      var anos = Math.abs(ageDate.getUTCFullYear() - 1970);
      console.log(anos);
      var obj;
      
      if(anos>=18){
        obj = "[{maior18:true}]";
        this.output18 = obj;
      }
      else{
        obj  = "[{maior18:false}]";
        this.output18 = obj;
      }
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

      if(anos>=21){
        obj = "[{maior21:true}]";
        this.output21 = obj;
      }
      else{
        obj = "[{maior21:false}]";
        this.output21 = obj;
      }
    }
  }

  infoArray(){
    if(this.items!=undefined){
      var jstr = '[{site:"http://dev-ionicus.herokuapp.com/users/'+ this.key +'"}]';
      this.allinfo = jstr;
    }
  }

  toggleAllInfo(){
    this.infoArray();
    if(this.showAll){
      this.showAll=false;
    }
    else{
      this.showAll=true;
      this.navParams.get('storage').get('history').then((val) => {
        var array = val;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        var dds, mms, todays;
        if(dd<10) {
            dds = '0'+dd
        } 
        if(mm<10) {
            mms = '0'+mm
        } 
        todays = mm + '/' + dd + '/' + yyyy;
        val.unshift("Mostrei a minha informação toda no dia " + todays);
        this.navParams.get('storage').set('history', val);
      });
    }
  }

  toggle18(){
    this.createJSON18();
    if(this.show18){
      this.show18=false;
    }
    else{
      this.show18=true;
      this.navParams.get('storage').get('history').then((val) => {
        var array = val;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        var dds, mms, todays;
        if(dd<10) {
            dds = '0'+dd
        } 
        if(mm<10) {
            mms = '0'+mm
        } 
        todays = mm + '/' + dd + '/' + yyyy;
        val.unshift("Mostrei que tinha mais de 18 anos no dia " + todays);
        this.navParams.get('storage').set('history', val);
      });
    }
  }

  toggle21(){
    this.createJSON21();
    if(this.show21){
      this.show21=false;
    }
    else{
      this.show21=true;
      this.navParams.get('storage').get('history').then((val) => {
        var array = val;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        var dds, mms, todays;
        if(dd<10) {
            dds = '0'+dd
        } 
        if(mm<10) {
            mms = '0'+mm
        } 
        todays = mm + '/' + dd + '/' + yyyy;
        val.unshift("Mostrei que tinha mais de 21 anos no dia " + todays);
        this.navParams.get('storage').set('history', val);
      });
    }
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
    this.homeService.getPosts(this.key, this.token).subscribe(response => {
        this.items =response;
    });
  }
}
