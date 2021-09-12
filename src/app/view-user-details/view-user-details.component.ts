import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../account/create-account/users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.css'],
})
export class ViewUserDetailsComponent implements OnInit {
  show: boolean = true;
  userData: Users;
  constructor(
    private userServ: UserService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}
  getUserData() {
    this.userServ.getUsersData().subscribe((users: any) => {
      this.userData = users;
    });
  }
  // getId() {
  //   for (var i = 0; i < this.userData.length; i++) {
  //     if (this.userData[i].firstname == this.userServ.userSignIn) {
  //       return this.userData[i].id;
  //     } else {
  //       console.log(null);
  //       return null;
  //     }
  //   }
  //   console.log(this.userData[i].id);
  // }

  ngOnInit(): void {
    this.userData = this.activatedRoute.snapshot.data['viewresolve'];
    this.display();
    console.log(this.userData);
  }
  display() {
    this.show = true;
  }

  close() {
    this.route.navigate(['/home']);
  }
  Out() {
    this.userServ.signInInfo();
    this.route.navigate(['/home']);
  }
}
