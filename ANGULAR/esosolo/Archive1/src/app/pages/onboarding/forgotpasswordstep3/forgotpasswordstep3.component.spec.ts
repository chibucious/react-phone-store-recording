import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forgotpasswordstep3Component } from './forgotpasswordstep3.component';

describe('Forgotpasswordstep3Component', () => {
  let component: Forgotpasswordstep3Component;
  let fixture: ComponentFixture<Forgotpasswordstep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forgotpasswordstep3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Forgotpasswordstep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
