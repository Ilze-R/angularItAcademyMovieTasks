import { TestBed } from '@angular/core/testing';

import { FilterMovieAccessGuard } from './filter-movie-access.guard';

describe('FilterMovieAccessGuard', () => {
  let guard: FilterMovieAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FilterMovieAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
