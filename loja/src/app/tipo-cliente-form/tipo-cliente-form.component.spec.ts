import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoClienteFormComponent } from './tipo-cliente-form.component';

describe('TipoClienteFormComponent', () => {
  let component: TipoClienteFormComponent;
  let fixture: ComponentFixture<TipoClienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoClienteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoClienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
