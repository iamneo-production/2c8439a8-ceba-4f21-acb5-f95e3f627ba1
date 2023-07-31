import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdmindataService {



  //Vasanth
  private getUrl =      "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/admins";  
  private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/admins/";  
  private loginUrl =    "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/admin/login";  
  private signupUrl =   "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/admin/signup"; 

  //Revan
  // private getUrl =      "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/admins";  
  // private getbyidUrl =  "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/admins/";  
  // private loginUrl =    "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/admin/login";  
  // private signupUrl =   "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/admin/signup"; 

  //Anshi
  // private getUrl =      "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/admins";  
  // private getbyidUrl =  "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/admins/";  
  // private loginUrl =    "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/admin/login";  
  // private signupUrl =   "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/admin/signup"; 

  //Raas
  // private getUrl =      "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/admins";  
  // private getbyidUrl =  "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/admins/";  
  // private loginUrl =    "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/admin/login";  
  // private signupUrl =   "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/admin/signup"; 

  // //Vasanth"
  // private getUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins";  
  // private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins/"; 
  // private loginUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/login";  
  // private signupUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/signup";  

   //Suganya"
  // private getUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/admins";  
  // private getbyidUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/admins/"; 
  // private loginUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/admin/login";  
  // private signupUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/admin/signup"; 



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
