import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPromocionesComponent } from './index-promociones.component';

describe('IndexPromocionesComponent', () => {
  let component: IndexPromocionesComponent;
  let fixture: ComponentFixture<IndexPromocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPromocionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
