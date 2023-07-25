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
  { path: 'adminlogin', component: AdminloginComponent},
  { path: 'adminhome', component: AdminhomeComponent},
  { path: 'editproperty' , component: EditpropertyComponent},
  { path: 'editusers' , component: EditusersComponent},
  { path: 'query' , component: InquiriesComponent},
  { path: 'add' , component: AddpropertyComponent},
  { path: 'adminacc' , component: AdminaccComponent},
  { path: 'adminsignup' , component: AdminsignupComponent},
  { path: 'userhome' , component: UserhomeComponent},
  { path: 'usersignup' , component: UsersignupComponent},
  { path: 'contact' , component: ContactusComponent},
  { path: 'propertylistings' , component: PropertylistingsComponent},
  { path: 'details/:id' , component: PropertydetailsComponent},
  { path: 'accountmanage' , component: AccountmanagementComponent},
  { path: 'favourites' , component: FavouritesComponent},
  { path: 'agentadd' , component: AgentaddComponent},
  { path: 'agentedit' , component: AgenteditComponent},
  { path: 'agentprofile' , component: AgentprofileComponent},
  { path: 'agentsignup' , component: AgentsignupComponent},
  { path: 'agenthome' , component: AgenthomeComponent},
  { path: 'paymentpage' , component: PaymentpageComponent},
  { path: 'paymentsuccess' , component: PaymentsuccessComponent},
  { path: 'loadingpage' , component: LoadingpageComponent},
  { path: 'search', component: PropertylistingsComponent },
  { path: 'commonhome', component: CommonhomeComponent },
  { path: 'userlogin', component: UserloginComponent},
  { path: 'agentlogin', component: AgentloginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// ,canActivate:[AuthGuard]