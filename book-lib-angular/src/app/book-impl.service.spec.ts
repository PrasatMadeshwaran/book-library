import { TestBed } from '@angular/core/testing';

import { BookImplService } from './book-impl.service';

describe('BookImplService', () => {
  let service: BookImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
