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
  constructor(private http: HttpClient) { }

  public getUsername() {
    return this.http.get<any>(properties.serverUrl + '/profile/username', httpOptions).toPromise();
  }

  public async sendSearchKey() {
    let url = properties.serverUrl + '/getPhotos' + "?key=" + this.searchKey;
    let result = await this.http.get<any>(url, httpOptions)
      .toPromise();
    // angular.forEach(result['media_url'],
    //   console.log(result['media_url'])
    // );
    console.log(result);

    // return JSON.parse(result);
    // return this.http.get<any>(url, httpOptions).toPromise();
  }

  ngOnInit(): void {
    this.getUsername().then(result => this.username = result['username']);
  }
}
