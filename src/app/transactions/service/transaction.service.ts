import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../payment-link/modal/create-payment-link/service/env';
import { Observable } from 'rxjs';
import { transactionsDomain } from '../domain/transactions.domain';
import { SearchByOrderDispatcher, TransactionsDispatcher } from '../state/transactions.dispatcher';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private api = env.API_LINK;
  private NameApi = 'api';

  constructor(
    private httpClient: HttpClient,
    private transactionsDispatcher: TransactionsDispatcher,
    private searchByOrderDispatcher: SearchByOrderDispatcher
  ) {}

  getDataTransactions() {
    return this.httpClient.get<transactionsDomain[]>(`${this.api}/${this.NameApi}/transactions`);
  }

  SearchByOrder(orderId?: string): Observable<transactionsDomain[]> {
    const url = orderId ? `${this.api}/${this.NameApi}/transactions/search?orderId=${orderId}` : this.api;
    return this.httpClient.get<transactionsDomain[]>(url);
  }

  onDataTransaction() {
    return this.transactionsDispatcher.getTransactions();
  }

  onSearchByOrder(orderId: string) {
    return this.searchByOrderDispatcher.getByOrder(orderId); // Memanggil dispatcher yang benar
  }
}
