import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AgentdataService } from 'src/app/service/agentdata.service';

@Component({
  selector: 'app-agentsignup',
  templateUrl: './agentsignup.component.html',
  styleUrls: ['./agentsignup.component.css']
})
export class AgentsignupComponent {
  constructor(private router:Router,private agentdataservice:AgentdataService){}
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


onsignupAgent(name:string,phone:string,profileImageUrl:string,email:string,password:string){
  let agent = {name,phone,profileImageUrl,email,password};
  this.agentdataservice.signupAgent(agent).subscribe(data=>{
   console.log(data);
   this.router.navigate(['/agenthome']);
   localStorage.setItem('id',data.id);
   localStorage.setItem('name',data.name);
   localStorage.setItem('phone',data.phone);
   localStorage.setItem('profileImageUrl',data.profileImageUrl);
   localStorage.setItem('agentemail',data.email);
  })
}
}
