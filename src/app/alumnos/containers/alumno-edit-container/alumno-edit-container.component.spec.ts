import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoEditContainerComponent } from './alumno-edit-container.component';

describe('AlumnoEditContainerComponent', () => {
  let component: AlumnoEditContainerComponent;
  let fixture: ComponentFixture<AlumnoEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
