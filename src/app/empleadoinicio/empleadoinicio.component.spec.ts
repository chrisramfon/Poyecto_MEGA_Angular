import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoinicioComponent } from './empleadoinicio.component';

describe('EmpleadoinicioComponent', () => {
  let component: EmpleadoinicioComponent;
  let fixture: ComponentFixture<EmpleadoinicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoinicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
