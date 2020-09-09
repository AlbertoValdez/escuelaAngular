import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoAddContainerComponent } from './pago-add-container.component';

describe('PagoAddContainerComponent', () => {
  let component: PagoAddContainerComponent;
  let fixture: ComponentFixture<PagoAddContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoAddContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoAddContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
