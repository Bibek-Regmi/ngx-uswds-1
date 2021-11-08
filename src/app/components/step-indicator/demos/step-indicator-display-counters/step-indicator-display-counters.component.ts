import { Component } from '@angular/core';
import { UsaStepIndicatorModel } from '@gsa-sam/ngx-uswds';

@Component({
  selector: 'usa-step-indicator-display-counters',
  templateUrl: './step-indicator-display-counters.component.html',
})
export class StepIndicatorDisplayCountersComponent {
  /** Display Counters */
  stepsShowCounters: UsaStepIndicatorModel[] = [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
    { label: 'Step 5' },
  ];

  currentStepShowCounters = 0;
}