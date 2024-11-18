import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDistribuidorComponent } from './create-distribuidor.component';

describe('CreateDistribuidorComponent', () => {
  let component: CreateDistribuidorComponent;
  let fixture: ComponentFixture<CreateDistribuidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDistribuidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDistribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
