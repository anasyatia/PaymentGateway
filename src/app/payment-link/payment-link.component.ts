import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { BulkHistoryComponent } from './modal/bulk-history/bulk-history.component';
import { Router } from '@angular/router';
import { CreatePaymentLinkComponent } from './modal/create-payment-link/create-payment-link.component';
import { CustomerDetailsComponent } from './modal/customer-details/customer-details.component';

@Component({
  selector: 'app-payment-link',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, BulkHistoryComponent, CreatePaymentLinkComponent, CustomerDetailsComponent],
  templateUrl: './payment-link.component.html',
  styleUrl: './payment-link.component.css'
})
export class PaymentLinkComponent {

  constructor(private router: Router){}

  goToBulkHistory() {
    this.router.navigate(['/bulk-history']);
  }

  goToCreate() {
    this.router.navigate(['/create-payment-link']);
  }
}
