import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SearchGrApiService } from './searchgr-api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private searchGrApiService: SearchGrApiService, private router: Router) { }
  canActivate(): boolean {
    this.searchGrApiService.isUserAuthorized()
      .then(isAuthorized => {
        if (!isAuthorized) {
          this.router.navigate(['home']);
        }
      });
    return true;
  }
}
