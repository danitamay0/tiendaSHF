import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getEmail(){
    return (JSON.parse( localStorage.getItem('auth') )).email
  }

  isLogedIn(){
    return localStorage.getItem('auth') ? true : false
  }
}
