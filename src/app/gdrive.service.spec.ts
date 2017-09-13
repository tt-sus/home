import { TestBed, inject } from '@angular/core/testing';

import { GdriveService } from './gdrive.service';

describe('GdriveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GdriveService]
    });
  });

  it('should be created', inject([GdriveService], (service: GdriveService) => {
    expect(service).toBeTruthy();
  }));
});
