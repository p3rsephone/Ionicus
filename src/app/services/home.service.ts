import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class HomeService{
    http:any;
    baseUrl:String;
    token: any;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'http://dev-ionicus.herokuapp.com/';
    }

    getPosts(key, token){
        let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Accept', 'application/json');
            headers.append('Authorization', 'Bearer ' + token);

        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.baseUrl+"users/"+key, options)
            .map(res => res.json());
    }

    getURL(){
        return this.baseUrl;
    }

    getToken(key){
        let headers = new Headers(
            {
              'Content-Type' : 'application/json'
            });
            let options = new RequestOptions({ headers: headers });
            
            let data = JSON.stringify({
              pin: key
            });

            return this.http.post(this.baseUrl+'auth/login', data, options)
                            .map(res => res.json());
    }
}