
import {Alumnos} from '../../models/alumnos';
import * as AlumnoAction from '../actions/alumno.action';
import { Alumno } from '../../models/alumno';


export interface State{

    alumnos :Alumnos[];
    totalRecords:number;
    alumno : Alumno;
}
const initialState : State = {

    alumnos: [],
    totalRecords : 0,
    alumno: new Alumno()
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
    

        default:
            return state;
    }


}
export const getAlumnos = (state :State) => state.alumnos;
export const getTotalRecords = (state :State) => state.totalRecords; 
export const GetAlumno = (state :State) => state.alumno;

