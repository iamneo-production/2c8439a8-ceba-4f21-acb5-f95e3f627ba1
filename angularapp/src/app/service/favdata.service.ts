import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favourite } from '../model/favourite';

@Injectable({
  providedIn: 'root'
})
export class FavdataService {


    
    // //Vasanth
    // private getUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites";  
    // private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites/"; 
    
    //Suganya
    private getUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/favourites";  
    private getbyidUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/favourites/"; 
    
  constructor(private httpClient: HttpClient) { }

  

  getByUserId(id:number): Observable<any>{
    return this.httpClient.get(`${this.getbyidUrl}/${id}`);
  }

  createFavourite(favourite:Favourite): Observable<any>{
    return this.httpClient.post(`${this.getUrl}`,favourite);
  }

  deleteFavourite(id:number): Observable<any>{
    return this.httpClient.delete(`${this.getbyidUrl}/${id}`);

  }
}
