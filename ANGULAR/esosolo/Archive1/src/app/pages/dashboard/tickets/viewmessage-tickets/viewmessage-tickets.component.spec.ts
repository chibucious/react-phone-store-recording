import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmessageTicketsComponent } from './viewmessage-tickets.component';

describe('ViewmessageTicketsComponent', () => {
  let component: ViewmessageTicketsComponent;
  let fixture: ComponentFixture<ViewmessageTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmessageTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmessageTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
