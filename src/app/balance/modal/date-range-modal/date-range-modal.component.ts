import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-date-range-modal',
  templateUrl: './date-range-modal.component.html',
  styleUrls: ['./date-range-modal.component.css'],
  standalone: true,
  imports : [FormsModule, CalendarModule]
})
export class DateRangeModalComponent {
  startDate: string | null = null;
  endDate: string | null = null;
  @Output() close = new EventEmitter<void>();

  rangeDates: Date[] | null = null;

  setToday() {
    const today = new Date().toISOString().slice(0, 10);
    this.startDate = today;
    this.endDate = today;
  }

  setYesterday() {
    const yesterday = new Date();
    const today = new Date().toISOString().slice(0, 10);
    yesterday.setDate(yesterday.getDate() - 1);
    const formatted = yesterday.toISOString().slice(0, 10);
    this.startDate = formatted;
    this.endDate = today;
  }

  setLast7Days() {
    const today = new Date();
    const last7Days = new Date();
    last7Days.setDate(today.getDate() - 7);
    this.startDate = last7Days.toISOString().slice(0, 10);
    this.endDate = today.toISOString().slice(0, 10);
  }

  setLastMonth() {
    const today = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(today.getMonth() - 1);
    this.startDate = lastMonth.toISOString().slice(0, 10);
    this.endDate = today.toISOString().slice(0, 10);
  }

  
  closeDate() {
    this.close.emit();
  }

  filter() {
    console.log('Filtering from:', this.rangeDates?.[0], 'to:', this.rangeDates?.[1]);
  }
}

