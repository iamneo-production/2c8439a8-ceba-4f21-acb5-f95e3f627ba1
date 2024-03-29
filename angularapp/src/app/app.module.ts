import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminnavbarComponent } from './adminmodule/adminnavbar/adminnavbar.component';
import { EditpropertyComponent } from './adminmodule/editproperty/editproperty.component';
import { EditusersComponent } from './adminmodule/editusers/editusers.component';
import { InquiriesComponent } from './adminmodule/inquiries/inquiries.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminloginComponent } from './adminmodule/adminlogin/adminlogin.component';
import { AddpropertyComponent } from './adminmodule/addproperty/addproperty.component';
import { AdminhomeComponent } from './adminmodule/adminhome/adminhome.component';
import { UserhomeComponent } from './UserModule/userhome/userhome.component';
import { PropertylistingsComponent } from './UserModule/propertylistings/propertylistings.component';
import { ContactusComponent } from './UserModule/contactus/contactus.component';
import { UsernavbarComponent } from './UserModule/usernavbar/usernavbar.component';
import { PropertydetailsComponent } from './UserModule/propertydetails/propertydetails.component';
import { AccountmanagementComponent } from './UserModule/accountmanagement/accountmanagement.component';
import { FavouritesComponent } from './UserModule/favourites/favourites.component';
import { AgentnavbarComponent } from './AgentModule/agentnavbar/agentnavbar.component';
import { AgentaddComponent } from './AgentModule/agentadd/agentadd.component';
import { AgenteditComponent } from './AgentModule/agentedit/agentedit.component';
import { AgentprofileComponent } from './AgentModule/agentprofile/agentprofile.component';
import { AgenthomeComponent } from './AgentModule/agenthome/agenthome.component';
import { SearchComponent } from './UserModule/search/search.component';
import { PaymentpageComponent } from './UserModule/paymentpage/paymentpage.component';
import { PaymentsuccessComponent } from './UserModule/paymentsuccess/paymentsuccess.component';
import { CommonhomeComponent } from './commonpage/commonhome/commonhome.component';
import { CommonnavbarComponent } from './commonpage/commonnavbar/commonnavbar.component';
import { LoadingpageComponent } from './UserModule/loadingpage/loadingpage.component';
import { UsersignupComponent } from './UserModule/usersignup/usersignup.component';
import { AgentsignupComponent } from './AgentModule/agentsignup/agentsignup.component';
import { AgentloginComponent } from './AgentModule/agentlogin/agentlogin.component';
import { UserloginComponent } from './UserModule/userlogin/userlogin.component';
import { AdminaccComponent } from './adminmodule/adminacc/adminacc.component';
import { AdminsignupComponent } from './adminmodule/adminsignup/adminsignup.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminnavbarComponent,
    EditpropertyComponent,
    EditusersComponent,
    InquiriesComponent,
    AdminloginComponent,
    AddpropertyComponent,
    AdminhomeComponent,
    UserhomeComponent,
    PropertylistingsComponent,
    ContactusComponent,
    UsernavbarComponent,
    PropertydetailsComponent,
    AccountmanagementComponent,
    FavouritesComponent,
    AgentnavbarComponent,
    AgentaddComponent,
    AgenteditComponent,
    AgentprofileComponent,
    AgenthomeComponent,
    SearchComponent,
    PaymentpageComponent,
    PaymentsuccessComponent,
    CommonhomeComponent,
    CommonnavbarComponent,
    LoadingpageComponent,
    UsersignupComponent,
    AgentsignupComponent,
    AgentloginComponent,
    UserloginComponent,
    AdminaccComponent,
    AdminsignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
