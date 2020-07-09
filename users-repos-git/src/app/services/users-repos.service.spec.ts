import { TestBed } from '@angular/core/testing';

import { UsersReposService } from './users-repos.service';

describe('UsersReposService', () => {
  let service: UsersReposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersReposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
