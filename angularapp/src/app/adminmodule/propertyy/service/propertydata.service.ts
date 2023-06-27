import { Injectable } from '@angular/core';
export interface propertylist {
  id: String,
  title: String,
  description: String,
  address: String,
  price: String,
  type: String,
  location: String,
  status: String,
  img: String,
  agent: String
}
@Injectable({
  providedIn: 'root'
})
export class PropertydataService {
  getMenu(): any {
    throw new Error('Method not implemented.');
  }
  private propertylist: propertylist[] = [
  
  
    {
      id: '01',
      title: 'Property 1',
      description: '2 Bedroom',
      address: '123A, V street, ASD, Chennai.',
      price: '100000rs',
      type: 'Apartment',
      location: 'Chennai',
      status: 'On Sale',
      img: './assets/2.jpg',
      agent: 'AgentName'
    },

    {
      id: '02',
      title: 'Property 2',
      description: '4 Bedroom',
      address: '13d, d street, AD, Vellore.',
      price: '600000rs',
      type: 'Apartment',
      location: 'Vellore',
      status: 'On Sale',
      img: './assets/2.jpg',
      agent: 'AgentName'
    },
        
    {
      id: '03',
      title: 'Property 3',
      description: '1 Bedroom',
      address: '12e, R street, ED, Selam.',
      price: '70000rs',
      type: 'House',
      location: 'Selam',
      status: 'On Sale',
      img: './assets/3.jpg',
      agent: 'AgentName'
    },
            
    {
      id: '04',
      title: 'Property 4',
      description: '4 Bedroom',
      address: '43f, U street, D, Coimbatore.',
      price: '500000rs',
      type: 'Apartment',
      location: 'Coimbatore',
      status: 'On Sale',
      img: './assets/2.jpg',
      agent: 'AgentName'
    },
                
    {
      id: '05',
      title: 'Property 5',
      description: '3 Bedroom',
      address: '252G, P street, PN, Tirupur.',
      price: '1000000rs',
      type: 'House',
      location: 'Tirupur',
      status: 'On Sale',
      img: './assets/2.jpg',
      agent: 'AgentName'
    },

    {
      id: '06',
      title: 'Property 1',
      description: '2 Bedroom',
      address: '123A, V street, ASD, Chennai.',
      price: '100000rs',
      type: 'Apartment',
      location: 'Chennai',
      status: 'On Sale',
      img: './assets/2.jpg',
      agent: 'AgentName'
    },

    {
      id: '07',
      title: 'Property 2',
      description: '4 Bedroom',
      address: '13d, d street, AD, Vellore.',
      price: '600000rs',
      type: 'Apartment',
      location: 'Vellore',
      status: 'On Sale',
      img: './assets/2.jpg',
      agent: 'AgentName'
    },
        
    {
      id: '08',
      title: 'Property 3',
      description: '1 Bedroom',
      address: '12e, R street, ED, Selam.',
      price: '70000rs',
      type: 'House',
      location: 'Salem',
      status: 'On Sale',
      img: './assets/3.jpg',
      agent: 'AgentName'
    },
      
  ]


  getProperty(): propertylist[]{
    return this.propertylist;
  }
}
