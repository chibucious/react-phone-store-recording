import { TestBed } from '@angular/core/testing';

import { GeneralFormattingService } from './general-formatting.service';

describe('GeneralFormattingService', () => {
  let service: GeneralFormattingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralFormattingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
