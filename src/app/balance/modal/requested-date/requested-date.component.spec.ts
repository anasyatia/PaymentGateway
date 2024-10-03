import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedDateComponent } from './requested-date.component';

describe('RequestedDateComponent', () => {
  let component: RequestedDateComponent;
  let fixture: ComponentFixture<RequestedDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestedDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestedDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
