import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class HomeService{
    http:any;
    baseUrl:String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'http://ionicos-dev.herokuapp.com/user/';
    }

    getPosts(key){
        return this.http.get(this.baseUrl+key)
            .map(res => res.json());
    }

    getURL(){
        return this.baseUrl;
    }
}