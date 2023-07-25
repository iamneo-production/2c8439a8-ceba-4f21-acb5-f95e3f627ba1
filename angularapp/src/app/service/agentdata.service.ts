import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../model/agent';

@Injectable({
  providedIn: 'root'
})
export class AgentdataService {

  constructor(private httpClient: HttpClient){}
  

  getAgents(): Observable<Agent[]>{
    let agentUrl = 'http://localhost:8080/agents';
    return this.httpClient.get<Agent[]>(agentUrl);
  }
  
  getAgent(agentId: any): Observable<Agent>{
    let agentUrl = 'http://localhost:8080/agents/'+agentId;
    return this.httpClient.get<Agent>(agentUrl);
  }

  deleteAgent(agentId: any): Observable<Agent[]>{
    let agentUrl = 'http://localhost:8080/agents/'+agentId;
    return this.httpClient.delete<Agent[]>(agentUrl);
  }

  loginAgent(agent:any): Observable<any>{
    const agentUrl = 'http://localhost:8080/agent/login';
    return this.httpClient.post(agentUrl,agent);
}
  signupAgent(agent:any): Observable<any>{
    const agentUrl = 'http://localhost:8080/agent/signup';
    return this.httpClient.post(agentUrl,agent);
}

  updateAgent(AgentId: any,agentBody: any): Observable<Agent[]>{
    const agentUrl = 'http://localhost:8080/agents/'+AgentId;
    return this.httpClient.put<Agent[]>(agentUrl, agentBody);
  }
  
}


