import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Inquiry } from 'src/app/model/inquiry';
import { User } from 'src/app/model/user';
import { InquirydataService } from 'src/app/service/inquirydata.service';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-accountmanagement',
  templateUrl: './accountmanagement.component.html',
  styleUrls: ['./accountmanagement.component.css']
})
export class AccountmanagementComponent {

  inquirylist : Inquiry[] = [];

  inquiry: Inquiry= {
    id: "",
    name: "",
    email: "",
    question: "",
    date: "",
    status: "",
    answer:""
  };

  userslist: User[] = [];
  user: User= {
    userId: localStorage.getItem('userId')!,
    username: localStorage.getItem('username')!,
    email: localStorage.getItem('useremail')!,
    mobileNumber: localStorage.getItem('mobileNumber')!
  }; 

  ngOnInit():void {
    this.getAllInquires();
  }
  constructor(private inquirydataService: InquirydataService, private userdataservice:UserdataService, private router:Router) {
  }
  getAllInquires(){
    this.inquirydataService.getInquiries().subscribe(data=>{
      this.inquirylist = data;
    })
  }

  getAllInquiry(id:any){
    this.inquirydataService.getInquiry(id).subscribe(data=>{
      this.inquiry=data;
    })
  }

  onChange(oldpass:string,newpass:string,confirmpass:string){

    if(newpass===confirmpass && newpass!=''){
      let id = Number(localStorage.getItem('userId'))
      this.userdataservice.updatePass(id,oldpass,newpass).subscribe(data=>{
        alert('Password Updated Successfully!')
      },error=>{alert('Incorrect Current Password,Updation failed')})
    }
    else{
      alert('Password Mismatched')
    }
  }

  onSubmit(){
    this.userdataservice.updateUser(this.user.userId,this.user).subscribe(data=>{
      this.userslist=data;
      console.log(data)
      localStorage.setItem("userId",this.user.userId+'')
      localStorage.setItem("username",this.user.username+'')
      localStorage.setItem("email",this.user.email+'')
      localStorage.setItem("mobileNumber",this.user.mobileNumber+'')
    })
  }

  ondeleteuser(){
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("useremail");
    localStorage.removeItem("mobileNumber");
    this.userdataservice.deleteUser(this.user.userId).subscribe(()=>{
      this.router.navigate(['/userlogin']);
    })
  }


}
