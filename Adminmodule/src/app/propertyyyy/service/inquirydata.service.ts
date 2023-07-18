
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inquiry } from '../model/inquiry';

@Injectable({
  providedIn: 'root'
})
export class InquirydataService {

  constructor(private httpClient: HttpClient){}
  

  getInquiries(): Observable<Inquiry[]>{
    let InquiryUrl = 'http://localhost:8080/api/v1/inquiries';
    return this.httpClient.get<Inquiry[]>(InquiryUrl);
  }
  
  getInquiry(InquiryId: any): Observable<Inquiry>{
    let InquiryUrl = 'http://localhost:8080/api/v1/inquiries/'+InquiryId;
    return this.httpClient.get<Inquiry>(InquiryUrl);
  }

  updateInquiry(InquiryId: any,InquiryBody: any): Observable<Inquiry[]>{
    const InquiryUrl = 'http://localhost:8080/api/v1/inquiries/'+InquiryId;
    return this.httpClient.put<Inquiry[]>(InquiryUrl, InquiryBody);
  }
  
  postInquiry(InquiryBody: any): Observable<Inquiry>{
    const InquiryUrl = 'http://localhost:8080/api/v1/inquiries';
    return this.httpClient.post<Inquiry>(InquiryUrl, InquiryBody);
  }

  deleteInquiry(InquiryId: any): Observable<Inquiry[]>{
    let InquiryUrl = 'http://localhost:8080/api/v1/inquiries/'+InquiryId;
    return this.httpClient.delete<Inquiry[]>(InquiryUrl);
  }
}


