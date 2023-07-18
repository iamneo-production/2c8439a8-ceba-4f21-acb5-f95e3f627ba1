import { Component } from '@angular/core';
import { User } from '../propertyyyy/model/user';
import {UserdataService} from '../propertyyyy/service/userdata.service'
import { AgentdataService } from '../propertyyyy/service/agentdata.service';
import { Agent } from '../propertyyyy/model/agent';
@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent {

  userslist: User[] = [];
  agentslist: Agent[] = [];


  user: User= {
    id: '',
    name: '',
    email: '',
    phone: ''
  }; 
  
  agent: Agent= {
    id: '',
    name: '',
    email: '',
    phone: '',
    profileImageUrl: ''
  };

  deleteid = 0;

  ngOnInit(): void{
   this.getAllUsers();
   this.getAllAgents();
  }

  constructor(private userdataService: UserdataService, private agentdataService: AgentdataService) {}

  getAllUsers(){
    this.userdataService.getUsers().subscribe(data=>{
      this.userslist= data;
    })
  }

  getAllAgents(){
    this.agentdataService.getAgents().subscribe(data=>{
      this.agentslist= data;
    })
  }
  
  ondeleteuser(){
    this.userdataService.deleteUser(this.deleteid).subscribe(data=>{
      this.userslist=data;
    })
  }
  
  ondeleteagent(){
    this.agentdataService.deleteAgent(this.deleteid).subscribe(data=>{
      this.agentslist=data;
      window.location.reload();
    })
  }
  
  ondeleteclick(id:any){
   this.deleteid=id;
  }
}
