import { TestBed } from '@angular/core/testing';

import { InicioclienteService } from './iniciocliente.service';

describe('InicioclienteService', () => {
  let service: InicioclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
