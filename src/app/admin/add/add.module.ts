import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import { AddDeactivateService } from './CanDeactivate/add-deactivate.service';

@NgModule({
  declarations: [AddComponent],
  imports: [CommonModule, AddRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AddDeactivateService],
})
export class AddModule {}
