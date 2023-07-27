import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favourite } from '../model/favourite';

@Injectable({
  providedIn: 'root'
})
export class FavdataService {

    
    //Vasanth
    // private getUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites";  
    // private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites/"; 
    
    //Anshi
    private getUrl =  "https://8080-fcbcbadfadafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites";  
    private getbyidUrl =  "https://8080-fcbcbadfadafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites/"; 
    
    //Lakshana
    // private getUrl =  "https://8080-bfbceacbaecbecafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites";  
    // private getbyidUrl =  "https://8080-bfbceacbaecbecafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites/"; 
    
    //Raas
    // private getUrl =  "https://8080-eedfeafbdafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites";  
    // private getbyidUrl =  "https://8080-eedfeafbdafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites/"; 
    
    //Suganya
    // private getUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites";  
    // private getbyidUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites/"; 
    
    //Susmit
    // private getUrl =  "https://8080-dcdbfcfaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites";  
    // private getbyidUrl =  "https://8080-dcdbfcfaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites/"; 
    
    //Subhashini
    // private getUrl =  "https://8080-cfcedadddfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites";  
    // private getbyidUrl =  "https://8080-cfcedadddfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites/"; 
    
    //Bhavana
    // private getUrl =  "https://8080-cdcbcbdbddadfacfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites";  
    // private getbyidUrl =  "https://8080-cdcbcbdbddadfacfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites/"; 
    
    //Revan
    // private getUrl =  "https://8080-dedcbcbaedafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites";  
    // private getbyidUrl =  "https://8080-dedcbcbaedafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/favourites/"; 

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
