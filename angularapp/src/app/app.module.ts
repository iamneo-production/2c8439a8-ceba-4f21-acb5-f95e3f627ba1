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
import { QueriesComponent } from './adminmodule/queries/queries.component';

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
    QueriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
