
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inquiry } from '../model/inquiry';

@Injectable({
  providedIn: 'root'
})
export class InquirydataService {
  

    //Suganya
    // private getUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/inquiries";  
    // private getbyidUrl =  "https://8080-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/inquiries/"; 

    //Vasanth
    private getUrl =      "https://8081-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/inquiries";  
    private getbyidUrl =  "https://8081-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/inquiries/";

    //Revan
    // private getUrl =      "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/inquiries";  
    // private getbyidUrl =  "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/inquiries/";

    //Anshi
    // private getUrl =      "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/inquiries";  
    // private getbyidUrl =  "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/inquiries/";

    //Raas
    // private getUrl =      "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/inquiries";  
    // private getbyidUrl =  "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/inquiries/";


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
    return this.httpClient.post<Inquiry>(`${this.getbyidUrl}`, InquiryBody);
  }

  deleteInquiry(InquiryId: any): Observable<Inquiry[]>{
    return this.httpClient.delete<Inquiry[]>(`${this.getbyidUrl}/${InquiryId}`);

  }
}


