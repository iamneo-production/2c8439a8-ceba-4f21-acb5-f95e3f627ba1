import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class PropertydataService {

      //Vasanth
      private getUrl =          "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/properties";  
      private getbyidUrl =      "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/properties/";
      private getbyagentidUrl = "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/properties/getbyAgentid/";

      //Revan
      // private getUrl =          "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/properties";  
      // private getbyidUrl =      "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/properties/";
      // private getbyagentidUrl = "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/properties/getbyAgentid/";


      //Anshi
      // private getUrl =          "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/properties";  
      // private getbyidUrl =      "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/properties/";
      // private getbyagentidUrl = "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/properties/getbyAgentid/";

      //Raas
      // private getUrl =          "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/properties";  
      // private getbyidUrl =      "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/properties/";
      // private getbyagentidUrl = "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/properties/getbyAgentid/";


    //Vasanth
    // private getUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/properties";  
    // private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/properties/"; 
    // private getbyagentidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/properties/getbyAgentid/"; 

    //Suganya
    private getUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/properties";  
    private getbyidUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/properties/"; 
    private getbyagentidUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/properties/getbyAgentid/"; 

  constructor(private httpClient: HttpClient){}
  

  getProperties(): Observable<Property[]>{
    return this.httpClient.get<Property[]>(`${this.getUrl}`);
  }
  getPropertybyAgentid(): Observable<Property[]>{
    let agentId = localStorage.getItem('id');
    return this.httpClient.get<Property[]>(`${this.getbyagentidUrl}/${agentId}`);
<<<<<<< HEAD
=======

>>>>>>> f135a4cf2a2c6158d88d2b29fa2dd43e71c2bbb9
  }
  
  getProperty(propertyId: any): Observable<Property>{
    console.log(propertyId);
    return this.httpClient.get<Property>(`${this.getbyidUrl}/${propertyId}`);
  }

  updateProperty(propertyId: any,propertyBody: any): Observable<Property[]>{
<<<<<<< HEAD
=======

>>>>>>> f135a4cf2a2c6158d88d2b29fa2dd43e71c2bbb9
    return this.httpClient.put<Property[]>(`${this.getbyidUrl}/${propertyId}`, propertyBody);
  }
  
  postProperty(propertyBody: any): Observable<Property>{
<<<<<<< HEAD
    return this.httpClient.post<Property>(`${this.getbyidUrl}`, propertyBody);
=======
    return this.httpClient.post<Property>(`${this.getUrl}`, propertyBody);
>>>>>>> f135a4cf2a2c6158d88d2b29fa2dd43e71c2bbb9
  }

  deleteProperty(propertyId: any): Observable<Property[]>{
    return this.httpClient.delete<Property[]>(`${this.getbyidUrl}/${propertyId}`);
<<<<<<< HEAD
=======

>>>>>>> f135a4cf2a2c6158d88d2b29fa2dd43e71c2bbb9
  }
}


