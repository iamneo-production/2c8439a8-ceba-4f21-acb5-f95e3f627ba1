import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticate() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  IsLoggedIn(){
    return !!localStorage.getItem('Name');
  }
}