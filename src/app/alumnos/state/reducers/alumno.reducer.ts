
import {Alumnos} from '../../models/alumnos';
import * as AlumnoAction from '../actions/alumno.action';
import { Alumno } from '../../models/alumno';
import { Pago } from '../../models/pago';



export interface State{

    alumnos :Alumnos[];
    totalRecords:number;
    alumno : Alumno;
    pagos : Pago[];
    totalR : number;

    pago : Pago;
 

}
const initialState : State = {

    alumnos: [],
    totalRecords : 0,
    pagos : [],
    alumno: new Alumno(),
    pago: new Pago(),
    totalR :0
   
};

export function AlumnoReducer(state = initialState, action:AlumnoAction.Actions){
    switch (action.type){
        case AlumnoAction.AlumnoActionTypes.LoadAlumnos: 
        return state;
           case AlumnoAction.AlumnoActionTypes.LoadAlumnosComplete:
               return {
                   ...state,
                alumnos : action.payload.data,
                totalRecords : action.payload.totalRecords
               }
            case AlumnoAction.AlumnoActionTypes.GetAlumnoById:
                return state;
            case AlumnoAction.AlumnoActionTypes.GetAlumnoByIdComplete:
                return {
                    ...state,
                    alumno: action.playload

                }
            case AlumnoAction.AlumnoActionTypes.UpdateAlumno:{
                return state;}
                case AlumnoAction.AlumnoActionTypes.UpdateAlumnoComplete:{
                    return state;}

            case AlumnoAction.AlumnoActionTypes.DeleteAlumno:{
                        return state;}
            case AlumnoAction.AlumnoActionTypes.DeleteAlumno:{
                        return state;}

                        case AlumnoAction.AlumnoActionTypes.AddAlumno:{
                            return state;}
                case AlumnoAction.AlumnoActionTypes.AddAlumnoComplete:{
                            return state;}
            case AlumnoAction.AlumnoActionTypes.LoadPago: 
            return state;
            case AlumnoAction.AlumnoActionTypes.LoadPagoComplete: return {
                ...state,
                pagos: action.playload.data,
                totalR: action.playload.totalRecord
            }
            case AlumnoAction.AlumnoActionTypes.GetPagoByID:
                return state;
                case AlumnoAction.AlumnoActionTypes.GetPagoByIDComplete: return {
                    ...state,
                    pago : action.playload
                }
            case AlumnoAction.AlumnoActionTypes.UpdatePago:{
                return state;}
                case AlumnoAction.AlumnoActionTypes.UpdatePagoComplete:{
                    return state;
                }
            case AlumnoAction.AlumnoActionTypes.DeletePago:{
                return state;
            } case AlumnoAction.AlumnoActionTypes.DeletePagoComplete:{
                return state;
            }
            case AlumnoAction.AlumnoActionTypes.AddAlumno:{
                return state;
            }
                case AlumnoAction.AlumnoActionTypes.AddAlumnoComplete:{
                    return state;
                }

    

        default:
            return state;
    }


}
export const getAlumnos = (state :State) => state.alumnos;
export const getTotalRecords = (state :State) => state.totalRecords; 
export const GetAlumno = (state :State) => state.alumno;
export const getPagos = (state : State) => state.pagos;
export const getTotalR = (state : State) => state.totalR;
export const GetPago = (state : State) => state.pago;


