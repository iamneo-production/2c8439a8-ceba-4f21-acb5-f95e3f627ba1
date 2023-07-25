import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favourite } from '../model/favourite';

@Injectable({
  providedIn: 'root'
})
export class FavdataService {

  constructor(private httpClient: HttpClient) { }

  
  getFavourites(): Observable<Favourite[]>{
    let FavouriteUrl = 'http://localhost:8080/favourites';
    return this.httpClient.get<Favourite[]>(FavouriteUrl);
  }
  
  getFavourite(FavouriteId: any): Observable<Favourite>{
    let FavouriteUrl = 'http://localhost:8080/favourites/'+FavouriteId;
    return this.httpClient.get<Favourite>(FavouriteUrl);
  }

  updateFavourite(FavouriteId: any,FavouriteBody: any): Observable<Favourite[]>{
    const FavouriteUrl = 'http://localhost:8080/favourites/'+FavouriteId;
    return this.httpClient.put<Favourite[]>(FavouriteUrl, FavouriteBody);
  }
  
  postFavourite(FavouriteBody: any): Observable<Favourite>{
    const FavouriteUrl = 'http://localhost:8080/favourites';
    return this.httpClient.post<Favourite>(FavouriteUrl, FavouriteBody);
  }

  deleteFavourite(FavouriteId: any): Observable<Favourite[]>{
    let FavouriteUrl = 'http://localhost:8080/favourites/'+FavouriteId;
    return this.httpClient.delete<Favourite[]>(FavouriteUrl);
  }
}
