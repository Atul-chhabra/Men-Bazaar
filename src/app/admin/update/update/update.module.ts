import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from '../updateRoutingModule';
import { UpdateComponent } from '../update.component';
import { UpdateResolverService } from '../Resolver/update-resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UpdateResolverService],
})
export class UpdateModule {}
