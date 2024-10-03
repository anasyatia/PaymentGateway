import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-reminder',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './payment-reminder.component.html',
  styleUrls: ['./payment-reminder.component.css']
})
export class PaymentReminderComponent {
  form: FormGroup;
  remindersCount: number = 1;
  maxReminders: number = 3;
  selectedReminderType: string = '';
  placeholderText: string = 'Enter days';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sendReminderEmail: [false],
      firstReminder: [''],
      reminderDays: [''],
      secondReminder: [''],
      secondReminderDays: [''],
      thirdReminder: [''],
      thirdReminderDays: ['']
    });
  }

  // untuk mengatur placeholder berdasarkan pilihan reminder
  updatePlaceholder(event: any) {
    this.selectedReminderType = event.target.value;
    this.placeholderText = `Enter ${this.selectedReminderType}`;
  }

  //  untuk menambahkan reminder
  addReminder() {
    if (this.remindersCount < this.maxReminders) {
      this.remindersCount++;
    }
  }

  //untuk menghapus reminder
  removeReminder(reminderNumber: number) {
    if (reminderNumber === 2) {
      this.form.patchValue({ secondReminder: '', secondReminderDays: '' });
    } else if (reminderNumber === 3) {
      this.form.patchValue({ thirdReminder: '', thirdReminderDays: '' });
    }
    if (this.remindersCount > 1) {
      this.remindersCount--;
    }
  }

  // Fungsi untuk toggle email reminder
  toggleReminder() {
    if (!this.form.get('sendReminderEmail')?.value) {
      this.remindersCount = 1; // Reset reminder ke 1 jika toggle dimatikan
    }
  }
}
