import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add.component';
import { AddDeactivateService } from './CanDeactivate/add-deactivate.service';

const routes: Routes = [
  { path: '', component: AddComponent, canDeactivate: [AddDeactivateService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRoutingModule {}
