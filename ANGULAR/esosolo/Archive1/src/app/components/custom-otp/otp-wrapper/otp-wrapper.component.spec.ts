import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpWrapperComponent } from './otp-wrapper.component';

describe('OtpWrapperComponent', () => {
  let component: OtpWrapperComponent;
  let fixture: ComponentFixture<OtpWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
