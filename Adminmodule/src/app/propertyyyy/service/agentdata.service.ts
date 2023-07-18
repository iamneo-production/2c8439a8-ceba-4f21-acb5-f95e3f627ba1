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
    let agentUrl = 'http://localhost:8080/api/v1/agents';
    return this.httpClient.get<Agent[]>(agentUrl);
  }
  
  getAgent(agentId: any): Observable<Agent>{
    let agentUrl = 'http://localhost:8080/api/v1/agents/'+agentId;
    return this.httpClient.get<Agent>(agentUrl);
  }

  deleteAgent(agentId: any): Observable<Agent[]>{
    let agentUrl = 'http://localhost:8080/api/v1/agents/'+agentId;
    return this.httpClient.delete<Agent[]>(agentUrl);
  }
}

// updateAgent(UserId: any,userBody: any): Observable<User[]>{
//   const userUrl = 'http://localhost:8080/api/v1/users/'+UserId;
//   return this.httpClient.put<User[]>(userUrl, userBody);
// }

// postUser(userBody: any): Observable<User>{
//   const userUrl = 'http://localhost:8080/api/v1/users';
//   return this.httpClient.post<User>(userUrl, userBody);
// }