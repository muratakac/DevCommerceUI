import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationService {
  url = "http://localhost:57443/api/account/";
  token: string;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };

    return this.http
      .post<any>(this.url + "Login", {
        username: username,
        password: password
      }, httpOptions)
      .map(user => {
        // if (user && user.token) {
        if (user) {
          localStorage.setItem("currentUser", JSON.stringify(user));
        }

        return user;
      });
  }

  logout() {
    localStorage.removeItem("currentUser");
  }

  createToken() {
    return this.http.post(this.url + "GetToken",
      {
        "CompanyName": "CodeDev",
        "ProjectName": "Commerce",
        "TokenKey": "Admin",
        "TokenValue": "Admin123"
      },
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'
      }
    ).map(token => {
      if (token) {
        this.token =  'Bearer ' + token.replace('"', '');
        localStorage.setItem("token", this.token);
      }
    });
  }
}
