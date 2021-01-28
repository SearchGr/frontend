import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  username = undefined;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUsername().then(result => this.username = result['username'])
  }
}
