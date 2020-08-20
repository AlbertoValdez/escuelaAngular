import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosMainContainerComponent } from './alumnos-main-container.component';

describe('AlumnosMainContainerComponent', () => {
  let component: AlumnosMainContainerComponent;
  let fixture: ComponentFixture<AlumnosMainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosMainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
