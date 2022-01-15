import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpemailComponent } from './otpemail.component';

describe('OtpemailComponent', () => {
  let component: OtpemailComponent;
  let fixture: ComponentFixture<OtpemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
