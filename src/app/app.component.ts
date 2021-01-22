import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import {CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private authService: AuthService, private cookieService: CookieService) { }
  title = 'testingApp';

  ngOnInit() {
    console.log("entering on init");
    console.log(this.cookieService.get('cookieName'));
    this.authService.requesteSet();
    this.authService.viewRequest();
  }
}
