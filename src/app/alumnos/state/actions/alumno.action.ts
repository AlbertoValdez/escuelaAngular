import {Action} from '@ngrx/store';
import { GetAlumnos } from '../../models/get-alumnos';
import { AlumnoList } from '../../models/alumno-list';
import { Alumno } from '../../models/alumno';

export enum AlumnoActionTypes {

    LoadAlumnos = '[Alumnos] Load Alumnos',
    LoadAlumnosComplete = '[Alumnos] Load Alumnos Complete',
    GetAlumnoById = '[Alumno] get Alumno',
    GetAlumnoByIdComplete = '[Alumno] get Alumno Complete',
    UpdateAlumno = '[Alumno] update alumno',
    UpdateAlumnoComplete = '[Alumno] update alumno Complete',
    DeleteAlumno = '[Alumno] Delete Alumno',
    DeleteAlumnoComplete = '[Alumno] Delete Alumno Complete',
    AddAlumno = '[Alumno] add alumno',
    AddAlumnoComplete = '[Alumno] add alumno Complete'


}


export class LoadAlumnos implements Action{

    readonly type = AlumnoActionTypes.LoadAlumnos;
    constructor(public request:GetAlumnos) { }

}

export class LoadAlumnosComplete implements Action {

    readonly type = AlumnoActionTypes.LoadAlumnosComplete;
    constructor(public payload: AlumnoList) { }

}

export class GetAlumnoById implements Action {
  readonly  type = AlumnoActionTypes.GetAlumnoById;
  constructor(public AlumnoId:number) {} 
}

export class GetAlumnoByIdComplete implements Action {
 readonly   type = AlumnoActionTypes.GetAlumnoByIdComplete;
 constructor(public playload : Alumno){}

}

export class UpdateAlumno implements Action{
    readonly type = AlumnoActionTypes.UpdateAlumno;
    constructor(public request : Alumno) { }
}

export class UpdateAlumnoComplete implements Action {
    readonly type = AlumnoActionTypes.UpdateAlumnoComplete;
    constructor() { }
}

export class DeleteAlumno implements Action{
    readonly type = AlumnoActionTypes.DeleteAlumno;
    constructor(public AlumnoId:number) { }
}

export class DeleteAlumnoComplete implements Action {
    readonly type = AlumnoActionTypes.DeleteAlumnoComplete;
    constructor() { }
}

export class AddAlumno implements Action {
    readonly type = AlumnoActionTypes.AddAlumno;
    constructor(public request : Alumno){ }
}

export class AddAlumnoComplete implements Action {

    readonly type = AlumnoActionTypes.AddAlumnoComplete;
    constructor() { }
}


export type Actions =  LoadAlumnos | LoadAlumnosComplete |  GetAlumnoById
                     | GetAlumnoByIdComplete |UpdateAlumno | UpdateAlumnoComplete 
                     | DeleteAlumno| DeleteAlumnoComplete | AddAlumno | AddAlumnoComplete;