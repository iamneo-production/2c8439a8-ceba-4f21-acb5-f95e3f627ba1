import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private httpClient: HttpClient) {}

  authenticate(username: string, password: string): Observable<boolean> {
    const loginData = {
      username: username,
      password: password
    };

    return this.httpClient.post('http://localhost:8080/admin/login', loginData, {responseType: 'text'})
      .pipe(
        map(response => {
          if (response) {
            sessionStorage.setItem('token', response);
            return true;
          }
          return false;
        })
      );
  }

  // authenticate1(username: string, password: string) {
  //   const loginData = {
  //     username: username,
  //     password: password
  //   };

  //   return this.httpClient.post('http://localhost:8080/admin/login', loginData, {responseType: 'text'})
  //     .pipe(
  //       catchError(error => {
  //         console.error(error);
  //         throw error;
  //       }),
  //       map(response => {
  //         console.log(response);
  //         if (response) {
  //           sessionStorage.setItem('token', response);
  //           return true;
  //         }
  //         return false;
  //       })
  //     );
  // }

  logout(): void {
    sessionStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('token') !== null;
  }
}