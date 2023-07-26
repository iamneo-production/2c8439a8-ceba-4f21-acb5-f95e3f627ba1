import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Favourite } from 'src/app/model/favourite';
import { Property } from 'src/app/model/property';
import { FavdataService } from 'src/app/service/favdata.service';
import { PropertydataService } from 'src/app/service/propertydata.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  favourites: Favourite[] = [];
  propertylist: Property[]= [];

  constructor(private favdataService: FavdataService, private router:Router, private propertydataservice:PropertydataService) { }

  ngOnInit() {
    this.getFavourites()
  }

  getFavourites(){
    let userid = Number(localStorage.getItem('userId'));
    this.favdataService.getByUserId(userid).subscribe(data=>{
      this.favourites = data;
      this.getProperties()
    })
  }

getProperties(){
  let properties : Property[] = [];
  for (let index = 0; index < this.favourites.length; index++) {
    const element = this.favourites[index];
    this.propertydataservice.getProperty(element.propertyid).subscribe(data=>{
      properties.push(data);
    })
  }
  this.propertylist = properties;
}

removeFromFavourites(id:String) {
    for (let index = 0; index < this.favourites.length; index++) {
      const element = this.favourites[index];
      if(element.propertyid===id){
        this.favdataService.deleteFavourite(element.id).subscribe(data=>{
          this.getFavourites();
        })
      }
    }
  }
  
  propertyDetails(propertyid:any){
    this.router.navigate(['details',propertyid]);
   }
}
