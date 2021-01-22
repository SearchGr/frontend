import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {LoginComponent} from '../app/login/login.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'search', component: SearchComponent},
  { path: '', redirectTo: '/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
