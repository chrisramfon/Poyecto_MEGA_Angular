import { TestBed } from '@angular/core/testing';

import { GuardiaLoginGuard } from './guardia-login.guard';

describe('GuardiaLoginGuard', () => {
  let guard: GuardiaLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardiaLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
