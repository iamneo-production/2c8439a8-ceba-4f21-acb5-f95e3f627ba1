import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent {
constructor(private router:Router){}


  name:string = localStorage.getItem('adminname')!;
  AdminId:string = localStorage.getItem('adminid')!;


  logout(){
    localStorage.removeItem("adminid");
    localStorage.removeItem("adminname");
    localStorage.removeItem("adminemail");
    this.router.navigate(['adminlogin']);
  }
}
