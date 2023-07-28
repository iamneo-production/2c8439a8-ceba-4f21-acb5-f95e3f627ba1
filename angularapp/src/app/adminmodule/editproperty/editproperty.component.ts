import { Component } from '@angular/core';
import {PropertydataService} from '../../service/propertydata.service'
import { Property } from '../../model/property';
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
    maplocation:'',
    floor:'',
    amenities:'',
    agents: '',
    agentid:''
  };
  deleteid= 0;


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

  getAllProperty(id:any){
    this.propertydataService.getProperty(id).subscribe(data=>{
      this.property=data;
    })
  }
  
  ondelete(){
    this.propertydataService.deleteProperty(this.deleteid).subscribe(data=>{
      this.propertylist=data;
      alert('Property deleted succesfully');
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
      alert('Property data updated succesfully');
      window.location.reload();
    })
  }

  ondeleteclick(id:any){
    this.deleteid=id;
   }
}
