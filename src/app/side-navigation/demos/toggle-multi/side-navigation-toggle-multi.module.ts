import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsaSidenavModule } from 'uswds-components';
import { SideNavigationToggleMultiComponent } from './side-navigation-toggle-multi.component';


@NgModule({
  imports: [
    CommonModule,
    UsaSidenavModule,
  ],
  declarations: [
    SideNavigationToggleMultiComponent
  ],
  exports: [
    SideNavigationToggleMultiComponent
  ]
})
export class SideNavigationToggleMultiModule { }
