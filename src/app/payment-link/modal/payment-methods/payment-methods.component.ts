import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-methods',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './payment-methods.component.html',
  styleUrl: './payment-methods.component.css'
})
export class PaymentMethodsComponent {
  isModalOpen = true;
  activeTab: 'creditCard' | 'bankTransfer' = 'creditCard';
  
  authentication: string = 'enabled';
  acquiringBank: string = 'default';
  preauth: string = 'enabled';
  installmentOption: string = 'disabled';
  @Output() close = new EventEmitter<void>();
  
  showInstallmentBanks: boolean = false;
  showCustomPermataVA: boolean = false;
  showBcaVA: boolean = false;
  showBniVA: boolean = false;
  showBriVA: boolean = false;
  showCimbVA: boolean = false;
  
  selectedBanks = {
    bca: false,
    mandiri: false,
    bri: false,
    cimb: false
  };
  
  terms = {
    months3: false,
    months6: false,
    months12: false
  };

  bankTransfer = {
    permataVA: 'disabled',
    bcaVA: 'disabled',
    bniVA: 'disabled',
    briVA: 'disabled',
    cimbVA: 'disabled'
  };
  
  binFilter: string = '';

  closeModal() {
    this.close.emit();
  }

}
