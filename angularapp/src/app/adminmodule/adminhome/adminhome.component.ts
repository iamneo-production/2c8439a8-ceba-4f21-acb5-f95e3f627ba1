import { Component } from '@angular/core';
import { Agent } from 'src/app/model/agent';
import { Inquiry } from 'src/app/model/inquiry';
import { Property } from 'src/app/model/property';
import { User } from 'src/app/model/user';
import { AgentdataService } from 'src/app/service/agentdata.service';
import { InquirydataService } from 'src/app/service/inquirydata.service';
import { PropertydataService } from 'src/app/service/propertydata.service';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {

  name:string = localStorage.getItem('adminname')!;
  
  constructor(private userdataService: UserdataService, 
    private agentdataService: AgentdataService,
    private propertydataService: PropertydataService,
    private inquirydataService:InquirydataService){}

  ngOnInit(){
    this.getAllProperties();
    this.getAllAgents();
    this.getAllUsers();
    this.getAllInquiries();
  }
  propertylist: Property[] = [];

  property: Property= {
    id: '',
    title: '',
    description: '',
    address: '',
    price: '',
    type: '',
    location: '',
    status: '',
    imageUrls: '',
    videoUrls: '',
    features: '',
    maplocation:'',
    floor:'',
    amenities:'',
    agents: '',
    agentid: ''
  };

  
  userslist: User[] = [];
  agentslist: Agent[] = [];


  user: User= {
    userId: '',
    username: '',
    email: '',
    mobileNumber: ''
  }; 
  
  agent: Agent= {
    id: '',
    name: '',
    email: '',
    phone: '',
    profileImageUrl: ''
  };

  inquirylist: Inquiry[] = [];

  inquiry: Inquiry= {
   
    id: '',
    name: '',
    email: '',
    question: '',
    date: '',
    status: '',
    answer:''

  };

  getAllProperties(){
    this.propertydataService.getProperties().subscribe(data=>{
      this.propertylist= data;
    })
  }

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

  getAllInquiries(){
    this.inquirydataService.getInquiries().subscribe(data=>{
      this.inquirylist= data;
    })
  }
}
