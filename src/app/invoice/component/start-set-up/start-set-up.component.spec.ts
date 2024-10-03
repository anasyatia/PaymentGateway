import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSetUpComponent } from './start-set-up.component';

describe('StartSetUpComponent', () => {
  let component: StartSetUpComponent;
  let fixture: ComponentFixture<StartSetUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartSetUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
