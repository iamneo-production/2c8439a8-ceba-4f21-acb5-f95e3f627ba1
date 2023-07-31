import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../model/agent';

@Injectable({
  providedIn: 'root'
})
export class AgentdataService {

  //Vasanth
  private getUrl =      "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/agents";  
  private getbyidUrl =  "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/agents/";
  private loginUrl =    "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/agent/login";  
  private signupUrl =   "https://8080-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/agent/signup"; 

  //Revan
  // private getUrl =      "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/agents";  
  // private getbyidUrl =  "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/agents/";
  // private loginUrl =    "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/agent/login";  
  // private signupUrl =   "https://8080-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/agent/signup"; 

  //Anshi
  // private getUrl =      "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/agents";  
  // private getbyidUrl =  "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/agents/";
  // private loginUrl =    "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/agent/login";  
  // private signupUrl =   "https://8080-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/agent/signup"; 

  //Raas
  // private getUrl =      "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/agents";  
  // private getbyidUrl =  "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/agents/";
  // private loginUrl =    "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/agent/login";  
  // private signupUrl =   "https://8080-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/agent/signup"; 

  constructor(private httpClient: HttpClient){}
  

  getAgents(): Observable<Agent[]>{
    return this.httpClient.get<Agent[]>(`${this.getUrl}`);
  }
  
  getAgent(agentId: any): Observable<Agent>{
    return this.httpClient.get<Agent>(`${this.getbyidUrl}/${agentId}`);
  }

  deleteAgent(agentId: any): Observable<Agent[]>{
    return this.httpClient.delete<Agent[]>(`${this.getbyidUrl}/${agentId}`);
  }

  loginAgent(agent:any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}`,agent);
}
  signupAgent(agent:any): Observable<any>{ 
    return this.httpClient.post(`${this.signupUrl}`,agent);
}

  updateAgent(agentId: any,agentBody: any): Observable<Agent[]>{
    return this.httpClient.put<Agent[]>(`${this.getbyidUrl}/${agentId}`, agentBody);
  }
  
}


