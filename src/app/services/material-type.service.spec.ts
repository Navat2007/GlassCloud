import { TestBed, inject } from '@angular/core/testing';

import { MaterialTypeService } from './material-type.service';

describe('MaterialTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialTypeService]
    });
  });

  it('should be created', inject([MaterialTypeService], (service: MaterialTypeService) => {
    expect(service).toBeTruthy();
  }));
});
