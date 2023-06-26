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
import { QueriesComponent } from './adminmodule/inqueries/queries.component';
import { AddpropertyComponent } from './adminmodule/addproperty/addproperty.component';
import { AdminnavbarComponent } from './adminmodule/adminnavbar/adminnavbar.component';
import { InquiriesComponent } from './adminmodule/inquiries/inquiries.component';

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
    QueriesComponent,
    AddpropertyComponent,
    AdminnavbarComponent,
    InquiriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
