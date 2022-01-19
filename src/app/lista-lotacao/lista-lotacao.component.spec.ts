import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLotacaoComponent } from './lista-lotacao.component';

describe('ListaLotacaoComponent', () => {
  let component: ListaLotacaoComponent;
  let fixture: ComponentFixture<ListaLotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLotacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
