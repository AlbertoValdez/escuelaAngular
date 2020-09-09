import {Action} from '@ngrx/store';
import { GetAlumnos } from '../../models/get-alumnos';
import { AlumnoList } from '../../models/alumno-list';
import { Alumno } from '../../models/alumno';
import { GetPago } from '../../models/get-pagos';
import { PagoList } from '../../models/pago-list';
import { Pago } from '../../models/pago';

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
    AddAlumnoComplete = '[Alumno] add alumno Complete',
    LoadPago = '[Pago] Load Pagos',
    LoadPagoComplete = '[Pago] Load Pagos Complete',
    GetPagoByID = '[Pago] Get Pago',
    GetPagoByIDComplete = '[Pago] Get Pago Complete',
    UpdatePago = '[Pago] Update pago',
    UpdatePagoComplete = '[Pago] Update pago Complete',
    DeletePago = '[Pago] Delete Pago',
    DeletePagoComplete = '[Pago] Delete Pago Complete',
    AddPago = '[Pago] Add Pago ',
    AddPagoComplete = '[Pago] Add Pago Complete'


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


export class LoadPago implements Action {
    readonly type = AlumnoActionTypes.LoadPago;
    constructor(public request:GetPago) { }
}

export class LoadPagoComplete implements Action {

    readonly type = AlumnoActionTypes.LoadPagoComplete;
    constructor(public playload: PagoList) { }

}

export class GetPagoByID implements Action {

    readonly type = AlumnoActionTypes.GetPagoByID;
    constructor(public PagoId:number){ }

}

export class GetPagoByIDComplete implements Action {

    readonly type = AlumnoActionTypes.GetPagoByIDComplete;
    constructor(public playload : Pago) { }

}

export class UpdatePago implements Action {
    
    readonly type = AlumnoActionTypes.UpdatePago;
    constructor(public request : Pago){ }

}

export class UpdatePagoComplete implements Action {
    readonly type = AlumnoActionTypes.UpdatePagoComplete;
    constructor() { }
}


export class DeletePago implements Action {

        readonly type = AlumnoActionTypes.DeletePago;
        constructor(public pagoID : number ) { }
        
}

export class DeletePagoComplete implements Action {

    readonly type = AlumnoActionTypes.DeletePagoComplete;
    constructor() { }

}

export class AddPago implements Action {

    readonly type = AlumnoActionTypes.AddPago;
    constructor(public request : Pago) { }
}

export class AddPagoComplete implements Action {

    readonly type = AlumnoActionTypes.AddPagoComplete;
    constructor() { }
}

export type Actions =  LoadAlumnos | LoadAlumnosComplete    |  GetAlumnoById
                     | GetAlumnoByIdComplete |UpdateAlumno  | UpdateAlumnoComplete 
                     | DeleteAlumno| DeleteAlumnoComplete   | AddAlumno | AddAlumnoComplete | LoadPago | LoadPagoComplete 
                     | GetPagoByID | GetPagoByIDComplete    | UpdatePago | UpdatePagoComplete | DeletePago | DeletePagoComplete
                     | AddPago     |AddPagoComplete
                      ;