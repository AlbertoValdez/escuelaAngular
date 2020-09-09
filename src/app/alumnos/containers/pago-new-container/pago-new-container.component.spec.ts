import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoNewContainerComponent } from './pago-new-container.component';

describe('PagoNewContainerComponent', () => {
  let component: PagoNewContainerComponent;
  let fixture: ComponentFixture<PagoNewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoNewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoNewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
