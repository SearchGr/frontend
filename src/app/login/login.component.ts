import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {

    //this.router.navigate(["/search"]);
  }

}
