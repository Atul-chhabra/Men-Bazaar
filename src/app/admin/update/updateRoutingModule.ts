import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateResolverService } from './Resolver/update-resolver.service';

import { UpdateComponent } from './update.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateComponent,
    resolve: {
      updateresolve: UpdateResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateRoutingModule {
  constructor() {}
}
