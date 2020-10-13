import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorIncidenciasNombreComponent } from './buscador-incidencias-nombre.component';

describe('BuscadorIncidenciasNombreComponent', () => {
  let component: BuscadorIncidenciasNombreComponent;
  let fixture: ComponentFixture<BuscadorIncidenciasNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorIncidenciasNombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorIncidenciasNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
