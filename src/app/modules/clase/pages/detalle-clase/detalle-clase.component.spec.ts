import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetalleClaseComponent } from './detalle-clase.component';

describe('DetalleClaseComponent', () => {
  let component: DetalleClaseComponent;
  let fixture: ComponentFixture<DetalleClaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleClaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
