import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from '../account/create-account/users';
import { UserService } from '../user.service';

@Injectable()
export class ViewResolverService implements Resolve<Users[]> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.userServ.getUserById(+route.paramMap.get('id'));
  }

  constructor(private userServ: UserService) {}
}
