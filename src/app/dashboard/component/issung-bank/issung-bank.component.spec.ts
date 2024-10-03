import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssungBankComponent } from './issung-bank.component';

describe('IssungBankComponent', () => {
  let component: IssungBankComponent;
  let fixture: ComponentFixture<IssungBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssungBankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssungBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
