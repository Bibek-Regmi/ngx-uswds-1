import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UsaAccordionModule, USWDSCardModule } from "@gsa-sam/ngx-uswds";
import { AccordionComponent } from "./accordion-basic.component";

@NgModule({
  imports: [
    CommonModule,
    UsaAccordionModule,
    USWDSCardModule,
  ],
  declarations: [
    AccordionComponent
  ],
  exports: [
    AccordionComponent
  ]
})
export class AccordionBasicModule { }