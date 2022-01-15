import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOtpComponent } from './select-otp.component';

describe('SelectOtpComponent', () => {
  let component: SelectOtpComponent;
  let fixture: ComponentFixture<SelectOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
