import { Component } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { AdmindataService } from 'src/app/service/admindata.service';

@Component({
  selector: 'app-adminacc',
  templateUrl: './adminacc.component.html',
  styleUrls: ['./adminacc.component.css']
})
export class AdminaccComponent {

  adminslist: Admin[] = [];

  admin: Admin= {
    id: localStorage.getItem('adminid')!,
    name: localStorage.getItem('adminname')!,
    email:  localStorage.getItem('adminemail')!
  };


  constructor(private admindataservice:AdmindataService){}

  
  onSubmit(){
    this.admindataservice.updateAdmin(this.admin.id,this.admin).subscribe(data=>{
      this.adminslist=data;
      console.log(data)
      alert('Your data uploaded succesfully');
      localStorage.setItem("adminid",this.admin.id+'')
      localStorage.setItem("adminname",this.admin.name+'')
      localStorage.setItem("adminemail",this.admin.email+'')
    })
  }

  ondeleteadmin(){
    alert('Your account deleted succesfully');
    localStorage.removeItem("adminid");
    localStorage.removeItem("adminname");
    localStorage.removeItem("adminemail");
    this.admindataservice.deleteAdmin(this.admin.id).subscribe(data=>{
      this.adminslist=data;
    })
  }
}
