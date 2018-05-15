import { TestBed, inject } from '@angular/core/testing';

import { ProcessTypeService } from './process-type.service';

describe('ProcessTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessTypeService]
    });
  });

  it('should be created', inject([ProcessTypeService], (service: ProcessTypeService) => {
    expect(service).toBeTruthy();
  }));
});
