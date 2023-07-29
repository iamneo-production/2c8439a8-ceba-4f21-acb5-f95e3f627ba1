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
    if (!this.isEmailValid(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    let admin = {email,password};
    this.admindataservice.loginAdmin(admin).subscribe(data=>{
    //  console.log(data)
     this.router.navigate(['/adminhome']);
     localStorage.setItem('adminid',data.id);
     localStorage.setItem('adminname',data.name);
     localStorage.setItem('adminemail',data.email);
     localStorage.setItem('loginstatus','loggedin');
    },error=>alert('Incorrect Username or Password'))
 }

 // Email validation using a regular expression
 isEmailValid(email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

}
