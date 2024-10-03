import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CommonModule } from '@angular/common';
import { PaymentMethodsComponent } from '../payment-methods/payment-methods.component';
import { SelectPaymentMethodsComponent } from '../select-payment-methods/select-payment-methods.component';

@Component({
  selector: 'app-create-payment-link',
  standalone: true,
  imports: [CommonModule, CustomerDetailsComponent, ReactiveFormsModule, SidebarComponent, NavbarComponent, PaymentMethodsComponent, SelectPaymentMethodsComponent],
  templateUrl: './create-payment-link.component.html',
  styleUrl: './create-payment-link.component.css'
})
export class CreatePaymentLinkComponent {
  paymentLinkForm: FormGroup;
  showDetailsForm = false;
  isPaymentMethodsOpen: boolean = false;
  isSelectPaymentMethodsOpen: boolean = false;
  showEditButton: boolean = false;
  totalAmount: number = 0;

  constructor(private fb: FormBuilder) {
    this.paymentLinkForm = this.fb.group({
      title: [''],
      paymentLinkID: [''],
      orderID: [''],
      customerDetails: ['No'],
      requireCustomerAddress: new FormControl({ value: '', disabled: true }),
      specifyCustomerDetails: ['No'],
      expiryTime: ['1 day'],
      maximumUsage: [1],
      customField: [''],
      allowCustomAmount: [false],
      itemId: [''],
      itemName: [''],
      itemPrice: [0],
      itemQty: [1],
      allPaymentMethods: [false],
      selectedPaymentMethods: [false],
      suggestPresetAmount: [false],
      setLimits: [false],
      items: this.fb.array([]),
    });

    this.addItem();

    this.paymentLinkForm.get('customerDetails')?.valueChanges.subscribe(value => {
      this.onCustomerDetailsChange(value);
    });
  }

  onCustomerDetailsChange(value: string) {
    console.log('Customer Details changed to:', value);  // Log the value change
    const requireCustomerAddressControl = this.paymentLinkForm.get('requireCustomerAddress');
    
    if (value === 'Yes') {
      console.log('Enabling Customer Address');
      requireCustomerAddressControl?.enable();
    } else {
      console.log('Disabling and Resetting Customer Address');
      requireCustomerAddressControl?.reset();
      requireCustomerAddressControl?.disable();
    }
  }
  

  isCustomerAddressYes(): boolean {
    return this.paymentLinkForm.get('customerDetails')?.value === 'Yes';
  }

  onCheckboxChange(method: string) {
    if (method === 'all') {
      this.showEditButton = false; 
      this.paymentLinkForm.patchValue({ selectedPaymentMethods: false });
    } else if (method === 'selected') {
      this.showEditButton = this.paymentLinkForm.get('selectedPaymentMethods')?.value;
      this.paymentLinkForm.patchValue({ allPaymentMethods: false });
    }
  }

  get items() {
    return this.paymentLinkForm.get('items') as FormArray;
  }

  addItem() {
    const item = this.fb.group({
      itemId: [''],
      itemName: [''],
      itemPrice: [0],
      itemQty: [1]
    });
    this.items.push(item);
  }

  removeItem(index: number) {
    this.items.removeAt(index);
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = this.items.controls.reduce((acc, item) => {
      const price = item.get('itemPrice')?.value || 0;
      const qty = item.get('itemQty')?.value || 1;
      return acc + (price * qty);
    }, 0);
  }

  get allowCustomAmount() {
    return this.paymentLinkForm.get('allowCustomAmount')?.value;
  }

  get suggestPresetAmount() {
    return this.paymentLinkForm.get('suggestPresetAmount')?.value;
  }

  get setLimits() {
    return this.paymentLinkForm.get('setLimits')?.value;
  }

  openEdit() {
    console.log('Editing selected payment methods...');
  }
  
  onSubmit() {
    console.log(this.paymentLinkForm.value);
  }

  get customerDetailsControl() {
    return this.paymentLinkForm.get('specifyCustomerDetails');
  }

  openPaymentMethods() {
    this.isPaymentMethodsOpen = true;
  }

  closePaymentMethods() {
    this.isPaymentMethodsOpen = false;
  }

  openSelectPaymentMethods() {
    this.isSelectPaymentMethodsOpen = true;
    console.log('hy')
  }

  closeSelectPaymentMethods() {
    this.isSelectPaymentMethodsOpen = false;
  }


}
