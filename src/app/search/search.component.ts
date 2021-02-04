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
  searchUrl = properties.serverUrl + '/getPhotos';
  images = [{ path: 'PATH_TO_IMAGE' }];
  isUsernameReady = false;
  loading = false;

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
    if (this.searchKey && this.searchKey.trim() != '') {
      this.loading = true;
      this.http.get<any>(this.searchUrl + "?key=" + this.searchKey, httpOptions)
        .toPromise()
        .then(result => {
          this.mediaUrls = result['media_urls'];
          this.firstSearch = false;
          this.loading = false;
        });
    }
  }

  public isResultEmpty() {
    if (this.firstSearch == false && this.mediaUrls == undefined)
      return true;
    return false;
  }

}
