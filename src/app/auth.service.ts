import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { properties } from '../app.properties';


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

  public async isUserAuthorized() {
    let url = properties.serverUrl + "/checkAuthorization";
    let isAuthorized = false;
    await this.http.get<any>(url, httpOptions)
      .toPromise()
      .then(response => isAuthorized = response['authorized'])
      .catch(() => isAuthorized = false);
    return isAuthorized;
  }

  public getUsername() {
    return this.http.get<any>(properties.serverUrl + '/profile/username', httpOptions).toPromise();
  }

  public updateProfile() {
    return this.http.get<any>(properties.serverUrl + '/profile/update', httpOptions).toPromise();
  }

  public getProfileProgress() {
    return this.http.get<any>(properties.serverUrl + '/profile/progress', httpOptions).toPromise();
  }

  public getPhotos(searchKey: string) {
    return this.http.get<any>(properties.serverUrl + '/photos?key=' + searchKey, httpOptions).toPromise();
  }

  public getLogoutUrl() {
    return properties.serverUrl + '/logout';
  }
}
