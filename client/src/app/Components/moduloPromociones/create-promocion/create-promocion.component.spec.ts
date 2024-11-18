import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePromocionComponent } from './create-promocion.component';

describe('CreatePromocionComponent', () => {
  let component: CreatePromocionComponent;
  let fixture: ComponentFixture<CreatePromocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePromocionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
