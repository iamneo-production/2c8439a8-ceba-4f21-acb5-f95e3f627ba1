import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  //Vasanth
  private getUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users";  
  private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/";  
  private deleteUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/";  
  private updateUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/";  
  private postUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/";  
  private loginUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/login";  
  private signupUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/signup";  

  constructor(private httpClient: HttpClient){}
  

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.getUrl}`);
  }
  
  getUser(userId: any): Observable<User>{
    return this.httpClient.get<User>(`${this.getbyidUrl}/${userId}`);
  }

  deleteUser(userId: any): Observable<User[]>{
    return this.httpClient.delete<User[]>(`${this.deleteUrl}/${userId}`);
  }
  
  updateUser(userId: any,userBody: any): Observable<User[]>{
    return this.httpClient.put<User[]>(`${this.updateUrl}/${userId}`, userBody);
  }
  
  postUser(userBody: any): Observable<User>{
    return this.httpClient.post<User>(`${this.postUrl}`, userBody);
  }

  loginUser(user:any): Observable<any>{
      return this.httpClient.post(`${this.loginUrl}`,user);
  }
  signupUser(user:any): Observable<any>{
      return this.httpClient.post(`${this.signupUrl}`,user);
  }
  updatePass(id:number,oldpass:string,newpass:string):Observable<any>{
    const userUrl = `http://localhost:8080/users/updatepass/${id}/${oldpass}/${newpass}`;
    return this.httpClient.put(userUrl,null)
  }
}

