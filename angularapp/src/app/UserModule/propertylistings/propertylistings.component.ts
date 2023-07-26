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
    profileImageUrl: '',
    password: ''
  };

  noDataFound: boolean = false;
  searchQuery: string = '';


  //.........................
  minPrice: number | undefined;
  maxPrice: number | undefined;
  //.........................


  ngOnInit(): void{
   this.getAllProperties();
   
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['searchQuery'] || '';
      this.filterProperties();
    });

  }
  constructor(private propertydataService: PropertydataService, private router: Router,private route:ActivatedRoute) {}
  
  getAllProperties(){
    this.propertydataService.getProperties().subscribe(data=>{
      this.propertylist= data;
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
  
  filterProperties(): void {
    if (this.searchQuery) {
      this.propertylist = this.propertylist.filter(property =>
        (property.location.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          property.type.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    } else {
      this.property = this.property;
    }
  }


}
