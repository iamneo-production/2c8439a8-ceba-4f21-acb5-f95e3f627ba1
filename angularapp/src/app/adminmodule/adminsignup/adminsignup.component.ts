import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdmindataService } from 'src/app/service/admindata.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent {
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

onAdminlogin(name:string,email:string,password:string){
  if (!this.isEmailValid(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  let admin = {name,email,password};
  this.admindataservice.signupAdmin(admin).subscribe(data=>{
    // this.router.navigate(['/adminhome']);
    localStorage.setItem('adminid',data.id);
    localStorage.setItem('adminname',data.name);
    localStorage.setItem('adminemail',data.email);
  //  console.log(data)
   alert('Account Created Succesfullly')
  })
  this.router.navigate(['/adminlogin']);
}

// Email validation using a regular expression
isEmailValid(email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

}
