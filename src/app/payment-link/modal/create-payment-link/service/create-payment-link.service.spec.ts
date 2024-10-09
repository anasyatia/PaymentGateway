import { TestBed } from '@angular/core/testing';

import { CreatePaymentLinkService } from './create-payment-link.service';

describe('CreatePaymentLinkService', () => {
  let service: CreatePaymentLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePaymentLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
