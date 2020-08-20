import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alumno } from '../../models/alumno';
import { Store } from '@ngrx/store';
import * as fromReducer from '../../state/reducers';
import * as alumnoActions from '../../state/actions/alumno.action';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-alumno-new-container',
  templateUrl: './alumno-new-container.component.html',
  styleUrls: ['./alumno-new-container.component.scss']
})
export class AlumnoNewContainerComponent implements OnInit {

  
  alumnoForm : FormGroup;
  gradoKey: KeyValue<string, string>[]= this.buildGrado();
  grupoKey : KeyValue<string, string>[]= this.buildGrupo();
  sexoKey : KeyValue<string, string>[]= this.buildSexo();
  tutorKey : KeyValue<string, string>[]= this.buildTutor();
  tutorKey2 : KeyValue<string, string>[]= this.buildTutor2();

  alumno : Alumno;
  ageAlumno;
  showAgeAlumno;

  agePadre;
  showAgePadre;

  ageMadre;
  showAgeMadre;

  constructor(private fb : FormBuilder, private store: Store<fromReducer.AlumnoState>) {
    this.buildAlumnoForm();
   }

  ngOnInit() {
  }
  buildAlumnoForm(){
    this.alumnoForm = this.fb.group({
      curpAlumno : ['', [Validators.required]],
      nombreAlumno : ['', [Validators.required]],
      apellidoAlumno : ['', [Validators.required]],
      grado : ['', [Validators.required]],
      grupo : ['', [Validators.required]],
      fechaNacimiento : ['', [Validators.required]],
      sexo : ['', [Validators.required]],
      edad : ['', [Validators.required]],
      tipoSangre : ['', [Validators.required]],
      lugarNacimiento : ['', [Validators.required]],
      telefonoAlumno : ['', [Validators.required]],
      correo : ['', [Validators.required]],
      nombrePadre : ['', [Validators.required]],
      tutorPadre : ['', [Validators.required]],
      curpPadre : ['', [Validators.required]],
      fechaNacimientoPadre : ['', [Validators.required]],
      edadPadre : ['', [Validators.required]],
      inePadre : ['', [Validators.required]],
      escolaridadPadre : ['', [Validators.required]],
      telefonoPadre : ['', [Validators.required]],
      nombreMadre : ['', [Validators.required]],
      tutorMadre : ['', [Validators.required]],
      curpMadre : ['', [Validators.required]],
      fechaNacimientoMadre : ['', [Validators.required]],
      edadMadre : ['', [Validators.required]],
      ineMadre : ['', [Validators.required]],
      escolaridadMadre : ['', [Validators.required]],
      telefonoMadre : ['', [Validators.required]],
      domicilio : ['', [Validators.required]]
    });

  }

  


  onAdd(): void {
    if (this.alumnoForm.valid){
      if(this.alumnoForm.dirty){
        const AgregarAlumno = {...this.alumno, ...this.alumnoForm.value};
        this.store.dispatch(new alumnoActions.AddAlumno(AgregarAlumno));
      }
    }
  }


 edadCalculator(){
   if (this.ageAlumno){
     const convertirEdad = new Date(this.ageAlumno);
     const restaTiempo = Math.abs(Date.now() - convertirEdad.getTime());
     this.showAgeAlumno = Math.floor((restaTiempo / (1000 * 3600 * 24))/365);


   }
 }


 edadCalculatorPadre(){
  if (this.agePadre){
    const convertirEdad = new Date(this.agePadre);
    const restaTiempo = Math.abs(Date.now() - convertirEdad.getTime());
    this.showAgePadre = Math.floor((restaTiempo / (1000 * 3600 * 24))/365);


  }
}

edadCalculatorMadre(){
  if (this.ageMadre){
    const convertirEdad = new Date(this.ageMadre);
    const restaTiempo = Math.abs(Date.now() - convertirEdad.getTime());
    this.showAgeMadre = Math.floor((restaTiempo / (1000 * 3600 * 24))/365);


  }
}

buildGrado() : any {

  return [
    {key:'1º', value:'1º'},
    {key:'2º', value:'2º'},
    {key:'3º', value:'3º'}
  ];

}

buildGrupo(): any {
  return[
    {key: 'A' , value: 'A'},
    {key: 'B' , value: 'B'},
    {key: 'C' , value: 'C'},
    {key: 'D' , value: 'D'},
  ];
}

buildSexo(): any {
  return [
    {key: 'Masculino' , value: 'Masculino'},
    {key: 'Femenino' , value: 'Femenino'}
  ];
}

buildTutor(): any {
  return[
    {key:'Si', value:'Si'},
    {key:'No', value:'No'}
  ];
}


buildTutor2(): any {
  return[
    {key:'Si', value:'Si'},
    {key:'No', value:'No'}
  ];
}

}
