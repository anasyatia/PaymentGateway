import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentReminderComponent } from './payment-reminder.component';

describe('PaymentReminderComponent', () => {
  let component: PaymentReminderComponent;
  let fixture: ComponentFixture<PaymentReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentReminderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
