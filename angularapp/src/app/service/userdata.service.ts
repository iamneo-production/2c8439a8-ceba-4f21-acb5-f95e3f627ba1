import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserdataService {

 

  //Vasanth
  private getUrl =      "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/users";  
  private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/users/";  
  private loginUrl =    "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/user/login";  
  private signupUrl =   "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/user/signup";  

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
}

