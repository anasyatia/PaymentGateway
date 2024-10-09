import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { RangeDateComponent } from './component/range-date/range-date.component';
import { MoreFilterComponent } from './component/more-filter/more-filter.component';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './component/filter/filter.component';
import { NgxsModule, Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { transactionsDomain } from './domain/transactions.domain';
import { TransactionsState } from './state/transactions.state';
import { GetSearchByOrder, GetTransactions } from './state/transactions.action';
import { RouterModule } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { TransactionsService } from './service/transaction.service';

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
    FilterComponent,
    RouterModule
  ],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit, OnDestroy {

  transactions$: Observable<transactionsDomain[]> | undefined;
  @Select(TransactionsState.getError) error$!: Observable<string>;

  private destroyer$ = new Subject();
  transactions: transactionsDomain[] = [];

  filteredTransactions: transactionsDomain[] = [];
  orderId: string = '';
    private unsubscribe$ = new Subject<void>();


  selectedFilter: string = 'Order ID';
  placeholderText: string = 'Search order ID here';
  showRangeDate = false;
  selectedDateRange: Date[] | null = null;
  displayFilterMoreModal = false;
  displayFilterModal = false;

  constructor(private store: Store, private transactionService: TransactionsService) {}

  ngOnInit(): void {
    this.transactions$ = this.store.select(TransactionsState.getTransactions);

    this.store.dispatch(new GetTransactions());
    this.transactions$?.pipe(takeUntil(this.destroyer$)).subscribe((datas) => {
      this.transactions = datas;
    });
    this.transactionService.onDataTransaction()
  }

  ngOnDestroy(): void {
    this.destroyer$.next(true);
    this.destroyer$.complete();
  }

  onSearch() {
    if (this.orderId) {
      this.store.dispatch(new GetSearchByOrder(this.orderId)).subscribe();
      this.store.select(TransactionsState.getSearchByOrder).pipe(takeUntil(this.unsubscribe$)).subscribe(transactions => {
        this.filteredTransactions = transactions;
      });
    } else {
      this.filteredTransactions = []; 
    }
  }

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
