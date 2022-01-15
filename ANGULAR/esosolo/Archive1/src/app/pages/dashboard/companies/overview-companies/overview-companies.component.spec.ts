import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCompaniesComponent } from './overview-companies.component';

describe('OverviewCompaniesComponent', () => {
  let component: OverviewCompaniesComponent;
  let fixture: ComponentFixture<OverviewCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
