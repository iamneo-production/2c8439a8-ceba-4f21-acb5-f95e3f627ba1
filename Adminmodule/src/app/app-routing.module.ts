import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
// import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { EditpropertyComponent } from './editproperty/editproperty.component';
import { EditusersComponent } from './editusers/editusers.component';
import { InquiriesComponent } from './inquiries/inquiries.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';

const routes: Routes = [
  {path:'', component: AdminloginComponent},
  { path: 'editproperty' , component: EditpropertyComponent},
  { path: 'editusers' , component: EditusersComponent},
  { path: 'query' , component: InquiriesComponent},
  { path: 'adminlogin' , component: AdminloginComponent},
  { path: 'add' , component: AddpropertyComponent},
  { path: 'home' , component: AdminhomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
