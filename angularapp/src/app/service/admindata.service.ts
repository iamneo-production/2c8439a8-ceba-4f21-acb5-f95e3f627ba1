import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdmindataService {


  //Vasanth"
  private getUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins";  
  private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins/"; 
  private loginUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/login";  
  private signupUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/signup";  


  constructor(private httpClient: HttpClient){}

  getAdmins(): Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.getUrl}`);
  }
  
  getAdmin(adminId: any): Observable<Admin>{
    return this.httpClient.get<Admin>(`${this.getbyidUrl}/${adminId}`);
  }

  deleteAdmin(adminId: any): Observable<Admin[]>{
    return this.httpClient.delete<Admin[]>(`${this.getbyidUrl}/${adminId}`);
  }

  loginAdmin(admin:any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}`,admin);
}
  signupAdmin(admin:any): Observable<any>{
    return this.httpClient.post(`${this.signupUrl}`,admin);
}

  updateAdmin(adminId: any,adminBody: any): Observable<Admin[]>{
    return this.httpClient.put<Admin[]>(`${this.getbyidUrl}/${adminId}`,adminBody);
  }
  
}
