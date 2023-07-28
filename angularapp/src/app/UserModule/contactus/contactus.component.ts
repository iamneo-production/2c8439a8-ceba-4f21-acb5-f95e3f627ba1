import { Component } from '@angular/core';
import { Inquiry } from 'src/app/model/inquiry';
import { InquirydataService } from 'src/app/service/inquirydata.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
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
  ngOnInit():void {
    this.getAllInquires();
  }
  constructor(private inquirydataService: InquirydataService) {
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

  onSubmit(){
    this.inquirydataService.postInquiry(this.inquiry).subscribe(data=>{
      alert('Question posted succesfully!')
      window.location.reload();
    })
  }
  isValid():boolean{
    if(this.inquiry.name != '' && this.inquiry.email != '' && this.inquiry.question ){
      return false;
    } 
    return true;
  }
}
