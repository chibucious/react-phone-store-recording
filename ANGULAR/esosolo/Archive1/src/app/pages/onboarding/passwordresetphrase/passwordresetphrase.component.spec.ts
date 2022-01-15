import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordresetphraseComponent } from './passwordresetphrase.component';

describe('PasswordresetphraseComponent', () => {
  let component: PasswordresetphraseComponent;
  let fixture: ComponentFixture<PasswordresetphraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordresetphraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordresetphraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
