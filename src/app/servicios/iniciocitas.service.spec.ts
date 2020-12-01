import { TestBed } from '@angular/core/testing';

import { IniciocitasService } from './iniciocitas.service';

describe('IniciocitasService', () => {
  let service: IniciocitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IniciocitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
