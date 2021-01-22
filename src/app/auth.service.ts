import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';

const httpOptions = {
  withCredentials: true,
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'charset': 'UTF-8',

    })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public requesteSet(){
    let url = "http://localhost:8000/";
    console.log("first request");
    return this.http.get<any>(url, httpOptions).toPromise();
  }

  public viewRequest(){
    let url = "http://localhost:8000/print";
    console.log("first request");
    return this.http.get<any>(url, httpOptions).toPromise();
  }
}
