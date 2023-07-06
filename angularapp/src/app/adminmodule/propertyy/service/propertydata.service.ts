
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class PropertydataService {

  constructor(private httpClient: HttpClient){}
  

  getProperties(): Observable<Property[]>{
    let propertyUrl = 'http://localhost:8080/api/v1/property';
    return this.httpClient.get<Property[]>(propertyUrl);
  }
  
  getProperty(propertyId: any): Observable<Property>{
    let propertyUrl = 'http://localhost:8080/api/v1/property/'+propertyId;
    return this.httpClient.get<Property>(propertyUrl);
  }

  updateProperty(propertyId: any,propertyBody: any): Observable<Property[]>{
    const propertyUrl = 'http://localhost:8080/api/v1/property/'+propertyId;
    return this.httpClient.put<Property[]>(propertyUrl, propertyBody);
  }
  
  postProperty(propertyBody: any): Observable<Property>{
    const propertyUrl = 'http://localhost:8080/api/v1/property';
    return this.httpClient.post<Property>(propertyUrl, propertyBody);
  }

  deleteProperty(propertyId: any): Observable<Property[]>{
    let propertyUrl = 'http://localhost:8080/api/v1/property/'+propertyId;
    return this.httpClient.delete<Property[]>(propertyUrl);
  }
}


