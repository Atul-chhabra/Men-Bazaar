import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddComponent } from '../add.component';

@Injectable({
  providedIn: 'root',
})
export class AddDeactivateService implements CanDeactivate<AddComponent> {
  canDeactivate(component: AddComponent): boolean {
    if (component.data.dirty) {
      return confirm('Are you sure you want to discard the changes');
    }
    return false;
  }
  constructor() {}
}
