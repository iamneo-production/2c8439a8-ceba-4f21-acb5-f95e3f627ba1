import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdmindataService {

<<<<<<< HEAD

  // //Vasanth"
  // private getUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins";  
  // private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins/"; 
  // private loginUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/login";  
  // private signupUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/signup";  

  //Anshi
  // private getUrl =  "https://8080-fcbcbadfadafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins";  
  // private getbyidUrl =  "https://8080-fcbcbadfadafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins/"; 
  // private loginUrl =  "https://8080-fcbcbadfadafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/login";  
  // private signupUrl =  "https://8080-fcbcbadfadafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/signup";  

  //Lakshana
  // private getUrl =  "https://8080-bfbceacbaecbecafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins";  
  // private getbyidUrl =  "https://8080-bfbceacbaecbecafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins/"; 
  // private loginUrl =  "https://8080-bfbceacbaecbecafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/login";  
  // private signupUrl =  "https://8080-bfbceacbaecbecafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/signup";  

  //Raas
  // private getUrl =  "https://8080-eedfeafbdafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins";  
  // private getbyidUrl =  "https://8080-eedfeafbdafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins/"; 
  // private loginUrl =  "https://8080-eedfeafbdafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/login";  
  // private signupUrl =  "https://8080-eedfeafbdafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/signup";  

  //Suganya
  // private getUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins";  
  // private getbyidUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins/"; 
  // private loginUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/login";  
  // private signupUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/signup";  

  //Susmit
  // private getUrl =  "https://8080-dcdbfcfaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins";  
  // private getbyidUrl =  "https://8080-dcdbfcfaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins/"; 
  // private loginUrl =  "https://8080-dcdbfcfaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/login";  
  // private signupUrl =  "https://8080-dcdbfcfaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/signup";  

  //Subhashini
  // private getUrl =  "https://8080-cfcedadddfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins";  
  // private getbyidUrl =  "https://8080-cfcedadddfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins/"; 
  // private loginUrl =  "https://8080-cfcedadddfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/login";  
  // private signupUrl =  "https://8080-cfcedadddfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/signup";  

  //Bhavana
  // private getUrl =  "https://8080-cdcbcbdbddadfacfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins";  
  // private getbyidUrl =  "https://8080-cdcbcbdbddadfacfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins/"; 
  // private loginUrl =  "https://8080-cdcbcbdbddadfacfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/login";  
  // private signupUrl =  "https://8080-cdcbcbdbddadfacfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/signup";  

  // Revan
  private getUrl =  "https://8080-dedcbcbaedafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins";  
  private getbyidUrl =  "https://8080-dedcbcbaedafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins/"; 
  private loginUrl =  "https://8080-dedcbcbaedafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/login";  
  private signupUrl =  "https://8080-dedcbcbaedafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/signup";  

=======
  //Suganya
  private getUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins";  
  private getbyidUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admins/"; 
  private loginUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/login";  
  private signupUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/admin/signup";  
>>>>>>> 5798f62667c34b18b42bc138295527ea4e1bb85b

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
