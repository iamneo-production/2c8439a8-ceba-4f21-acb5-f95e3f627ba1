import { Component } from '@angular/core';
import { Inquiry } from '../../model/inquiry';
import { InquirydataService } from '../../service/inquirydata.service';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class InquiriesComponent {
  
  inquirylist: Inquiry[] = [];

  inquiry: Inquiry= {
   
    id: '',
    name: '',
    email: '',
    question: '',
    date: '',
    status: '',
    answer:''

  };

  ngOnInit(): void{
   this.getAllInquiries();
  }

  constructor(private inquirydataService:InquirydataService) {
  }
  getAllInquiries(){
    this.inquirydataService.getInquiries().subscribe(data=>{
      this.inquirylist= data;
    })
  }

  onedit(id:any){
    this.inquirydataService.getInquiry(id).subscribe(data=>{
      this.inquiry=data;
    })
  }

  onSubmit(){
    this.inquiry.status = "Answered";
    this.inquirydataService.updateInquiry(this.inquiry.id,this.inquiry).subscribe(data=>{
      this.inquirylist=data;
      window.location.reload();
    })
  }
  deleteid = 0;
  
  onDelete(id:any){
    this.deleteid=id;
    this.inquirydataService.deleteInquiry(this.deleteid).subscribe(data=>{
      this.inquirylist=data;
      alert('Question deleted succesfully!')
      window.location.reload();
    })
  }
}
