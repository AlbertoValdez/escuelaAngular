import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumnos } from '../../models/alumnos';

@Component({
  selector: 'app-alumnos-table-list',
  templateUrl: './alumnos-table-list.component.html',
  styleUrls: ['./alumnos-table-list.component.scss']
})
export class AlumnosTableListComponent implements OnInit {
 @Input()
 items : Alumnos[];
 @Output()
 edit : EventEmitter<number> = new EventEmitter<number>();
 @Output()
 delete : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }
  filterAlumno ='';

  ngOnInit() {
  }

  onEdit(AlumnoId : number):void{
    this.edit.emit(AlumnoId);
  }
  onDelete(AlumnoId: number):void{
    this.delete.emit(AlumnoId)
  }
}
