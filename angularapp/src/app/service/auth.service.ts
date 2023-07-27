import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticate(username: any, password: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  IsLoggedIn(){
    return !!localStorage.getItem('loginstatus');
  }
}