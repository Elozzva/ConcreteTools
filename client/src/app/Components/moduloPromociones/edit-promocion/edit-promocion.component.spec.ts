import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPromocionComponent } from './edit-promocion.component';

describe('EditPromocionComponent', () => {
  let component: EditPromocionComponent;
  let fixture: ComponentFixture<EditPromocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPromocionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
