import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserdataService {

 

  //Vasanth
  private getUrl =      "https://8081-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/users";  
  private getbyidUrl =  "https://8081-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/users/";  
  private loginUrl =    "https://8081-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/user/login";  
  private signupUrl =   "https://8081-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/user/signup";  

  //Revan
  // private getUrl =       "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/users";  
  // private getbyidUrl =   "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/users/";  
  // private loginUrl =     "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/user/login";  
  // private signupUrl =    "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/user/signup";  

  //Anshi
  // private getUrl =       "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/users";  
  // private getbyidUrl =   "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/users/";  
  // private loginUrl =     "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/user/login";  
  // private signupUrl =    "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/user/signup";  

  //Raas
  // private getUrl =       "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/users";  
  // private getbyidUrl =   "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/users/";  
  // private loginUrl =     "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/user/login";  
  // private signupUrl =    "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/user/signup";  



  // Suganya
  // private getUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/users";  
  // private getbyidUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/users/"; 
  // private getpass =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/users/updatepass/"; 
  // private loginUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/user/login";  
  // private signupUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/user/signup";   


  constructor(private httpClient: HttpClient){}
  

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.getUrl}`);
  }
  
  getUser(userId: any): Observable<User>{
    return this.httpClient.get<User>(`${this.getbyidUrl}/${userId}`);
  }


  deleteUser(userId: any): Observable<any>{
    let userUrl = 'http://localhost:8080/users/'+userId;
    return this.httpClient.delete(userUrl);

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
    return this.httpClient.put(`${this.getUrl}/${id}/${oldpass}/${newpass}`,null)
  }
}

