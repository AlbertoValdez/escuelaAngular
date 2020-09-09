import { Component, OnInit, Input, Output,EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Pago } from '../../models/pago';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-pago-edit',
  templateUrl: './pago-edit.component.html',
  styleUrls: ['./pago-edit.component.scss']
})
export class PagoEditComponent implements OnInit, OnChanges {

  @Input()
  pago:Pago;

  @Output()
  edit : EventEmitter<Pago> = new EventEmitter<Pago>();

  pagoEditForm : FormGroup;

  constructor(private fb: FormBuilder) { }

ngOnChanges(changes:SimpleChanges):void{
  if(changes.pago && changes.pago.currentValue){
    this.buildPagoEditForm();
  }
}
  
  ngOnInit() {
  }


  buildPagoEditForm():void{
    this.pagoEditForm = this.fb.group({
         nombre:[this.pago.nombre, [Validators.required]],
         concepto:[this.pago.concepto, [Validators.required]],
         abonado:[this.pago.abonado, [Validators.required]],
         estado:[this.pago.estado, [Validators.required]]
    });
  }


onEdit():void{
  if (this.pagoEditForm.valid) {
    if (this.pagoEditForm.dirty){
      const pagoEditado = {...this.pago, ...this.pagoEditForm.value};
      this.edit.emit(pagoEditado);
    }
  }
}


}
