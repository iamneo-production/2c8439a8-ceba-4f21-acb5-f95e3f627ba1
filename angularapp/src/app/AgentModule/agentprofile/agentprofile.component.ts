import { Component } from '@angular/core';
import { Agent } from 'src/app/model/agent';
import { AgentdataService } from 'src/app/service/agentdata.service';

@Component({
  selector: 'app-agentprofile',
  templateUrl: './agentprofile.component.html',
  styleUrls: ['./agentprofile.component.css']
})
export class AgentprofileComponent {

  agentslist: Agent[] = [];

  agent: Agent= {
    id:  localStorage.getItem('id')!,
    name:  localStorage.getItem('name')!,
    email: localStorage.getItem('agentemail')!,
    phone:  localStorage.getItem('phone')!,
    profileImageUrl: localStorage.getItem('profileImageUrl')!
  };

  constructor(private agentdataservice:AgentdataService){}


  onSubmit(){
    this.agentdataservice.updateAgent(this.agent.id,this.agent).subscribe(data=>{
      this.agentslist=data;
      console.log(data)
      alert('Your data uploaded succesfully');
      localStorage.setItem("id",this.agent.id+'')
      localStorage.setItem("name",this.agent.name+'')
      localStorage.setItem("email",this.agent.email+'')
      localStorage.setItem("phone",this.agent.phone+'')
    })
  }
  
  ondeleteagent(){
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("agentemail");
    localStorage.removeItem("phone");
    localStorage.removeItem("profileImageUrl");
    this.agentdataservice.deleteAgent(this.agent.id).subscribe(data=>{
      this.agentslist=data;
    })
  }
}
