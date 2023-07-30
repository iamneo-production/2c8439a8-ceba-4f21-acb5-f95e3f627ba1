import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditpropertyComponent } from './adminmodule/editproperty/editproperty.component';
import { EditusersComponent } from './adminmodule/editusers/editusers.component';
import { InquiriesComponent } from './adminmodule/inquiries/inquiries.component';
import { AdminloginComponent } from './adminmodule/adminlogin/adminlogin.component';
import { AddpropertyComponent } from './adminmodule/addproperty/addproperty.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminhomeComponent } from './adminmodule/adminhome/adminhome.component';
import { UserhomeComponent } from './UserModule/userhome/userhome.component';
import { ContactusComponent } from './UserModule/contactus/contactus.component';
import { PropertylistingsComponent } from './UserModule/propertylistings/propertylistings.component';
import { PropertydetailsComponent } from './UserModule/propertydetails/propertydetails.component';
import { AccountmanagementComponent } from './UserModule/accountmanagement/accountmanagement.component';
import { FavouritesComponent } from './UserModule/favourites/favourites.component';
import { AgentaddComponent } from './AgentModule/agentadd/agentadd.component';
import { AgenteditComponent } from './AgentModule/agentedit/agentedit.component';
import { AgentprofileComponent } from './AgentModule/agentprofile/agentprofile.component';
import { AgentsignupComponent } from './AgentModule/agentsignup/agentsignup.component';
import { AgenthomeComponent } from './AgentModule/agenthome/agenthome.component';
import { PaymentpageComponent } from './UserModule/paymentpage/paymentpage.component';
import { PaymentsuccessComponent } from './UserModule/paymentsuccess/paymentsuccess.component';
import { CommonhomeComponent } from './commonpage/commonhome/commonhome.component';
import { LoadingpageComponent } from './UserModule/loadingpage/loadingpage.component';
import { UsersignupComponent } from './UserModule/usersignup/usersignup.component';
import { UserloginComponent } from './UserModule/userlogin/userlogin.component';
import { AgentloginComponent } from './AgentModule/agentlogin/agentlogin.component';
import { AdminaccComponent } from './adminmodule/adminacc/adminacc.component';
import { AdminsignupComponent } from './adminmodule/adminsignup/adminsignup.component';

const routes: Routes = [
  { path:'', component: CommonhomeComponent},
  { path: 'commonhome', component: CommonhomeComponent },
  { path: 'userlogin', component: UserloginComponent},
  { path: 'usersignup' , component: UsersignupComponent},
  { path: 'agentlogin', component: AgentloginComponent},
  { path: 'agentsignup' , component: AgentsignupComponent},
  { path: 'adminlogin', component: AdminloginComponent},
  { path: 'adminsignup' , component: AdminsignupComponent},
  { path: 'adminhome', component: AdminhomeComponent,canActivate:[AuthGuard]},
  { path: 'editproperty' , component: EditpropertyComponent,canActivate:[AuthGuard]},
  { path: 'editusers' , component: EditusersComponent,canActivate:[AuthGuard]},
  { path: 'query' , component: InquiriesComponent,canActivate:[AuthGuard]},
  { path: 'add' , component: AddpropertyComponent ,canActivate:[AuthGuard]},
  { path: 'adminacc' , component: AdminaccComponent,canActivate:[AuthGuard]},
  { path: 'userhome' , component: UserhomeComponent,canActivate:[AuthGuard]},
  { path: 'contact' , component: ContactusComponent,canActivate:[AuthGuard]},
  { path: 'propertylistings' , component: PropertylistingsComponent,canActivate:[AuthGuard]},
  { path: 'details/:id' , component: PropertydetailsComponent,canActivate:[AuthGuard]},
  { path: 'accountmanage' , component: AccountmanagementComponent,canActivate:[AuthGuard]},
  { path: 'favourites' , component: FavouritesComponent,canActivate:[AuthGuard]},
  { path: 'agentadd' , component: AgentaddComponent,canActivate:[AuthGuard]},
  { path: 'agentedit' , component: AgenteditComponent,canActivate:[AuthGuard]},
  { path: 'agentprofile' , component: AgentprofileComponent,canActivate:[AuthGuard]},
  { path: 'agenthome' , component: AgenthomeComponent,canActivate:[AuthGuard]},
  { path: 'paymentpage' , component: PaymentpageComponent,canActivate:[AuthGuard]},
  { path: 'paymentsuccess' , component: PaymentsuccessComponent,canActivate:[AuthGuard]},
  { path: 'loadingpage' , component: LoadingpageComponent,canActivate:[AuthGuard]},
  { path: 'search', component: PropertylistingsComponent ,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// ,canActivate:[AuthGuard]