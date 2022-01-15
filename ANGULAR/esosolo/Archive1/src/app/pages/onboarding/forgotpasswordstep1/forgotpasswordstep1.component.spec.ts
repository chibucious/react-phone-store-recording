import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forgotpasswordstep1Component } from './forgotpasswordstep1.component';

describe('Forgotpasswordstep1Component', () => {
  let component: Forgotpasswordstep1Component;
  let fixture: ComponentFixture<Forgotpasswordstep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forgotpasswordstep1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Forgotpasswordstep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
