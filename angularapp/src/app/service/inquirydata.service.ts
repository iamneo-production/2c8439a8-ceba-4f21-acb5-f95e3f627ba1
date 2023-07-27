
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inquiry } from '../model/inquiry';

@Injectable({
  providedIn: 'root'
})
export class InquirydataService {

  
    //Vasanth
    // private getUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries";  
    // private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries/"; 
  
    //Anshi
    // private getUrl =  "https://8080-fcbcbadfadafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries";  
    // private getbyidUrl =  "https://8080-fcbcbadfadafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries/"; 
  
    //Lakshana
    // private getUrl =  "https://8080-bfbceacbaecbecafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries";  
    // private getbyidUrl =  "https://8080-bfbceacbaecbecafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries/"; 
  
    //Raas
    private getUrl =  "https://8080-eedfeafbdafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries";  
    private getbyidUrl =  "https://8080-eedfeafbdafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries/"; 
  
    //Suganya
    // private getUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries";  
    // private getbyidUrl =  "https://8080-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries/"; 
  
    //Susmit
    // private getUrl =  "https://8080-dcdbfcfaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries";  
    // private getbyidUrl =  "https://8080-dcdbfcfaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries/"; 
  
    //Subhashini
    // private getUrl =  "https://8080-cfcedadddfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries";  
    // private getbyidUrl =  "https://8080-cfcedadddfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries/"; 
  
    //Bhavana
    // private getUrl =  "https://8080-cdcbcbdbddadfacfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries";  
    // private getbyidUrl =  "https://8080-cdcbcbdbddadfacfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries/"; 
  
    //Revan
    // private getUrl =  "https://8080-dedcbcbaedafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries";  
    // private getbyidUrl =  "https://8080-dedcbcbaedafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/inquiries/"; 

  constructor(private httpClient: HttpClient){}
  

  getInquiries(): Observable<Inquiry[]>{
    return this.httpClient.get<Inquiry[]>(`${this.getUrl}`);
  }
  
  getInquiry(InquiryId: any): Observable<Inquiry>{
    return this.httpClient.get<Inquiry>(`${this.getbyidUrl}/${InquiryId}`);
  }

  updateInquiry(InquiryId: any,InquiryBody: any): Observable<Inquiry[]>{
    return this.httpClient.put<Inquiry[]>(`${this.getbyidUrl}/${InquiryId}`, InquiryBody);
  }
  
  postInquiry(InquiryBody: any): Observable<Inquiry>{
    return this.httpClient.post<Inquiry>(`${this.getUrl}`, InquiryBody);
  }

  deleteInquiry(InquiryId: any): Observable<Inquiry[]>{
    return this.httpClient.delete<Inquiry[]>(`${this.getbyidUrl}/${InquiryId}`);
  }
}


