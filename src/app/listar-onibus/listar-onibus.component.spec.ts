import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOnibusComponent } from './listar-onibus.component';

describe('ListarOnibusComponent', () => {
  let component: ListarOnibusComponent;
  let fixture: ComponentFixture<ListarOnibusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarOnibusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
