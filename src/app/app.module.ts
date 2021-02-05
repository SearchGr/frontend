import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IvyCarouselModule,
    NgCircleProgressModule.forRoot({
      radius: 120,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#ad00d8',
      innerStrokeColor: '#ca5ce6',
      unitsFontSize: '26',
      titleFontSize: '26',
      animation: true,
      animationDuration: 300,
      startFromZero: false,
      renderOnClick: false
    }),
    BrowserAnimationsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
