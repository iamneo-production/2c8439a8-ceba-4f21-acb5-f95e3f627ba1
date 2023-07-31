import { Component } from '@angular/core';
import { Property } from 'src/app/model/property';
import { PropertydataService } from 'src/app/service/propertydata.service';

@Component({
  selector: 'app-agentadd',
  templateUrl: './agentadd.component.html',
  styleUrls: ['./agentadd.component.css']
})
export class AgentaddComponent {

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
  constructor(private propertydataService: PropertydataService) {
  }

  onSubmit(){
    this.propertydataService.postProperty(this.property).subscribe(data=>{
      alert('Property added succesfully!')
    })
  }
  isValid():boolean{
    if(this.property.title != '' && this.property.description != '' && this.property.address != '' 
    && this.property.price != '' && this.property.type != '' && this.property.location != '' && this.property.status != '' 
    && this.property.imageUrls != ''&& this.property.videoUrls != '' && this.property.agents != '' && this.property.features != ''
    && this.property.floor != ''&& this.property.amenities != '' && this.property.agentid != '' && this.property.maplocation != ''){
      return false;
    } 
    return true;
  }
}
