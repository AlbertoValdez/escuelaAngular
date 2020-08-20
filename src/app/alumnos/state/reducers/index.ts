import *   as fromAlumnoR from '../reducers/alumno.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
export interface AlumnoState {
    alumno : fromAlumnoR.State;


}

export const reducers :ActionReducerMap<AlumnoState> = {
    alumno: fromAlumnoR.AlumnoReducer

}

export const GetAlumnoModuloState = createFeatureSelector<AlumnoState>('alumno');
export const GetAlumnoState = createSelector(GetAlumnoModuloState, state => state.alumno);

export const getAlumnos  = createSelector(GetAlumnoState,fromAlumnoR.getAlumnos);
export const totalRecords = createSelector(GetAlumnoState, fromAlumnoR.getTotalRecords);

export const getAlumno = createSelector(GetAlumnoState, fromAlumnoR.GetAlumno);