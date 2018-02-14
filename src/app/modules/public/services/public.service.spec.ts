import { TestBed, inject } from '@angular/core/testing';

import { PublicService } from './public.service';

describe('PublicServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicService]
    });
  });

  it('should be created', inject([PublicService], (service: PublicService) => {
    expect(service).toBeTruthy();
  }));
});
