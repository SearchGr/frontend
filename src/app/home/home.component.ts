import { Component } from '@angular/core';
import { SearchGrApiService } from '../searchgr-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  username = undefined;
  isDataReady = false;

  constructor(public searchGrApiService: SearchGrApiService) {
    this.searchGrApiService.getUsername()
      .then(result => {
        this.username = result['username'];
        this.isDataReady = true;
      })
      .catch(() => this.isDataReady = true);
  }

}
