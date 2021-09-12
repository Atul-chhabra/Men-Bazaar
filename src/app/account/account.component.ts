import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Users } from './create-account/users';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  userData: any;

  constructor(private route: Router, private usrServ: UserService) {}

  @ViewChild('form') data: NgForm;
  ngForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  onRegister() {
    this.route.navigate(['sign-up']);
  }
  logIn() {
    let val = this.data.form.value;
    console.log(val);
    for (var i = 0; i < this.userData.length; i++) {
      if (val.email != this.userData[i].email) {
        return false;
      } else {
        if (val.password != this.userData[i].password) {
          alert('Incorrect Password');
          return false;
        } else {
          this.usrServ.signInInfo();
          //   console.log(this.userData[i].firstname);
          this.usrServ.userName(this.userData[i].firstname);
          this.usrServ.getUserById(this.userData[i].id);
          this.usrServ.userType(this.userData[i].UserType);
          this.route.navigate(['home']);
          return false;
        }
      }
    }

    if (
      confirm(
        'User not registered. Press Ok to Register or Cancel to Try Again'
      )
    ) {
      this.route.navigate(['sign-up']);
      return false;
    } else {
      this.route.navigate(['my-account']);
      return false;
    }
  }
  getuserInfo() {
    this.usrServ.getUsersData().subscribe((data: any) => {
      console.log(data);
      this.userData = data;
    });
  }
  ngOnInit() {
    this.getuserInfo();
  }
}
