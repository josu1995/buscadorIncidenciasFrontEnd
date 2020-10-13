import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadoIncidenciasComponent } from './buscado-incidencias.component';

describe('BuscadoIncidenciasComponent', () => {
  let component: BuscadoIncidenciasComponent;
  let fixture: ComponentFixture<BuscadoIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadoIncidenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadoIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
