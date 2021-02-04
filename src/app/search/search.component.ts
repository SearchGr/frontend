import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { properties } from '../../app.properties';
import { AuthService } from '../auth.service';


const httpOptions = {
  withCredentials: true,
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'charset': 'UTF-8',
    'credentials': 'include'
  })
};

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  username = '';
  searchKey = '';
  mediaUrls = [];
  mediaUserUrls = [];
  firstSearch = true;
  logoutUrl = properties.serverUrl + '/logout';
  images = [{ path: 'PATH_TO_IMAGE' }];
  isUsernameReady = false;

  constructor(private http: HttpClient, public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUsername()
      .then(result => {
        this.username = result['username'];
        this.isUsernameReady = true;
      })
      .catch(() => this.isUsernameReady = true);
  }

  public sendSearchKey() {
    let url = properties.serverUrl + '/getPhotos' + "?key=" + this.searchKey;
    this.http.get<any>(url, httpOptions)
      .toPromise()
      .then(result => {
        this.mediaUrls = result['media_urls'];
        this.firstSearch = false;
      });
  }

  public printEmptyResult() {
    console.log("checking")
    console.log("first search " + this.firstSearch + "   media urls " + this.mediaUrls);
    if (this.firstSearch == false && this.mediaUrls == undefined)
      return true;
    return false;
  }

}
