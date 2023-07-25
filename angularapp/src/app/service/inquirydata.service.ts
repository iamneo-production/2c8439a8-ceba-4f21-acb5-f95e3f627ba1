
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inquiry } from '../model/inquiry';

@Injectable({
  providedIn: 'root'
})
export class InquirydataService {

  //Vasanth
  private getUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries";  
  private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries/";  
  private deleteUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries/";  
  private updateUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries/"; 
  private postUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries";

  // //Suganya
  //  private getUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/inquiries";  
  //  private getbyidUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/inquiries/";  
  //  private deleteUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/inquiries/";  
  //  private updateUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/inquiries/";  
  //  private postUrl = "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/inquiries";



  constructor(private httpClient: HttpClient){}
  

  getInquiries(): Observable<Inquiry[]>{
    return this.httpClient.get<Inquiry[]>(`${this.getUrl}`);
  }
  
  getInquiry(InquiryId: any): Observable<Inquiry>{
    return this.httpClient.get<Inquiry>(`${this.getbyidUrl}/${InquiryId}`);
  }

  updateInquiry(InquiryId: any,InquiryBody: any): Observable<Inquiry[]>{
    return this.httpClient.put<Inquiry[]>(`${this.updateUrl}/${InquiryId}`, InquiryBody);
  }
  
  postInquiry(InquiryBody: any): Observable<Inquiry>{
    return this.httpClient.post<Inquiry>(`${this.postUrl}`, InquiryBody);
  }

  deleteInquiry(InquiryId: any): Observable<Inquiry[]>{
    return this.httpClient.delete<Inquiry[]>(`${this.deleteUrl}/${InquiryId}`);
  }
}


