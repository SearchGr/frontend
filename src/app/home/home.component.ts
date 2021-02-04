import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  username = undefined;
  isDataReady = false;

  constructor(public authService: AuthService) {
    this.authService.getUsername()
      .then(result => {
        this.username = result['username'];
        this.isDataReady = true;
      })
      .catch(() => this.isDataReady = true);
  }

}
