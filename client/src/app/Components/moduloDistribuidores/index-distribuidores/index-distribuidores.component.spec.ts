import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDistribuidoresComponent } from './index-distribuidores.component';

describe('IndexDistribuidoresComponent', () => {
  let component: IndexDistribuidoresComponent;
  let fixture: ComponentFixture<IndexDistribuidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexDistribuidoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDistribuidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
