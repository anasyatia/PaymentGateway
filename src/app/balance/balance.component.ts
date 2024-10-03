import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FilterModalComponent } from './modal/filter-modal/filter-modal.component';
import { DateRangeModalComponent } from './modal/date-range-modal/date-range-modal.component';
import { RequestedDateComponent } from './modal/requested-date/requested-date.component';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, CommonModule, FilterModalComponent, DateRangeModalComponent, RequestedDateComponent],
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  activeTab: string = 'statement';
  secondaryTab: string = 'balance';
  isFilterOpen: boolean = false;
  selectedOption: string = 'Order ID';
  isDateOpen: boolean = false;
  isReqDateOpen: boolean = false;

  onOptionChange(event: Event): void {
    const target = event.target as unknown as { value: string };
    this.selectedOption = target.value;
  }  

  getPlaceholder(): string {
    if (this.selectedOption === 'Order ID') {
      return 'Search order ID here';
    } else if (this.selectedOption === 'Transaction ID') {
      return 'Search transaction ID here';
    }
    return '';
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  setSecondaryTab(tab: string) {
    this.secondaryTab = tab;
  }

  openFilter() {
    this.isFilterOpen = true;
  }

  closeFilter() {
    this.isFilterOpen = false;
  }

  openDate() {
    this.isDateOpen = true;
  }

  closeDate() {
    this.isDateOpen = false;
  }

  openReqDate() {
    this.isReqDateOpen = true;
  }

  closeReqDate() {
    this.isReqDateOpen = false;
  }
}
