import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {properties} from '../app.properties';


const httpOptions = {
  withCredentials: true,
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'charset': 'UTF-8',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public isUserAuthorized() {
    let url = properties.serverUrl + "/checkAuthorization";
    let isAuthorized = true;
    this.http.get<any>(url, httpOptions)
      .toPromise()
      .then(response => isAuthorized = response['authorized']);
    return isAuthorized;
  }

  public getUsername(){
    return this.http.get<any>(properties.serverUrl + '/profile/username', httpOptions).toPromise();
  }
}
