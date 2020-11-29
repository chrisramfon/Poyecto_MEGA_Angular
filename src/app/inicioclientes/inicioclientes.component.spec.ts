import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioclientesComponent } from './inicioclientes.component';

describe('InicioclientesComponent', () => {
  let component: InicioclientesComponent;
  let fixture: ComponentFixture<InicioclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioclientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
