import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class PropertydataService {
  getPropertyById: any;

  constructor(private httpClient: HttpClient){}
  

  getProperties(): Observable<Property[]>{
    let propertyUrl = 'http://localhost:8080/properties';
    return this.httpClient.get<Property[]>(propertyUrl);
  }
  getPropertybyAgentid(): Observable<Property[]>{
    let agentId = localStorage.getItem('id');
    let propertyUrl = 'http://localhost:8080/properties/getbyAgentid/'+agentId;
    return this.httpClient.get<Property[]>(propertyUrl);
  }
  
  getProperty(propertyId: any): Observable<Property>{
    console.log(propertyId);
    let propertyUrl = 'http://localhost:8080/properties/'+propertyId;
    return this.httpClient.get<Property>(propertyUrl);
  }

  updateProperty(propertyId: any,propertyBody: any): Observable<Property[]>{
    const propertyUrl = 'http://localhost:8080/properties/'+propertyId;
    return this.httpClient.put<Property[]>(propertyUrl, propertyBody);
  }
  
  postProperty(propertyBody: any): Observable<Property>{
    const propertyUrl = 'http://localhost:8080/properties';
    return this.httpClient.post<Property>(propertyUrl, propertyBody);
  }

  deleteProperty(propertyId: any): Observable<Property[]>{
    let propertyUrl = 'http://localhost:8080/properties/'+propertyId;
    return this.httpClient.delete<Property[]>(propertyUrl);
  }
}


