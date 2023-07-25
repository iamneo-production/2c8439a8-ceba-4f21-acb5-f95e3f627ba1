import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdmindataService } from 'src/app/service/admindata.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  constructor(private router:Router,private admindataservice:AdmindataService){}
  pass = 'password';
  isText = false;
  onClick(){
  this.isText= !this.isText;
  if(this.isText){
    this.pass = 'Text';
  }
  else{
    this.pass = 'password';
  }
  }
  

   
  onAdminlogin(email:string,password:string){
    let admin = {email,password};
    this.admindataservice.loginAdmin(admin).subscribe(data=>{
     console.log(data)
     this.router.navigate(['/adminhome']);
     localStorage.setItem('adminid',data.id);
     localStorage.setItem('adminname',data.name);
     localStorage.setItem('adminemail',data.email);
    },error=>alert('Incorrect Username or Password'))
 }
}
