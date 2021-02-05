import { Component, OnInit } from '@angular/core';
import { SearchGrApiService } from '../searchgr-api.service';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out',
              style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 300, opacity: 1 }),
            animate('1s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class SearchComponent implements OnInit {
  username = '';
  searchKey = '';
  mediaList = [];
  mediaUserUrls = [];

  flags = {
    isUsernameReady: false,
    processingUserMedia: true,
    firstSearch: true,
    searchLoading: false
  }

  progressData = {
    percentage: 0,
    subtitle: 'Processing user profile'
  }

  constructor(private searchGrApiService: SearchGrApiService) { }

  ngOnInit(): void {
    this.searchGrApiService.updateProfile();
    this.searchGrApiService.getUsername()
      .then(result => {
        this.username = result['username'];
        this.flags.isUsernameReady = true;
        this.handleProgressircle();
      })
      .catch(() => this.flags.isUsernameReady = true);
  }

  public sendSearchKey() {
    if (this.searchKey && this.searchKey.trim() != '') {
      this.flags.searchLoading = true;
      this.searchGrApiService.getPhotos(this.searchKey)
        .then(result => {
          this.mediaList = result;
          console.log(this.mediaList);
          this.flags.firstSearch = false;
          this.flags.searchLoading = false;
        })
        .catch(() => this.flags.searchLoading = false);
    }
  }

  public isResultEmpty() {
    if (this.flags.firstSearch == false && this.flags.searchLoading === false && this.mediaList.length === 0)
      return true;
    return false;
  }

  public getLogoutUrl() {
    return this.searchGrApiService.getLogoutUrl();
  }

  private async handleProgressircle() {
    this.searchGrApiService.getProfileProgress()
      .then(
        result => {
          this.progressData.percentage = result['percentage'];
          setTimeout(() => {
            if (this.progressData.percentage !== 100) {
              this.handleProgressircle();
            } else {
              this.flags.processingUserMedia = false;
            }
          },
            3000);
        });
  }

}
