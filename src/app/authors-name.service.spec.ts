import { TestBed, inject } from '@angular/core/testing';

import { AuthorsNameService } from './authors-name.service';

describe('AuthorsNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorsNameService]
    });
  });

  it('should be created', inject([AuthorsNameService], (service: AuthorsNameService) => {
    expect(service).toBeTruthy();
  }));
});
