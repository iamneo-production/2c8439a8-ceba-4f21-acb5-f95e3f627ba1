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
    let userUrl = 'http://localhost:8080/api/v1/users';
    return this.httpClient.get<User[]>(userUrl);
  }
  
  getUser(userId: any): Observable<User>{
    let userUrl = 'http://localhost:8080/api/v1/users/'+userId;
    return this.httpClient.get<User>(userUrl);
  }

  deleteUser(userId: any): Observable<User[]>{
    let userUrl = 'http://localhost:8080/api/v1/users/'+userId;
    return this.httpClient.delete<User[]>(userUrl);
  }
}

// updateUser(UserId: any,userBody: any): Observable<User[]>{
//   const userUrl = 'http://localhost:8080/api/v1/users/'+UserId;
//   return this.httpClient.put<User[]>(userUrl, userBody);
// }

// postUser(userBody: any): Observable<User>{
//   const userUrl = 'http://localhost:8080/api/v1/users';
//   return this.httpClient.post<User>(userUrl, userBody);
// }