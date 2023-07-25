import { Component } from '@angular/core';
import { Property } from 'src/app/model/property';
import { PropertydataService } from 'src/app/service/propertydata.service';

@Component({
  selector: 'app-agenthome',
  templateUrl: './agenthome.component.html',
  styleUrls: ['./agenthome.component.css']
})
export class AgenthomeComponent {
  name:string = localStorage.getItem('name')!;
  agentid:string = localStorage.getItem('id')!;

  
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
  deleteid= 0;
  

  ngOnInit(): void{
   this.getAllProperties();

  }
  constructor(private propertydataService: PropertydataService) {
  }
  getAllProperties(){
    this.propertydataService.getPropertybyAgentid().subscribe(data=>{
      this.propertylist= data;
    })
  }

  getAllProperty(id:any){
    this.propertydataService.getProperty(id).subscribe(data=>{
      this.property=data;
    })
  }

}
