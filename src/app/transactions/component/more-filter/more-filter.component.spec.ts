import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFilterComponent } from './more-filter.component';

describe('MoreFilterComponent', () => {
  let component: MoreFilterComponent;
  let fixture: ComponentFixture<MoreFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
