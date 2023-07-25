import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class PropertydataService {
  getPropertyById: any;

   //Vasanth
   private getUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/properties";  
   private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/properties/";  
   private deleteUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/properties/";  
   private updateUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/properties/"; 
   private postUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/properties/";
 
  // //Suganya
  //  private getUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/properties";  
  //  private getbyidUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/properties/";  
  //  private deleteUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/properties/";  
  //  private updateUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/properties/";  
  //  private postUrl = "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/properties";

  constructor(private httpClient: HttpClient){}
  

  getProperties(): Observable<Property[]>{
    return this.httpClient.get<Property[]>(`${this.getUrl}`);
  }
  getPropertybyAgentid(): Observable<Property[]>{
    let agentId = localStorage.getItem('id');
    return this.httpClient.get<Property[]>(`${this.getbyidUrl}/${agentId}`);
  }
  
  getProperty(propertyId: any): Observable<Property>{
    console.log(propertyId);
    return this.httpClient.get<Property>(`${this.getbyidUrl}/${propertyId}`);
  }

  updateProperty(propertyId: any,propertyBody: any): Observable<Property[]>{
    return this.httpClient.put<Property[]>(`${this.updateUrl}/${propertyId}`, propertyBody);
  }
  
  postProperty(propertyBody: any): Observable<Property>{
    return this.httpClient.post<Property>(`${this.postUrl}`, propertyBody);
  }

  deleteProperty(propertyId: any): Observable<Property[]>{
    return this.httpClient.delete<Property[]>(`${this.deleteUrl}/${propertyId}`);
  }
}


