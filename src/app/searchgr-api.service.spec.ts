import { TestBed } from '@angular/core/testing';

import { SearchGrApiService } from './searchgr-api.service';

describe('AuthService', () => {
  let service: SearchGrApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchGrApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
