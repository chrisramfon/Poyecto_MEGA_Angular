import { TestBed } from '@angular/core/testing';

import { EmpleadoinicioService } from './empleadoinicio.service';

describe('EmpleadoinicioService', () => {
  let service: EmpleadoinicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoinicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
