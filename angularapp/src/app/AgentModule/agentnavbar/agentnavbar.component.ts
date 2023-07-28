import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agentnavbar',
  templateUrl: './agentnavbar.component.html',
  styleUrls: ['./agentnavbar.component.css']
})
export class AgentnavbarComponent {
  constructor(private router:Router){}
  name:string = localStorage.getItem('name')!;
  profileImageUrl:string = localStorage.getItem('profileImageUrl')!;
  AgentId:string = localStorage.getItem('id')!;


  logout(){
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("agentemail");
    localStorage.removeItem("phone");
    localStorage.removeItem("profileImageUrl");
    localStorage.removeItem('loginstatus');
    this.router.navigate(['agentlogin']);
  }
}
