import { Component, OnInit } from '@angular/core';
import * as alumnoActions from '../../state/actions/alumno.action';
import * as fromReducer from '../../state/reducers';
import {GetAlumnos} from '../../models/get-alumnos';
import { Store, ActionsSubject } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Alumnos } from '../../models/alumnos';
import { MatDialog } from '@angular/material';
import { AlumnoEditContainerComponent } from '../alumno-edit-container/alumno-edit-container.component';
import { AppConfirmService } from 'src/app/shared/components/app-confirm/app-confirm.service';
import { ConfirmData } from 'src/app/shared/models/confirm-data';
import { ofType } from '@ngrx/effects';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-alumnos-list-container',
  templateUrl: './alumnos-list-container.component.html',
  styleUrls: ['./alumnos-list-container.component.scss']
})
export class AlumnosListContainerComponent implements OnInit {

  constructor(private store:Store<fromReducer.AlumnoState>, public dialog: MatDialog,
    private confirm : AppConfirmService,
    private actionsSub$ : ActionsSubject) { 
      this.triggers();
    }
    protected ngUnsubscribe: Subject<any> = new Subject<any>();
  products$:Observable<Alumnos[]> = this.store.select(fromReducer.getAlumnos);
  totalRecords$:Observable<number> = this.store.select(fromReducer.totalRecords);

  ngOnInit() {
    this.refreshData();

  }
  triggers():void{
    this.actionsSub$
    .pipe(takeUntil(this.ngUnsubscribe))
    .pipe(ofType(alumnoActions.AlumnoActionTypes.DeleteAlumnoComplete))
    .subscribe(_=>this.refreshData())

  }

  refreshData():void {
    let request = new GetAlumnos(100, 0);
    this.store.dispatch(new alumnoActions.LoadAlumnos(request));
  }


  onEdit(AlumnoId: number): void {
    const dialogRef = this.dialog.open(AlumnoEditContainerComponent, {
      width: '1400px',
      data: {AlumnoId: AlumnoId}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshData();
    });
  }

  onDelete(AlumnoId:number): void {

  const confirmData = new ConfirmData("Estas eliminando a un alumno","¿Estas seguro de eliminar?",true);

  this.confirm.confirm(confirmData)
  .subscribe(result => {
    if(result){

this.store.dispatch(new alumnoActions.DeleteAlumno(AlumnoId));
    }
  })
  }
}
