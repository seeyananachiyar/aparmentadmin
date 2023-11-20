import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './modules/shared/admin-layout/admin-layout.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { LoginComponent } from './modules/shared/login/login.component';
import { AppartmentComponent } from "./modules/admin/appartment/appartment.component";
const routes:Routes = [
  {
    path:'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'appartment', component: AppartmentComponent },

    ]
  },
  { path: '', component: LoginComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
