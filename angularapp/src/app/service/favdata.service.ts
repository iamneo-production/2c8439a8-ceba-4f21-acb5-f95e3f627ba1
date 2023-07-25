import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favourite } from '../model/favourite';

@Injectable({
  providedIn: 'root'
})
export class FavdataService {

   //Vasanth
   private getUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites";  
   private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites/";  
   private deleteUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites/";  
   private updateUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites/"; 
   private postUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites";

  //  //Suganya
  //  private getUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/favourites";  
  //  private getbyidUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/favourites/";  
  //  private deleteUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/favourites/";  
  //  private updateUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/favourites/";  
  //  private postUrl = "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/favourites";


  constructor(private httpClient: HttpClient) { }

  
  getFavourites(): Observable<Favourite[]>{
    return this.httpClient.get<Favourite[]>(`${this.getUrl}`);
  }
  
  getFavourite(FavouriteId: any): Observable<Favourite>{
    return this.httpClient.get<Favourite>(`${this.getbyidUrl}/${FavouriteId}`);
  }

  updateFavourite(FavouriteId: any,FavouriteBody: any): Observable<Favourite[]>{
    return this.httpClient.put<Favourite[]>(`${this.updateUrl}/${FavouriteId}`, FavouriteBody);
  }
  
  postFavourite(FavouriteBody: any): Observable<Favourite>{
    return this.httpClient.post<Favourite>(`${this.postUrl}`, FavouriteBody);
  }

  deleteFavourite(FavouriteId: any): Observable<Favourite[]>{
    return this.httpClient.delete<Favourite[]>(`${this.deleteUrl}/${FavouriteId}`);
  }
}
