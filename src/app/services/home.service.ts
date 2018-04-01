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
        this.baseUrl = 'https://ionicus.herokuapp.com/user/1';
    }

    getPosts(category, limit){
        return this.http.get(this.baseUrl)
            .map(res => res.json());
    }
}