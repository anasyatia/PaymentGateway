import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-type',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './payment-type.component.html',
  styleUrl: './payment-type.component.css'
})
export class PaymentTypeComponent {
  dropdownOpen = false;
  dateRangeText: string = '';
  dateRange: Date[] = [];
  activeView: 'indonesianRupiah' | 'transactions' = 'indonesianRupiah';

  constructor() {
    this.selectOption('Last 7 Days');
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  switchToTransactions() {
    this.activeView = 'transactions';
  }

  switchToIndonesianRupiah() {
    this.activeView = 'indonesianRupiah';
  }

  selectOption(option: string) {
    const today = new Date();
    let startDate: Date = new Date(today);
    let endDate: Date = new Date(today);

    switch (option) {
      case 'Today':
        startDate = new Date(today);
        endDate = new Date(today);
        break;
      case 'Last 7 Days':
        startDate = new Date(today.getTime());
        startDate.setDate(today.getDate() - 7);
        endDate = new Date(today);
        break;
      case 'Last 30 Days':
        startDate = new Date(today.getTime());
        startDate.setDate(today.getDate() - 30);
        endDate = new Date(today);
        break;
      case 'This Month':
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      default:
        startDate = new Date(today);
        endDate = new Date(today);
    }

    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };

    // update  tanggal sesuai pilihan
    // Format en-GB untuk tanggal adalah DD/MM/YYYY
    this.dateRangeText = `${startDate.toLocaleDateString('en-GB', options)} - ${endDate.toLocaleDateString('en-GB', options)}`;
    this.dropdownOpen = false;
  }

  handleTransactionClick() {
    console.log('Transaction clicked');
  }
}
