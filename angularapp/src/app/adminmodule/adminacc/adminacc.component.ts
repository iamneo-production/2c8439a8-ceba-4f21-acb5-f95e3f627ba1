import { Component } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { AdmindataService } from 'src/app/service/admindata.service';

@Component({
  selector: 'app-adminacc',
  templateUrl: './adminacc.component.html',
  styleUrls: ['./adminacc.component.css']
})
export class AdminaccComponent {
  adminname =  localStorage.getItem('adminname');
  adminemail =  localStorage.getItem('adminemail');
  adminid =  localStorage.getItem('adminid');


  adminslist: Admin[] = [];

  admin: Admin= {
    id: '',
    name: '',
    email: '',
    password: ''
  };


  constructor(private admindataservice:AdmindataService){}

  ondeleteadmin(){
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("agentemail");
    localStorage.removeItem("phone");
    localStorage.removeItem("profileImageUrl");
    this.admindataservice.deleteAdmin(this.adminid).subscribe(data=>{
      this.adminslist=data;
    })
  }
}
