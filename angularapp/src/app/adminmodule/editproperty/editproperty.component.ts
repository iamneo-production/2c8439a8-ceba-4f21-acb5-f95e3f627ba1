import { Component } from '@angular/core';
import {PropertydataService} from '../propertyy/service/propertydata.service'
import { Property } from '../propertyy/model/property';
@Component({
  selector: 'app-editproperty',
  templateUrl: './editproperty.component.html',
  styleUrls: ['./editproperty.component.css']
})
export class EditpropertyComponent {

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
    agent: ''
  };

  ngOnInit(): void{
   this.getAllProperties();
  }
  constructor(private propertydataService: PropertydataService) {
  }
  getAllProperties(){
    this.propertydataService.getProperties().subscribe(data=>{
      this.propertylist= data;
    })
  }

  ondelete(id:any){
    this.propertydataService.deleteProperty(id).subscribe(data=>{
      this.propertylist=data;
    })
  }

  onedit(id:any){
    this.propertydataService.getProperty(id).subscribe(data=>{
      this.property=data;
    })
  }

  onSubmit(){
    this.propertydataService.updateProperty(this.property.id,this.property).subscribe(data=>{
      this.propertylist=data;
      window.location.reload();
    })
  }
}
