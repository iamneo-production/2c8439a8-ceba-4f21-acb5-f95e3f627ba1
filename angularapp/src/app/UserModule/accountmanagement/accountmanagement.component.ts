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
  username =  localStorage.getItem('username');
  userId =  localStorage.getItem('userId');
  useremail =  localStorage.getItem('useremail');
  userphone =  localStorage.getItem('mobileNumber');
  inquirylist : Inquiry[] = []

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
    userId: '',
    username: '',
    email: '',
    mobileNumber: '',
    password:''
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

  deleteAcc(){
    this.userdataservice.deleteUser(this.userId).subscribe(data=>{
      localStorage.clear();
      this.router.navigate(['/userlogin']);
    })
  }

  onedit(userId:any){
    this.userdataservice.getUser(userId).subscribe(data=>{
      this.user=data;
    })
  }

  onSubmit(){
    this.userdataservice.updateUser(this.user.userId,this.user).subscribe(data=>{
      this.userslist=data;
      console.log(data)
    })
  }

  ondeleteuser(){
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("useremail");
    localStorage.removeItem("mobileNumber");
    this.userdataservice.deleteUser(this.userId).subscribe(data=>{
      this.userslist=data;
    })
  }


}
