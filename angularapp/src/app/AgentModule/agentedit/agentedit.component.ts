import { Component } from '@angular/core';
import { Property } from 'src/app/model/property';
import { PropertydataService } from 'src/app/service/propertydata.service';

@Component({
  selector: 'app-agentedit',
  templateUrl: './agentedit.component.html',
  styleUrls: ['./agentedit.component.css']
})
export class AgenteditComponent {

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
      alert('Property updated succesfully');
      window.location.reload();
    })
  }

  ondeleteclick(id:any){
    this.deleteid=id;
   }
}
