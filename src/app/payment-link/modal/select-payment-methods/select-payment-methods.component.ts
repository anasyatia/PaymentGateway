import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-payment-methods',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './select-payment-methods.component.html',
  styleUrl: './select-payment-methods.component.css'
})
export class SelectPaymentMethodsComponent {
  isModalOpen = true;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
