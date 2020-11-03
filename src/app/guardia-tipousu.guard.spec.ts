import { TestBed } from '@angular/core/testing';

import { GuardiaTipousuGuard } from './guardia-tipousu.guard';

describe('GuardiaTipousuGuard', () => {
  let guard: GuardiaTipousuGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardiaTipousuGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
