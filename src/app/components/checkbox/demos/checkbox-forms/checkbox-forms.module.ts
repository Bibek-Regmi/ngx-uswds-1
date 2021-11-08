import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxFormsComponent } from './checkbox-forms.component';
import { UsaCheckboxModule } from '@gsa-sam/ngx-uswds';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CheckboxFormsComponent],
  imports: [
    CommonModule,
    UsaCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CheckboxFormsComponent]
})
export class CheckboxFormsModule { }