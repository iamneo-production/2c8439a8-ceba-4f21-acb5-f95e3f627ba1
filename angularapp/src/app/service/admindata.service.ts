import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdmindataService {

  constructor(private httpClient: HttpClient){}


  getAdmins(): Observable<Admin[]>{
    let adminUrl = 'http://localhost:8080/admins';
    return this.httpClient.get<Admin[]>(adminUrl);
  }
  
  getAdmin(adminId: any): Observable<Admin>{
    let AdminUrl = 'http://localhost:8080/admins/'+adminId;
    return this.httpClient.get<Admin>(AdminUrl);
  }

  deleteAdmin(adminId: any): Observable<Admin[]>{
    let adminUrl = 'http://localhost:8080/admins/'+adminId;
    return this.httpClient.delete<Admin[]>(adminUrl);
  }

  loginAdmin(admin:any): Observable<any>{
    const adminUrl = 'http://localhost:8080/admin/login';
    return this.httpClient.post(adminUrl,admin);
}
  signupAdmin(admin:any): Observable<any>{
    const adminUrl = 'http://localhost:8080/admin/signup';
    return this.httpClient.post(adminUrl,admin);
}

  updateAdmin(adminId: any,adminBody: any): Observable<Admin[]>{
    const adminUrl = 'http://localhost:8080/admins/'+adminId;
    return this.httpClient.put<Admin[]>(adminUrl, adminBody);
  }
  
}
