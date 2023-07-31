import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favourite } from '../model/favourite';

@Injectable({
  providedIn: 'root'
})
export class FavdataService {


  //Vasanth
  private getUrl =      "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/favourites";  
  private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/favourites/"; 

  //Revan
  // private getUrl =      "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/favourites";  
  // private getbyidUrl =  "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/favourites/"; 

  //Anshi
  // private getUrl =      "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/favourites";  
  // private getbyidUrl =  "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/favourites/"; 

  //Raas
  // private getUrl =      "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/favourites";  
  // private getbyidUrl =  "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/favourites/"; 

  constructor(private httpClient: HttpClient) { }

  
  getFavourites(): Observable<Favourite[]>{
    return this.httpClient.get<Favourite[]>(`${this.getUrl}`);
  }
  
  getFavourite(FavouriteId: any): Observable<Favourite>{
    return this.httpClient.get<Favourite>(`${this.getbyidUrl}/${FavouriteId}`);
  }

  updateFavourite(FavouriteId: any,FavouriteBody: any): Observable<Favourite[]>{
    return this.httpClient.put<Favourite[]>(`${this.getbyidUrl}/${FavouriteId}`, FavouriteBody);
  }
  
  postFavourite(FavouriteBody: any): Observable<Favourite>{
    return this.httpClient.post<Favourite>(`${this.getbyidUrl}`, FavouriteBody);
  }

  deleteFavourite(FavouriteId: any): Observable<Favourite[]>{
    return this.httpClient.delete<Favourite[]>(`${this.getbyidUrl}/${FavouriteId}`);
  }
}