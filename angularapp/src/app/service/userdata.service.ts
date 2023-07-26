import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private httpClient: HttpClient){}
  

  getUsers(): Observable<User[]>{
    let userUrl = 'http://localhost:8080/users';
    return this.httpClient.get<User[]>(userUrl);
  }
  
  getUser(userId: any): Observable<User>{
    let userUrl = 'http://localhost:8080/users/'+userId;
    return this.httpClient.get<User>(userUrl);
  }

  deleteUser(userId: any): Observable<User[]>{
    let userUrl = 'http://localhost:8080/users/'+userId;
    return this.httpClient.delete<User[]>(userUrl);
  }
  
  updateUser(UserId: any,userBody: any): Observable<User[]>{
    const userUrl = 'http://localhost:8080/users/'+UserId;
    return this.httpClient.put<User[]>(userUrl, userBody);
  }
  
  postUser(userBody: any): Observable<User>{
    const userUrl = 'http://localhost:8080/users';
    return this.httpClient.post<User>(userUrl, userBody);
  }

  loginUser(user:any): Observable<any>{
      const userUrl = 'http://localhost:8080/user/login';
      return this.httpClient.post(userUrl,user);
  }
  signupUser(user:any): Observable<any>{
      const userUrl = 'http://localhost:8080/user/signup';
      return this.httpClient.post(userUrl,user);
  }
  updatePass(id:number,oldpass:string,newpass:string):Observable<any>{
    const userUrl = `http://localhost:8080/users/updatepass/${id}/${oldpass}/${newpass}`;
    return this.httpClient.put(userUrl,null)
  }
}
