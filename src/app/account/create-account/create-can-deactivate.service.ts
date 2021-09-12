import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { CreateAccountComponent } from './create-account.component';

@Injectable({
  providedIn: 'root',
})
export class CreateCanDeactivateService
  implements CanDeactivate<CreateAccountComponent> {
  canDeactivate(component: CreateAccountComponent): boolean {
    if (component.signup.dirty) {
      return confirm('Are you sure you want to discard the changes');
    }
    return true;
  }
  constructor() {}
}
