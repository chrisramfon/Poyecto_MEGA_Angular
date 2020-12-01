import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciocitasComponent } from './iniciocitas.component';

describe('IniciocitasComponent', () => {
  let component: IniciocitasComponent;
  let fixture: ComponentFixture<IniciocitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciocitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciocitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
