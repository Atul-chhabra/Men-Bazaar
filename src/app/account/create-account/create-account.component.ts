import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { Users } from './users';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  constructor(private usrServ: UserService, private route: Router) {}
  usersData: any;

  @ViewChild('signup') signup: NgForm;
  ngForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    firstname: new FormControl(),
    lastname: new FormControl(),
    address: new FormControl(),
    UserType: new FormControl(),
    apt: new FormControl(),
    city: new FormControl(),
    country: new FormControl(),
    state: new FormControl(),
    zip: new FormControl(),
    taxid: new FormControl(),
    phone: new FormControl(),
    comments: new FormControl(),
  });
  onSignup() {
    for (var i = 0; i < this.usersData.length; i++) {
      if (this.signup.form.value.email == this.usersData[i].email) {
        alert('You already have an account.Please Login to proceed');
        this.route.navigate(['my-account']);
        return false;
      } else {
        this.usrServ
          .RegisterUser(this.signup.form.value)
          .subscribe((data: Users) => {
            this.usersData.push(data);
            this.signup.reset();
            alert('Your Account Created Successfully');
          });
      }   
    }
    console.log(this.signup.form.value.email);

    console.log(this.usersData[0].email);
  }
  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.usrServ.getUsersData().subscribe((data: any) => {
      this.usersData = data;
    });
  }
}
