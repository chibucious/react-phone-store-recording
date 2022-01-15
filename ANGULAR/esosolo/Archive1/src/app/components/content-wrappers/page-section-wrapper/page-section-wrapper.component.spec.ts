import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionWrapperComponent } from './page-section-wrapper.component';

describe('PageSectionWrapperComponent', () => {
  let component: PageSectionWrapperComponent;
  let fixture: ComponentFixture<PageSectionWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSectionWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSectionWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
