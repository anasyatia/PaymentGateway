import { transactionDetail } from "./transaction-details.domain"

export class paymentLink{
  transaction_details: transactionDetail[] = []
  payment_link_enabled_payments: any[] = []
  customer_required: boolean = false
  require_customer_details: boolean = false
  require_address: boolean = false
}
