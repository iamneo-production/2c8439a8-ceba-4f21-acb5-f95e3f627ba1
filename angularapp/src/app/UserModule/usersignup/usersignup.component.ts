import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent {
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

onUsersignup(email:string,mobileNumber:string,username:string,password:string){
  let user = {username,mobileNumber,email,password};
  this.userservicedata.signupUser(user).subscribe(data=>{
   console.log(data)
   this.router.navigate(['/userlogin']);
   localStorage.setItem('userId',data.userId);
   localStorage.setItem('email',data.email);
   localStorage.setItem('mobileNumber',data.mobileNumber);
   localStorage.setItem('username',data.username);
  })
}
}
