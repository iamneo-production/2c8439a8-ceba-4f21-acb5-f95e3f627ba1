import { Component } from '@angular/core';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent {
  searchText = '';
users = [
  
    {
      Name: 'Mark',
      email: 'mark@gmail.com',
      phone: '9876543210',
      acc: '23/06/2023',
    },

    {
      Name: 'Sam',
      email: 'sam@gmail.com',
      phone: '9321654870',
      acc: '23/06/2023',
    },
        
    {
      Name: 'Antony',
      email: 'antony@gmail.com',
      phone: '8765422210',
      acc: '23/06/2023',
    },

    {
      Name: 'Andrew',
      email: 'andrew@gmail.com',
      phone: '7564422210',
      acc: '23/06/2023',
    },

    
  ];

  ondelete(deleteme: any) {
     this.users.splice(deleteme,1) 
  }

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
    ondel(deleteme: any) {
     this.agents.splice(deleteme,1) 
  }
}
