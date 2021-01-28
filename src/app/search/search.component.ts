import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { properties } from '../../app.properties';


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
  logoutUrl = properties.serverUrl + '/logout';

  constructor(private http: HttpClient) { }

  public getUsername() {
    return this.http.get<any>(properties.serverUrl + '/profile/username', httpOptions).toPromise();
  }

  public sendSearchKey() {
    let url = properties.serverUrl + '/getPhotos' + "?key=" + this.searchKey;
    this.http.get<any>(url, httpOptions)
      .toPromise()
      .then(result => this.mediaUrls = result['media_urls']); 
    // if(this.mediaUrls != null){
    //   document.getElementById('photos-not-found').style.display = "none";
    // }
  }

  ngOnInit(): void {
    this.getUsername().then(result => this.username = result['username']);
  }
}
