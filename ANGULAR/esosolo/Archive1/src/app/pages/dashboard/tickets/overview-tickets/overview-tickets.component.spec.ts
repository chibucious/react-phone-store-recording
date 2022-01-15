import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTicketsComponent } from './overview-tickets.component';

describe('OverviewTicketsComponent', () => {
  let component: OverviewTicketsComponent;
  let fixture: ComponentFixture<OverviewTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
