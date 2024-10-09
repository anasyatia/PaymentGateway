export class GetTransactions {
  static readonly type = '[Transactions] Get';
}

export class GetSearchByOrder {
  static readonly type = '[Transactions] Search by Order ID';
  constructor(public orderId: string) {}
}
