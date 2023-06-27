import { Component } from '@angular/core';
import {PropertydataService, propertylist} from '../propertyy/service/propertydata.service'
@Component({
  selector: 'app-editproperty',
  templateUrl: './editproperty.component.html',
  styleUrls: ['./editproperty.component.css']
})
export class EditpropertyComponent {
item: any;
  propertylist: propertylist[] = [];
  ngOnInit(): void{
    this.propertylist = this.propertydataService.getProperty();
  }
  constructor(private propertydataService: PropertydataService) {
  }
  
    ondelete(deleteme: any) {
     this.propertylist.splice(deleteme,1) 
    }
  
  onclick(prouser: any) {
    this.propertylist.push(prouser.value);
    prouser.value = '';
  }
}
