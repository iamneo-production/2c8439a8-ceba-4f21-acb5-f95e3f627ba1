import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AgentdataService } from 'src/app/service/agentdata.service';

@Component({
  selector: 'app-agentlogin',
  templateUrl: './agentlogin.component.html',
  styleUrls: ['./agentlogin.component.css']
})
export class AgentloginComponent {
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
  

  
  onAgentlogin(email:string,password:string){
     let agent = {email,password};
     this.agentdataservice.loginAgent(agent).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/agenthome']);
      localStorage.setItem('id',data.id);
      localStorage.setItem('name',data.name);
      localStorage.setItem('agentemail',data.email);
      localStorage.setItem('phone',data.phone);
      localStorage.setItem('profileImageUrl',data.profileImageUrl);
     },error=>alert('Incorrect Username or Password'))
  }
  
}
