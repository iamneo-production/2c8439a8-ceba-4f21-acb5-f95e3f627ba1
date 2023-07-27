import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  //Vasanth
  // private getUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users";  
  // private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/"; 
  // private getpass =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/updatepass/"; 
  // private loginUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/login";  
  // private signupUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/signup";  

  // // Anshi
  // private getUrl =  "https://8080-fcbcbadfadafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users";  
  // private getbyidUrl =  "https://8080-fcbcbadfadafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/"; 
  // private getpass =  "https://8080-fcbcbadfadafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/updatepass/"; 
  // private loginUrl =  "https://8080-fcbcbadfadafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/login";  
  // private signupUrl =  "https://8080-fcbcbadfadafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/signup";  

  // // Lakshana
  // private getUrl =  "https://8080-bfbceacbaecbecafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users";  
  // private getbyidUrl =  "https://8080-bfbceacbaecbecafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/"; 
  // private getpass =  "https://8080-bfbceacbaecbecafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/updatepass/"; 
  // private loginUrl =  "https://8080-bfbceacbaecbecafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/login";  
  // private signupUrl =  "https://8080-bfbceacbaecbecafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/signup";  

  // // Raas
  // private getUrl =  "https://8080-eedfeafbdafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users";  
  // private getbyidUrl =  "https://8080-eedfeafbdafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/"; 
  // private getpass =  "https://8080-eedfeafbdafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/updatepass/"; 
  // private loginUrl =  "https://8080-eedfeafbdafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/login";  
  // private signupUrl =  "https://8080-eedfeafbdafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/signup";  

  // // Suganya
  // private getUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users";  
  // private getbyidUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/"; 
  // private getpass =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/updatepass/"; 
  // private loginUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/login";  
  // private signupUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/signup";  

  // // Susmit
  // private getUrl =  "https://8080-dcdbfcfaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users";  
  // private getbyidUrl =  "https://8080-dcdbfcfaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/"; 
  // private getpass =  "https://8080-dcdbfcfaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/updatepass/"; 
  // private loginUrl =  "https://8080-dcdbfcfaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/login";  
  // private signupUrl =  "https://8080-dcdbfcfaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/signup";  

  // // Subhashini
  private getUrl =  "https://8080-cfcedadddfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users";  
  private getbyidUrl =  "https://8080-cfcedadddfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/"; 
  private getpass =  "https://8080-cfcedadddfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/updatepass/"; 
  private loginUrl =  "https://8080-cfcedadddfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/login";  
  private signupUrl =  "https://8080-cfcedadddfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/signup";  

  // // Bhavana
  // private getUrl =  "https://8080-cdcbcbdbddadfacfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users";  
  // private getbyidUrl =  "https://8080-cdcbcbdbddadfacfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/"; 
  // private getpass =  "https://8080-cdcbcbdbddadfacfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/updatepass/"; 
  // private loginUrl =  "https://8080-cdcbcbdbddadfacfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/login";  
  // private signupUrl =  "https://8080-cdcbcbdbddadfacfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/signup";  

  // // Bhavana
  // private getUrl =  "https://8080-dedcbcbaedafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users";  
  // private getbyidUrl =  "https://8080-dedcbcbaedafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/"; 
  // private getpass =  "https://8080-dedcbcbaedafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/users/updatepass/"; 
  // private loginUrl =  "https://8080-dedcbcbaedafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/login";  
  // private signupUrl =  "https://8080-dedcbcbaedafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/user/signup";  

  constructor(private httpClient: HttpClient){}
  

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.getUrl}`);
  }
  
  getUser(userId: any): Observable<User>{
    return this.httpClient.get<User>(`${this.getbyidUrl}/${userId}`);
  }

  deleteUser(userId: any): Observable<User[]>{
    return this.httpClient.delete<User[]>(`${this.getbyidUrl}/${userId}`);
  }
  
  updateUser(userId: any,userBody: any): Observable<User[]>{
    return this.httpClient.put<User[]>(`${this.getbyidUrl}/${userId}`, userBody);
  }
  
  postUser(userBody: any): Observable<User>{
    return this.httpClient.post<User>(`${this.getbyidUrl}`, userBody);
  }

  loginUser(user:any): Observable<any>{
      return this.httpClient.post(`${this.loginUrl}`,user);
  }
  signupUser(user:any): Observable<any>{
      return this.httpClient.post(`${this.signupUrl}`,user);
  }
  updatePass(id:number,oldpass:string,newpass:string):Observable<any>{
    return this.httpClient.put(`${this.getpass}/${id}/${oldpass}/${newpass}`,null)
  }
}

