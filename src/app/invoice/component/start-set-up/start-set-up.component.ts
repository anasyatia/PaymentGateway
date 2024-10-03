import { Component } from '@angular/core';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaymentMethodComponent } from "./component/payment-method/payment-method.component";
import { FormsModule } from '@angular/forms';
import { PaymentReminderComponent } from "./component/payment-reminder/payment-reminder.component";

@Component({
  selector: 'app-start-set-up',
  standalone: true,
  imports: [
    SidebarComponent,
    NavbarComponent,
    RouterModule,
    CommonModule,
    PaymentMethodComponent,
    FormsModule,
    PaymentReminderComponent
],
  templateUrl: './start-set-up.component.html',
  styleUrls: ['./start-set-up.component.css']
})
export class StartSetUpComponent {
  imageSrc: string | ArrayBuffer | null = null;
  signatureSrc: string | ArrayBuffer | null = null;
  notes: string = '';
  terms: string = '';
  invoice: string = '';
  sigName: string = '';
  sigRole: string = '';
  maxLength: number = 1000;
  maxLengthSignature: number = 20;
  signatureName: string = '';
  signatureRole: string = '';
  headerText: string = '';

  // Method untuk perubahan file logo bisnis
  onLogoFileChange(event: Event): void {
    this.handleFileChange(event, 'logo');
  }

  // Method untuk perubahan file tanda tangan
  onSignatureFileChange(event: Event): void {
    this.handleFileChange(event, 'signature');
  }

  // Method terpisah untuk menangani perubahan file
  handleFileChange(event: Event, target: 'logo' | 'signature'): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (file.size <= 1048576) { // Ukuran maksimal 1 MB
        const reader = new FileReader();
        reader.onload = () => {
          if (target === 'logo') {
            this.imageSrc = reader.result;
          } else if (target === 'signature') {
            this.signatureSrc = reader.result;
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert('Ukuran file melebihi 1 MB.');
      }
    }
  }

  // Method untuk menghapus gambar
  removeImage(target: 'logo' | 'signature'): void {
    if (target === 'logo') {
      this.imageSrc = null;
    } else if (target === 'signature') {
      this.signatureSrc = null;
    }
  }

  get notesCount(): number {
    return this.notes.length;
  }

  get termsCount(): number {
    return this.terms.length;
  }

  get signatureNameCount(): number {
    return this.signatureName.length;
  }

  get signatureRoleCount(): number {
    return this.signatureRole.length;
  }

}
