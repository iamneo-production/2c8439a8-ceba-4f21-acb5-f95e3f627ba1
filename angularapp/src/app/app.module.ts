import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsermoduleComponent } from './usermodule/usermodule.component';
import { AgentmoduleComponent } from './agentmodule/agentmodule.component';
import { AdminmoduleComponent } from './adminmodule/adminmodule.component';
import { AdminhomeComponent } from './adminmodule/adminhome/adminhome.component';
import { AdminloginComponent } from './adminmodule/adminlogin/adminlogin.component';
import { EditpropertyComponent } from './adminmodule/editproperty/editproperty.component';
import { EditusersComponent } from './adminmodule/editusers/editusers.component';
import { EditagentsComponent } from './adminmodule/editagents/editagents.component';

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

@NgModule({
  declarations: [
    AppComponent,
    UsermoduleComponent,
    AgentmoduleComponent,
    AdminmoduleComponent,
    AdminhomeComponent,
    AdminloginComponent,
    EditpropertyComponent,
    EditusersComponent,
    EditagentsComponent,
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
