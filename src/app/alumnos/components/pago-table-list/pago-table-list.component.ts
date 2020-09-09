import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pago } from '../../models/pago';


@Component({
  selector: 'app-pago-table-list',
  templateUrl: './pago-table-list.component.html',
  styleUrls: ['./pago-table-list.component.scss']
})
export class PagoTableListComponent implements OnInit {
@Input()
items : Pago[];

@Output()
edit : EventEmitter<number> = new EventEmitter<number>();

@Output()
delete : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onEdit(pagoID:number):void{

    this.edit.emit(pagoID);
    

  }

  onDelete(pagoID: number): void {
    this.delete.emit(pagoID);
  }
}
