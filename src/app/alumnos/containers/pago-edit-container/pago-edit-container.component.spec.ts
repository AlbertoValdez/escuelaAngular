import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoEditContainerComponent } from './pago-edit-container.component';

describe('PagoEditContainerComponent', () => {
  let component: PagoEditContainerComponent;
  let fixture: ComponentFixture<PagoEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
