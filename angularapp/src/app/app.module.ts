import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsermoduleComponent } from './usermodule/usermodule.component';
import { AgentmoduleComponent } from './agentmodule/agentmodule.component';
import { AdminmoduleComponent } from './adminmodule/adminmodule.component';
import { AdminhomeComponent } from './adminmodule/adminhome/adminhome.component';
import { AdminloginComponent } from './adminmodule/adminlogin/adminlogin.component';
import { EditusersComponent } from './adminmodule/editusers/editusers.component';
import { AdminnavbarComponent } from './adminmodule/adminnavbar/adminnavbar.component';
import { InquiriesComponent } from './adminmodule/inquiries/inquiries.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { SharepagesComponent } from './sharepages/sharepages.component';
import { AgentloginComponent } from './pages/agentlogin/agentlogin.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { UseraccountComponent } from './pages/useraccount/useraccount.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { AddpropertyComponent } from './adminmodule/addproperty/addproperty.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [
    AppComponent,
    UsermoduleComponent,
    AgentmoduleComponent,
    AdminmoduleComponent,
    AdminhomeComponent,
    AdminloginComponent,
    EditusersComponent,
    InquiriesComponent,
    AdminnavbarComponent,
    HomeComponent,
    PagesComponent,
    SharepagesComponent,
    AgentloginComponent,
    ContactComponent,
    LoginComponent,
    UseraccountComponent,
    NavbarComponent,
    FooterComponent,
    AddpropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
