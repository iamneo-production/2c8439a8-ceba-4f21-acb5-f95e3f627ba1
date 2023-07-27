import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent {
  constructor(private router: Router) { }
  paynow(){
    setTimeout(() => {
      this.router.navigate(['/loadingpage']);
    }, 1000);
  }
}
