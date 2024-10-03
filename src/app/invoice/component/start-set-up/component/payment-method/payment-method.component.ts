import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-method',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.css'
})
export class PaymentMethodComponent {
  expiryTime: string = 'same';
  customExpiryAmount: number = 1;
  customExpiryType: string = '';
  expiryValue: number | null = null

  onExpiryTimeChange(): void {
    if (this.expiryTime === 'custom') {
      console.log('Custom expiry time selected');
    }
  }
}
