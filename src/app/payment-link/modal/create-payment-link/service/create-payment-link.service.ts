import { Injectable } from '@angular/core';
import { env } from "./env"
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatePaymentLinkService {
  private api = env.API_LINK
  private NameApi = "api"
  constructor(
    private httpClient: HttpClient
  ) {}

  createPaymentLink(data: any[]){
    return this.httpClient.post(`${this.api}/${this.NameApi}/midtrans/create-payment-link`, data)
  }
}
