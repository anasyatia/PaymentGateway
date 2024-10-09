import { Injectable } from '@angular/core';
import { transactionsDomain } from '../domain/transactions.domain';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetSearchByOrder, GetTransactions } from './transactions.action';
import { catchError, of, tap } from 'rxjs';
import { TransactionsService } from '../service/transaction.service';

export class TransactionStateModel {
  transactions: transactionsDomain[] = [];
  error?: string;
}

export class SearchByOrder {
  searchByOrderId: transactionsDomain [] = [];
}

@State<SearchByOrder>({
  name: 'searchByOrderId',
  defaults: {
    searchByOrderId: []
  }
})

@State<TransactionStateModel>({
  name: 'transactionsStateModel',
  defaults: {
    transactions: [],
    error: undefined
  }
})
@Injectable()
export class TransactionsState {
  constructor(private transactionsService: TransactionsService) {}

  @Selector()
  static getTransactions(state: TransactionStateModel) {
    return state.transactions;
  }

  @Selector()
  static getError(state: TransactionStateModel) {
    return state.error;
  }

  @Selector()
  static getSearchByOrder(state: SearchByOrder) {
    return state.searchByOrderId;
  }

  @Action(GetTransactions, { cancelUncompleted: true })
  getTransactions(ctx: StateContext<TransactionStateModel>) {
    return this.transactionsService.getDataTransactions().pipe(
      tap((resp) => {
        console.log(resp, 'test')
        ctx.patchState({ transactions: resp });
      }),
      catchError((error) => {
        ctx.patchState({ error: 'Ada kesalahan' });
        return of([]);
      })
    );
  }

  @Action(GetSearchByOrder)
  getSearchByOrder(ctx: StateContext<TransactionStateModel>, action: GetSearchByOrder) {
    const state = ctx.getState();
    const filteredTransactions = state.transactions.filter((transaction: transactionsDomain) =>
      transaction.orderId.includes(action.orderId)
    );
    ctx.patchState({ transactions: filteredTransactions });
  }
}
