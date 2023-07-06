import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminmoduleComponent } from './adminmodule/adminmodule.component';
import { EditpropertyComponent } from './adminmodule/editproperty/editproperty.component';
import { EditusersComponent } from './adminmodule/editusers/editusers.component';
import { InquiriesComponent } from './adminmodule/inquiries/inquiries.component';
import { AdminloginComponent } from './adminmodule/adminlogin/adminlogin.component';
import { AddpropertyComponent } from './adminmodule/addproperty/addproperty.component';

const routes: Routes = [
  {path:'', component: AdminloginComponent},
  { path: 'editproperty' , component: EditpropertyComponent},
  { path: 'editusers' , component: EditusersComponent},
  { path: 'query' , component: InquiriesComponent},
  { path: 'adminlogin' , component: AdminloginComponent},
  { path: 'add' , component: AddpropertyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
