import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent {
constructor(private router:Router){}

   username =  localStorage.getItem('username');

   logout(){
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("useremail");
    localStorage.removeItem("mobileNumber");
    this.router.navigate(['/userlogin']);
  }
}
