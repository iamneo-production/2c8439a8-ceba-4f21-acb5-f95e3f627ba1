import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { EditpropertyComponent } from './editproperty/editproperty.component';
import { EditusersComponent } from './editusers/editusers.component';
import { InquiriesComponent } from './inquiries/inquiries.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminnavbarComponent,
    EditpropertyComponent,
    EditusersComponent,
    InquiriesComponent,
    SearchPipe,
    AdminloginComponent,
    AddpropertyComponent,
    AdminhomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxTypedJsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
