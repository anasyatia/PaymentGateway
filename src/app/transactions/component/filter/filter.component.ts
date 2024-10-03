import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  displayFilterModal = true;

  selectedTransactionType: string = 'All';
  statusFilters = {
    authorize: false,
    success: false,
    challenge: false,
    settlement: false,
    refund: false,
    chargeback: false,
    expired: false,
    pending: false,
    cancelled: false,
    failed: false,
    denied: false,
    reversal: false,
    requested: false,
    processing: false
  };

  // Define a type for channelFilters with an index signature
  channelFilters: { [key: string]: boolean } = {
    bsiBank: false,
    indomaret: false,
    bcaBank: false,
    bniBank: false,
    briBank: false,
    creditCard: false,
    shopeePay: false,
    gopay: false,
    bankDki: false,
    bankMayora: false,
    bankIndonesia: false,
    bankNagari: false,
    citiBank: false
  };

  // Untuk pencarian
  searchQuery: string = '';
  allChannels = [
    { name: 'BSI Bank Transfer', key: 'bsiBank' },
    { name: 'Indomaret', key: 'indomaret' },
    { name: 'BCA Bank Transfer', key: 'bcaBank' },
    { name: 'BNI Bank Transfer', key: 'bniBank' },
    { name: 'BRI Bank Transfer', key: 'briBank' },
    { name: 'Credit Card', key: 'creditCard' },
    { name: 'ShopeePay', key: 'shopeePay' },
    { name: 'GO-PAY', key: 'gopay' },
    { name: 'Bank DKI', key: 'bankDki' },
    { name: 'Bank Mayora', key: 'bankMayora' },
    { name: 'Bank Indonesia', key: 'bankIndonesia' },
    { name: 'Bank Nagari', key: 'bankNagari' },
    { name: 'CITIBANK', key: 'citiBank' }
  ];

  get filteredChannels() {
    const query = this.searchQuery.toLowerCase();
    return this.allChannels.filter(channel => channel.name.toLowerCase().includes(query));
  }

  // Fungsi untuk cek apakah tipe transaksi adalah Payment
isPaymentSelected(): boolean {
  return this.selectedTransactionType === 'Payment';
}

// Fungsi untuk cek apakah tipe transaksi adalah Withdrawal
isWithdrawalSelected(): boolean {
  return this.selectedTransactionType === 'Withdrawal';
}


  // Clear all filters
  clearFilters() {
    this.selectedTransactionType = 'All';
    this.statusFilters = {
      authorize: false,
      success: false,
      challenge: false,
      settlement: false,
      refund: false,
      chargeback: false,
      expired: false,
      pending: false,
      cancelled: false,
      failed: false,
      denied: false,
      reversal: false,
      requested: false,
      processing: false
    };
    this.channelFilters = {
      bsiBank: false,
      indomaret: false,
      bcaBank: false,
      bniBank: false,
      briBank: false,
      creditCard: false,
      shopeePay: false,
      gopay: false,
      bankDki: false,
      bankMayora: false,
      bankIndonesia: false,
      bankNagari: false,
      citiBank: false
    };
    this.searchQuery = '';
  }

  // Apply filters (you can modify the logic as needed)
  applyFilters() {
    console.log("Filters applied:", {
      transactionType: this.selectedTransactionType,
      statusFilters: this.statusFilters,
      channelFilters: this.channelFilters
    });
    this.closeFilterModal();
  }

  openFilterModal() {
    this.displayFilterModal = true;
  }

  closeFilterModal() {
    this.displayFilterModal = false;
  }

  closeModal() {
    this.displayFilterModal = false;
  }
}
