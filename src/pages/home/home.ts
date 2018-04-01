import { Component } from '@angular/core';
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
  items:any;
  category: any;
  limit:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private homeService: HomeService) {
    this.pincode = navParams.get('pincode');
    this.getDefaults();
  }

  ngOnInit() {
      this.getPosts(this.category,this.limit);
  }

  getPosts(category, limit){
      this.homeService.getPosts(category, limit).subscribe(response => {
          this.items =response.data;
      });
      console.log(this.items);
  }

  getDefaults(){
      this.category = 'sports';
      this.limit = 10;
  }

}
