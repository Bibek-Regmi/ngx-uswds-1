import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UsaAccordionModule } from "@gsa-sam/ngx-uswds";
import { AccordionMultiSelectComponent } from "./accordion-multi-select.component";


@NgModule({
  imports: [
    CommonModule,
    UsaAccordionModule,
  ],
  declarations: [
    AccordionMultiSelectComponent
  ],
  exports: [
    AccordionMultiSelectComponent
  ]
})
export class AccordionMultiSelectModule { }