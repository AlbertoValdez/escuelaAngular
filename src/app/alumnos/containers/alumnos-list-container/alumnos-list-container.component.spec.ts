import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosListContainerComponent } from './alumnos-list-container.component';

describe('AlumnosListContainerComponent', () => {
  let component: AlumnosListContainerComponent;
  let fixture: ComponentFixture<AlumnosListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
