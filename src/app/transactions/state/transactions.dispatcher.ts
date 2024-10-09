import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { GetSearchByOrder, GetTransactions } from './transactions.action';

@Injectable({
  providedIn: 'root'
})
export class TransactionsDispatcher {
  @Dispatch()
  public getTransactions() {
    return new GetTransactions();
  }
}

@Injectable({
  providedIn: 'root'
})
export class SearchByOrderDispatcher {
  @Dispatch()
  public getByOrder(orderId: string) {
    return new GetSearchByOrder(orderId);
  }
}
