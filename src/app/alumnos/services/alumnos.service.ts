import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAlumnos } from '../models/get-alumnos';
import { Observable } from 'rxjs';
import { AlumnoList } from '../models/alumno-list';
import { environment } from 'src/environments/environment';
import { Alumno } from '../models/alumno';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private httpClient : HttpClient) {}
       GetAlumnos(request:GetAlumnos):Observable<AlumnoList>{

        return this.httpClient.post<AlumnoList>(`${environment.ApiUrl}escuela/alumnos`, request);

       
   }

   GetAlumnoById(id:number):Observable<Alumno>{
     return this.httpClient.get<Alumno>(`${environment.ApiUrl}escuela/${id}`)
   }

   UpdateAlumno(alumno:Alumno):Observable<Response>{
     return this.httpClient.put(`${environment.ApiUrl}escuela/`,alumno)
     .pipe(
       map((response:Response)=>response)
     )

   }

   DeleteAlumno(id:number):Observable<Response>{
     return this.httpClient.delete(`${environment.ApiUrl}escuela/${id}`).pipe(map((response:Response)=>response)
     )
   }


   AddAlumno(alumno:Alumno):Observable<Response>{
     return this.httpClient.post(`${environment.ApiUrl}escuela/`,alumno)
     .pipe(map((response:Response)=>response)
     );
   }
}
