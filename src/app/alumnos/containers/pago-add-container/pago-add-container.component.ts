import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pago } from '../../models/pago';
import * as fromReducer from '../../state/reducers' 
import { Store } from '@ngrx/store';
import * as pagoActions from '../../state/actions/alumno.action';

@Component({
  selector: 'app-pago-add-container',
  templateUrl: './pago-add-container.component.html',
  styleUrls: ['./pago-add-container.component.scss']
})
export class PagoAddContainerComponent implements OnInit {


  pagoForm: FormGroup;
  pago:Pago;
  constructor(private fb:FormBuilder, private store:Store<fromReducer.AlumnoState>) { 

    this.buildPagoForm();
    
  }

  ngOnInit() {
  }

  buildPagoForm(){
    this.pagoForm = this.fb.group({
      nombre:['',[Validators.required]],
      concepto : ['',[Validators.required]],
      abonado:['',[Validators.required]],
      estado:['',[Validators.required]]
    });
  }

  onAdd():void{
    if(this.pagoForm.valid){
      if(this.pagoForm.dirty){
        const agregarPago = {...this.pago, ...this.pagoForm.value};
        this.store.dispatch(new pagoActions.AddPago(agregarPago));

      }
    }
  }
}
