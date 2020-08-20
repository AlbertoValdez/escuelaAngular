import { Injectable } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as alumnosActions from '../actions/alumno.action';
import {switchMap, map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AlumnoEffects{
    constructor(private alumnoService: AlumnosService,
                private actions$:Actions, private route: Router){ }
                @Effect()
                getAlumnos$ = this.actions$.pipe(
                    ofType<alumnosActions.LoadAlumnos>(alumnosActions.AlumnoActionTypes.LoadAlumnos),
                    switchMap(action=>this.alumnoService.GetAlumnos(action.request)
                    .pipe(
                        map(data=>new alumnosActions.LoadAlumnosComplete(data))
                    ))
                );

                @Effect()
                getAlumnoById$  = this.actions$.pipe(
                    ofType<alumnosActions.GetAlumnoById>(alumnosActions.AlumnoActionTypes.GetAlumnoById),
                    switchMap(action => this.alumnoService.GetAlumnoById(action.AlumnoId)
                    .pipe(
                        map(data=> new alumnosActions.GetAlumnoByIdComplete(data))
                    ))
                );

                @Effect()
                UpdateAlumno$ = this.actions$.pipe(
                    ofType<alumnosActions.UpdateAlumno>(alumnosActions.AlumnoActionTypes.UpdateAlumno),
                    switchMap(action=>this.alumnoService.UpdateAlumno(action.request)
                    .pipe(
                        map(_=> {
                            this.route.navigate(['/alumnos/lista'])

                            return new alumnosActions.UpdateAlumnoComplete()
                        } 
                        )))
                );

                @Effect()
                DeleteAlumno$ = this.actions$.pipe(
                    ofType<alumnosActions.DeleteAlumno>(alumnosActions.AlumnoActionTypes.DeleteAlumno),
                    switchMap(action => this.alumnoService.DeleteAlumno(action.AlumnoId)
                    .pipe(map(_=>{
                        this.route.navigate(['/alumnos/lista'])
                        return new alumnosActions.DeleteAlumnoComplete()
                    }
                    )))
                );


                @Effect()
                   AddAlumno$ = this.actions$.pipe(
                       ofType<alumnosActions.AddAlumno>(alumnosActions.AlumnoActionTypes.AddAlumno),
                       switchMap(action => this.alumnoService.AddAlumno(action.request)
                       .pipe(
                           map(_=>{
                               this.route.navigate(['/alumnos/lista'])
                               return new alumnosActions.AddAlumnoComplete()
                           })
                       ))
                   ); 
                


}