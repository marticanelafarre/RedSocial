import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuariComponent } from './perfil-usuari.component';

describe('PerfilUsuariComponent', () => {
  let component: PerfilUsuariComponent;
  let fixture: ComponentFixture<PerfilUsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUsuariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
