import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public credentials = {
     email : '',
     password : '',
  }
  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  login(){
    localStorage.setItem('auth',JSON.stringify(this.credentials));
    
    this.router.navigate(['/home']);
  }
}
