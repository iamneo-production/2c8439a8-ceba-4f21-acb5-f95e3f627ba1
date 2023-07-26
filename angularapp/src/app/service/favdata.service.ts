import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favourite } from '../model/favourite';

@Injectable({
  providedIn: 'root'
})
export class FavdataService {

  constructor(private httpClient: HttpClient) { }

  
  getByUserId(id:number): Observable<any>{
    const url = `http://localhost:8080/favourites/${id}`;
    return this.httpClient.get(url);
  }

  createFavourite(favourite:Favourite): Observable<any>{
    const url = `http://localhost:8080/favourites`;
    return this.httpClient.post(url,favourite);
  }

  deleteFavourite(id:number): Observable<any>{
    const url = `http://localhost:8080/favourites/${id}`;
    return this.httpClient.delete(url);
  }
}
