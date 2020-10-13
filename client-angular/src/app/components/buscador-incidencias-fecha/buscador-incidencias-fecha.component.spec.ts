import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorIncidenciasFechaComponent } from './buscador-incidencias-fecha.component';

describe('BuscadorIncidenciasFechaComponent', () => {
  let component: BuscadorIncidenciasFechaComponent;
  let fixture: ComponentFixture<BuscadorIncidenciasFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorIncidenciasFechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorIncidenciasFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
