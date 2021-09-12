import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './account/create-account/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLogin = false;
  userSignIn: string = '';
  id: number;
  Type: string = 'Normal';
  private productURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  RegisterUser(obj: Users): Observable<Users> {
    return this.http.post<Users>('http://localhost:3000/users', obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  signInInfo() {
    this.isLogin = !this.isLogin;
  }
  getSignInStatus() {
    return this.isLogin;
  }
  getSignInUser() {
    return this.userSignIn;
  }
  userName(name: string) {
    this.userSignIn = name;
    // console.log(this.userSignIn);
  }
  userType(type: string) {
    this.Type = type;
    console.log(this.Type);
  }

  getUsersData() {
    return this.http.get(this.productURL);
  }
  getUserById(id: number) {
    let productURL = `${this.productURL}/${id}`;
    let url = productURL;
    this.id = id;
    console.log(productURL);
    return this.http.get(url);
  }
}
