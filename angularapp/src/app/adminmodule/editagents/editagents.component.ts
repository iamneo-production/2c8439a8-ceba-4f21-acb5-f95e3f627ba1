import { Component } from '@angular/core';

@Component({
  selector: 'app-editagents',
  templateUrl: './editagents.component.html',
  styleUrls: ['./editagents.component.css']
})
export class EditagentsComponent {
  agents = [
  
    {
      Name: 'Mark',
      email: 'mark@gmail.com',
      phone: '9876543210',
      exp: '8',
    },

    {
      Name: 'Sam',
      email: 'sam@gmail.com',
      phone: '9321654870',
      exp: '8',
    },
        
    {
      Name: 'Antony',
      email: 'antony@gmail.com',
      phone: '8765422210',
      exp: '7',
    },

    {
      Name: 'Andrew',
      email: 'andrew@gmail.com',
      phone: '7564422210',
      exp: '7',
    },

    
  ];
    ondelete(deleteme: any) {
     this.agents.splice(deleteme,1) 
  }
}
