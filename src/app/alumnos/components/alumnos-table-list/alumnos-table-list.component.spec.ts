import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosTableListComponent } from './alumnos-table-list.component';

describe('AlumnosTableListComponent', () => {
  let component: AlumnosTableListComponent;
  let fixture: ComponentFixture<AlumnosTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
