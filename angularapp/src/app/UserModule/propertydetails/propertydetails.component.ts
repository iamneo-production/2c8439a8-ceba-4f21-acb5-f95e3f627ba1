import { Component } from '@angular/core';
import { Property } from 'src/app/model/property';
import {PropertydataService} from '../../service/propertydata.service'
import { ActivatedRoute } from '@angular/router';
import { Favourite } from 'src/app/model/favourite';
import { FavdataService } from 'src/app/service/favdata.service';

@Component({
  selector: 'app-propertydetails',
  templateUrl: './propertydetails.component.html',
  styleUrls: ['./propertydetails.component.css']
})
export class PropertydetailsComponent {
  id: any;
  property: any;
  AgentId:string = localStorage.getItem('id')!;
  favourites: Favourite[] = [];
  
  propertylist: Property[] = [];


constructor(
  private route:ActivatedRoute,
  private propertydataservice: PropertydataService,
  private favdataService: FavdataService
  ){}
getPropertyId:any;

ngOnInit():void{
  this.id = this.route.snapshot.params['id'];
 this.propertydataservice.getProperty(this.id).subscribe((data)=>{
  this.property = data;
  console.log(data)
 })
}

addToFavorites() {
  const favouriteBody: Favourite = {
    id: this.property.id,
    propertyid: this.property.id,
    img: this.property.imageUrls,
    type: this.property.type,
    price: this.property.price,
    name: this.property.title,
    status: this.property.status
  };
  
   // Check if the property is already added to favourites
   const isAlreadyAdded = this.favourites.some((property) => property.id === favouriteBody.propertyid);
   if (isAlreadyAdded) {
     return; // Exit the method if the property is already added
   }
 
   this.favdataService.postFavourite(favouriteBody).subscribe((favourite) => {
     this.favourites.push(favourite);
     this.property.isAddedToFavourites = true; // Set the flag to indicate property added to favourites
   });
}

getAllPropertybyAgentid(agentid:any){
  this.propertydataservice.getPropertybyAgentid().subscribe(data=>{
    this.propertylist= data;
  })
}
}