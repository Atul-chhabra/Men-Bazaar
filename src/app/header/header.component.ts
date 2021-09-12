import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private serv: UserService) {}
  defaultTitle: string = 'Sign In';
  userTitle: string = '';
  userid: number=0;

  logInStatus() {
    return this.serv.getSignInStatus();
  }
  getTitle() {
    console.log(this.logInStatus());
    if (this.logInStatus()) {
      this.userTitle = this.serv.getSignInUser();
    } else {
      this.defaultTitle = 'Sign In';
    }
  }
  getUserId() {
    this.userid = this.serv.id;
  }
  getUserType() {
    if (this.logInStatus()) {
      if (this.serv.Type == 'Admin') {
        return true;
      }
    }
    return false;
  }

  ngOnInit() {
    this.getTitle();
    this.getUserId();
  }
}
