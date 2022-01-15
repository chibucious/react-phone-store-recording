import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpselectionComponent } from './otpselection.component';

describe('OtpselectionComponent', () => {
  let component: OtpselectionComponent;
  let fixture: ComponentFixture<OtpselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpselectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
