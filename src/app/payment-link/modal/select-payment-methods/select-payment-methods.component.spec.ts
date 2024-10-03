import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPaymentMethodsComponent } from './select-payment-methods.component';

describe('SelectPaymentMethodsComponent', () => {
  let component: SelectPaymentMethodsComponent;
  let fixture: ComponentFixture<SelectPaymentMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPaymentMethodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
