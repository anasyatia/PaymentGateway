import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-more-filter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './more-filter.component.html',
  styleUrls: ['./more-filter.component.css']
})
export class MoreFilterComponent {
  displayModal: boolean = true; // Menampilkan modal default

  sections = {
    settlementDate: false,
    disbursementDate: false,
    refundDate: false,
    transactionAmount: false,
    Invoicing: false,
    approvalCode: false,
    source: false,
    customField: false
  };

  //untuk range tanggal
  settlementDate = {
    from: '',
    to: ''
  };

  disbursementDate = {
    from: '',
    to: ''
  };

  refundDate = {
    from: '',
    to: ''
  };

  openModal() {
    this.displayModal = true;
  }

  closeModal() {
    this.displayModal = false;
  }

  toggleSection(section: 'settlementDate' | 'disbursementDate' | 'refundDate' | 'transactionAmount' | 'Invoicing' | 'approvalCode' | 'source' | 'customField') {
    this.sections[section] = !this.sections[section];
  }

  applyFilters() {
    console.log('Settlement Date:', this.settlementDate);
    console.log('Disbursement Date:', this.disbursementDate);
    console.log('Refund Date:', this.refundDate);
  }


}
