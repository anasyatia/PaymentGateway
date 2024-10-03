import { Component, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-range-date',
  standalone: true,
  imports: [ReactiveFormsModule, CalendarModule, FormsModule],
  templateUrl: './range-date.component.html',
  styleUrls: ['./range-date.component.css']
})
export class RangeDateComponent {

  startDate: string | null = null;
  endDate: string | null = null;

  @Output() close = new EventEmitter<void>();
  @Output() dateRangeSelected = new EventEmitter<Date[]>();

  rangeDates: Date[] | null = null;

  setToday() {
    const today = new Date();
    this.startDate = today.toISOString().slice(0, 10);
    this.endDate = today.toISOString().slice(0, 10);
    this.rangeDates = [today, today];
  }

  setYesterday() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const today = new Date();
    this.startDate = yesterday.toISOString().slice(0, 10);
    this.endDate = today.toISOString().slice(0, 10);
    this.rangeDates = [yesterday, today];
  }

  setLast7Days() {
    const today = new Date();
    const last7Days = new Date();
    last7Days.setDate(today.getDate() - 7);
    this.startDate = last7Days.toISOString().slice(0, 10);
    this.endDate = today.toISOString().slice(0, 10);
    this.rangeDates = [last7Days, today];
  }

  setLastMonth() {
    const today = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(today.getMonth() - 1);
    this.startDate = lastMonth.toISOString().slice(0, 10);
    this.endDate = today.toISOString().slice(0, 10);
    this.rangeDates = [lastMonth, today];
  }

  closeDate() {
    this.close.emit();
  }

  filter() {
    if (this.rangeDates) {
      this.dateRangeSelected.emit(this.rangeDates);
    }
    this.closeDate(); // Close the date range picker modal
  }
}
