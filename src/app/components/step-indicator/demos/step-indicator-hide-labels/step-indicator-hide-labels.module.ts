import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepIndicatorHideLabelsComponent } from './step-indicator-hide-labels.component';
import { UsaStepIndicatorModule } from '@gsa-sam/ngx-uswds';



@NgModule({
  declarations: [StepIndicatorHideLabelsComponent],
  imports: [
    CommonModule,
    UsaStepIndicatorModule,
  ],
  exports: [StepIndicatorHideLabelsComponent]
})
export class StepIndicatorHideLabelsModule { }