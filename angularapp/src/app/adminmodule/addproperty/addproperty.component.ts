import { Component } from '@angular/core';
import { PropertydataService } from '../../service/propertydata.service';
import { Property } from '../../model/property';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent {

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
    && this.property.imageUrls != ''&& this.property.videoUrls != '' && this.property.agents != '' && this.property.features != ''){
      return false;
    } 
    return true;
  }
}
