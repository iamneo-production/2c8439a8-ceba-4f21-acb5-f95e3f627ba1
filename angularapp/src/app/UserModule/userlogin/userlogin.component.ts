import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  constructor(private router:Router, private userservicedata:UserdataService){}
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
  
  onUserlogin(email:string,password:string){
     let user = {email,password};
     this.userservicedata.loginUser(user).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/userhome']);
      localStorage.setItem('userId',data.userId);
      localStorage.setItem('username',data.username);
      localStorage.setItem('useremail',data.email);
      localStorage.setItem('mobileNumber',data.mobileNumber);
     },error=>alert('Incorrect Username or Password'))
  }
  
  
}
