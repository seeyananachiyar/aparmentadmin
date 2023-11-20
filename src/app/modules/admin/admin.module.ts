import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppartmentComponent } from './appartment/appartment.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AppartmentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
