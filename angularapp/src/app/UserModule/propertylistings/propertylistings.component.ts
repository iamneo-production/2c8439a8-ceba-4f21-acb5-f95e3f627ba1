import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/model/property';
import {PropertydataService} from '../../service/propertydata.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from 'src/app/model/agent';

@Component({
  selector: 'app-propertylistings',
  templateUrl: './propertylistings.component.html',
  styleUrls: ['./propertylistings.component.css']
})
export class PropertylistingsComponent {
  
  searchResults: Property[] = [];
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
    agentid:''
  };

  agentslist: Agent[] = [];

  agent: Agent= {
    id: '',
    name: '',
    email: '',
    phone: '',
    profileImageUrl: ''
  };

 

  ngOnInit(): void{
   this.getAllProperties();
  }
  constructor(private propertydataService: PropertydataService, private router: Router,private route:ActivatedRoute) {}
  
  getAllProperties(){
    this.propertydataService.getProperties().subscribe(data=>{
      this.propertylist= data;
      this.searchResults = data;
    })
  }

  getAllProperty(id:any){
    this.propertydataService.getProperty(id).subscribe(data=>{
      this.property=data;
    })
  }

  propertyDetails(id:any){
   this.router.navigate(['details',id]);
  }

  searchText: string = '';
  search(){
    if(this.searchText.trim()===''){
      this.searchResults=this.propertylist;
    }
    else{
      this.searchResults=this.propertylist.filter(property=>
        property.location.toLowerCase().includes(this.searchText.toLowerCase()) ||
        property.type.toLowerCase().includes(this.searchText.toLowerCase())
    );
    }
  }
}
