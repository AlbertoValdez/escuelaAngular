import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoNewContainerComponent } from './alumno-new-container.component';

describe('AlumnoNewContainerComponent', () => {
  let component: AlumnoNewContainerComponent;
  let fixture: ComponentFixture<AlumnoNewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoNewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoNewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
