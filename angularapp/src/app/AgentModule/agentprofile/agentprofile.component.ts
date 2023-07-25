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
    id: '',
    name: '',
    email: '',
    phone: '',
    profileImageUrl: '',
    password: ''
  };

  constructor(private agentdataservice:AgentdataService){}

  agentname:string = localStorage.getItem('name')!;
  agentemail:string = localStorage.getItem('agentemail')!;
  profileImageUrl:string = localStorage.getItem('profileImageUrl')!;
  agentId:string = localStorage.getItem('id')!;
  phone:string = localStorage.getItem('phone')!;

  onSubmit(agentId:any){
    this.agentdataservice.updateAgent(agentId,this.agent).subscribe(data=>{
      this.agentslist=data;
      window.location.reload();
    })
  }
  
  ondeleteagent(){
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("agentemail");
    localStorage.removeItem("phone");
    localStorage.removeItem("profileImageUrl");
    this.agentdataservice.deleteAgent(this.agentId).subscribe(data=>{
      this.agentslist=data;
    })
  }
}
