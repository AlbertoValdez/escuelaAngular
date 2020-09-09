import { Injectable } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as alumnosActions from '../actions/alumno.action';
import {switchMap, map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Pago } from '../../models/pago';

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
                

                   @Effect()
                   LoadPago$ = this.actions$.pipe(
                       ofType<alumnosActions.LoadPago>(alumnosActions.AlumnoActionTypes.LoadPago),
                       switchMap(action=> this.alumnoService.GetPagos(action.request).pipe(
                           map(data=> new alumnosActions.LoadPagoComplete(data))
                       ))
                   );

                   @Effect()
                   GetPago$ = this.actions$.pipe(
                       ofType<alumnosActions.GetPagoByID>(alumnosActions.AlumnoActionTypes.GetPagoByID),
                       switchMap(action => this.alumnoService.GetPago(action.PagoId)
                       .pipe( map(data => new alumnosActions.GetPagoByIDComplete(data))
                       ))
                   );


                   @Effect()
                   UpdatePago$ = this.actions$.pipe(
                       ofType<alumnosActions.UpdatePago>(alumnosActions.AlumnoActionTypes.UpdatePago),
                       switchMap(action=>this.alumnoService.UpdatePago(action.request)
                       .pipe(
                           map(_ => {
                            this.route.navigate(['/alumnos/pagos'])

                            return new alumnosActions.UpdatePagoComplete()

                           } 
                       )))
                   );

                   @Effect()
                   DeletePago = this.actions$.pipe(
                       ofType<alumnosActions.DeletePago>(alumnosActions.AlumnoActionTypes.DeletePago),
                       switchMap(action=>this.alumnoService.DeletePago(action.pagoID)
                       .pipe(
                           map(_=>{
                               this.route.navigate(['/alumnos/pagos'])
                               return new alumnosActions.DeletePagoComplete()
                           })
                       ))
                   );

                   @Effect()
                   AddPago = this.actions$.pipe(
                       ofType<alumnosActions.AddPago>(alumnosActions.AlumnoActionTypes.AddPago),
                       switchMap(action=>this.alumnoService.AddPago(action.request).pipe(
                           map(_=>{
                               this.route.navigate(['alumnos/pagos'])
                               return new alumnosActions.AddPagoComplete()
                           })
                       ))
                   )



}