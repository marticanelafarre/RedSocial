import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanellAdminComponent } from './panell-admin.component';

describe('PanellAdminComponent', () => {
  let component: PanellAdminComponent;
  let fixture: ComponentFixture<PanellAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanellAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanellAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
