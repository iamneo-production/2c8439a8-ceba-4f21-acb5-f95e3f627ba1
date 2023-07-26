import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Favourite } from 'src/app/model/favourite';
import { FavdataService } from 'src/app/service/favdata.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  favourites: Favourite[] = [];

  constructor(private favdataService: FavdataService, private router:Router) { }

  ngOnInit() {
    this.favdataService.getFavourites().subscribe(favourites => {
      this.favourites = favourites;
    });
  }


  removeFromFavourites(favourite: Favourite) {
    this.favdataService.deleteFavourite(favourite.id).subscribe(() => {
      this.favourites = this.favourites.filter(fav => fav.id !== favourite.id);
    });
  }

  isAddedToFavourites(favourite: Favourite) {
    return favourite.isAddedToFavourites; 
  }
  
  propertyDetails(propertyid:any){
    this.router.navigate(['details',propertyid]);
   }
}
