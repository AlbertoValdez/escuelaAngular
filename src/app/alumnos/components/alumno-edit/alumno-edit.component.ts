import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-edit',
  templateUrl: './alumno-edit.component.html',
  styleUrls: ['./alumno-edit.component.scss']
})
export class AlumnoEditComponent implements OnInit, OnChanges {

  @Input()
  alumno:Alumno;

@Output()
edit : EventEmitter<Alumno> = new EventEmitter<Alumno>();

  alumnoEditForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnChanges(changes:SimpleChanges): void{

    if(changes.alumno && changes.alumno.currentValue){
        this.buildAlumnoEditForm();
    }

  }
  ngOnInit() {
  }

  buildAlumnoEditForm():void {
    this.alumnoEditForm = this.fb.group({
      curpAlumno : [this.alumno.curpAlumno, [Validators.required]],
      nombreAlumno : [this.alumno.nombreAlumno, [Validators.required]],
      apellidoAlumno : [this.alumno.apellidoAlumno, [Validators.required]],
      grado : [this.alumno.grado, [Validators.required]],
      grupo : [this.alumno.grupo, [Validators.required]],
      fechaNacimiento : [this.alumno.fechaNacimiento, [Validators.required]],
      sexo : [this.alumno.sexo, [Validators.required]],
      edad : [this.alumno.edad, [Validators.required]],
      tipoSangre : [this.alumno.tipoSangre, [Validators.required]],
      lugarNacimiento : [this.alumno.lugarNacimiento, [Validators.required]],
      telefonoAlumno : [this.alumno.telefonoAlumno, [Validators.required]],
      correo : [this.alumno.correo, [Validators.required]],
      nombrePadre : [this.alumno.nombrePadre, [Validators.required]],
      tutorPadre : [this.alumno.tutorPadre, [Validators.required]],
      curpPadre : [this.alumno.curpPadre, [Validators.required]],
      fechaNacimientoPadre : [this.alumno.fechaNacimientoPadre, [Validators.required]],
      edadPadre : [this.alumno.edadPadre, [Validators.required]],
      inePadre : [this.alumno.inePadre, [Validators.required]],
      escolaridadPadre : [this.alumno.escolaridadPadre, [Validators.required]],
      telefonoPadre : [this.alumno.telefonoPadre, [Validators.required]],
      nombreMadre : [this.alumno.nombreMadre, [Validators.required]],
      tutorMadre : [this.alumno.tutorMadre, [Validators.required]],
      curpMadre : [this.alumno.curpMadre, [Validators.required]],
      fechaNacimientoMadre : [this.alumno.fechaNacimientoMadre, [Validators.required]],
      edadMadre : [this.alumno.edadMadre, [Validators.required]],
      ineMadre : [this.alumno.ineMadre, [Validators.required]],
      escolaridadMadre : [this.alumno.escolaridadMadre, [Validators.required]],
      telefonoMadre : [this.alumno.telefonoMadre, [Validators.required]],
      domicilio : [this.alumno.domicilio, [Validators.required]]
    });
  }

  onEdit():void{
    if(this.alumnoEditForm.valid){
      if(this.alumnoEditForm.dirty){
       const AlumnoEditado = {...this.alumno,...this.alumnoEditForm.value};
        this.edit.emit(AlumnoEditado)
      }
    }
  }

}
