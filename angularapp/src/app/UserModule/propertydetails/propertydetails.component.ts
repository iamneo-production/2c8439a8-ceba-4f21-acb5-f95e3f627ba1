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
  Agentname:string = localStorage.getItem('name')!;
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
 this.getFavourites()
}

addToFavorites(id:string){
  let userid = localStorage.getItem('userId')!;
  let favourite : Favourite = {
    id: 0,
    propertyid: id,
    userid: userid
  } 
  this.favdataService.createFavourite(favourite).subscribe(data=>{
    this.getFavourites();
  })
}

getFavourites(){
  let userid = Number(localStorage.getItem('userId'));
  this.favdataService.getByUserId(userid).subscribe(data=>{
    this.favourites = data;
  })
}

isFavourite():boolean{
  for (let index = 0; index < this.favourites.length; index++) {
    const element = this.favourites[index];
    if(element.propertyid===this.property.id){
      return true;
    }
  }
  return false;
}
}