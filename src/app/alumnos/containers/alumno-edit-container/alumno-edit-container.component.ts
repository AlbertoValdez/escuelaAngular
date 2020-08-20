import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {Store} from '@ngrx/store';
import * as fromR from '../../state/reducers';
import * as alumnosActions from '../../state/actions/alumno.action';  
import { Alumno } from '../../models/alumno';
import { Observable } from 'rxjs';

interface AlumnoEditData {

  AlumnoId: number;

}
@Component({
  selector: 'app-alumno-edit-container',
  templateUrl: './alumno-edit-container.component.html',
  styleUrls: ['./alumno-edit-container.component.scss']
})
export class AlumnoEditContainerComponent implements OnInit {

  alumno$ : Observable<Alumno> = this.store.select(fromR.getAlumno)
  constructor(@Inject(MAT_DIALOG_DATA)private data:AlumnoEditData,
  private dialogRef : MatDialogRef<AlumnoEditContainerComponent>,
  private store : Store<fromR.AlumnoState>) {
    this.store.dispatch(new alumnosActions.GetAlumnoById(data.AlumnoId))
   }


  ngOnInit() {
  }
  onEdit(alumno:Alumno): void {

this.store.dispatch(new alumnosActions.UpdateAlumno(alumno));
this.dialogRef.close();

  }

}
