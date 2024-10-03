import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { RangeDateComponent } from './component/range-date/range-date.component';
import { MoreFilterComponent } from './component/more-filter/more-filter.component';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './component/filter/filter.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    FormsModule,
    CalendarModule,
    RangeDateComponent,
    MoreFilterComponent,
    CommonModule,
    FilterComponent
  ],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  selectedFilter: string = 'Order ID';
  placeholderText: string = 'Search order ID here';
  showRangeDate = false;
  selectedDateRange: Date[] | null = null;
  displayFilterMoreModal = false;
  displayFilterModal = false;

  onFilterChange() {
    switch (this.selectedFilter) {
      case 'Order ID':
        this.placeholderText = 'Search order ID here';
        break;
      case 'ID Transaksi':
        this.placeholderText = 'Search ID Transaksi here';
        break;
      case 'Email Pelanggan':
        this.placeholderText = 'Search email pelanggan here';
        break;
      default:
        this.placeholderText = 'Search here';
    }
  }

  onModalClose() {
    this.showRangeDate = false;
  }

  onDateRangeSelected(range: Date[]) {
    this.selectedDateRange = range;
    this.showRangeDate = false;
  }

  openFilterMoreModal() {
    this.displayFilterMoreModal = true;
  }

  closeFilterMoreModal() {
    this.displayFilterMoreModal = false;
  }

  openFilterModal() {
    this.displayFilterModal = true;
  }

  closeFilterModal() {
    this.displayFilterModal = false;
  }
}
