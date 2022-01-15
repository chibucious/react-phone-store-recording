import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KybComponent } from './kyb.component';

describe('KybComponent', () => {
  let component: KybComponent;
  let fixture: ComponentFixture<KybComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KybComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KybComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
