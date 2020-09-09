import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoTableListComponent } from './pago-table-list.component';

describe('PagoTableListComponent', () => {
  let component: PagoTableListComponent;
  let fixture: ComponentFixture<PagoTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
