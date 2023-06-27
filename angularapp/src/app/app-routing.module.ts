import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EditagentsComponent } from './adminmodule/editagents/editagents.component';
import { AdminmoduleComponent } from './adminmodule/adminmodule.component';
import { EditpropertyComponent } from './adminmodule/editproperty/editproperty.component';
import { EditusersComponent } from './adminmodule/editusers/editusers.component';
import { InquiriesComponent } from './adminmodule/inquiries/inquiries.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent },
  { path: 'editproperty' , component: EditpropertyComponent},
  { path: 'editusers' , component: EditusersComponent},
  { path: 'editagent' , component: EditagentsComponent},
  { path: 'query' , component: InquiriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
