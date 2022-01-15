import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordresetsmsComponent } from './passwordresetsms.component';

describe('PasswordresetsmsComponent', () => {
  let component: PasswordresetsmsComponent;
  let fixture: ComponentFixture<PasswordresetsmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordresetsmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordresetsmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
