import { Component, OnInit, Inject } from '@angular/core';
import { Pago } from '../../models/pago';
import * as fromR from '../../state/reducers';
import * as pagoActions from '../../state/actions/alumno.action';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';



interface PagoEditData {
  
  pagoID: number;

}
@Component({
  selector: 'app-pago-edit-container',
  templateUrl: './pago-edit-container.component.html',
  styleUrls: ['./pago-edit-container.component.scss']
})
export class PagoEditContainerComponent implements OnInit {

  

pago$ : Observable<Pago> = this.store.select(fromR.GetPago);

  constructor(@Inject(MAT_DIALOG_DATA)
                     
                      private data:PagoEditData, 
                      private dialogRef:MatDialogRef<PagoEditContainerComponent>,
                      private store : Store<fromR.AlumnoState>
                      
             ) {

                        this.store.dispatch(new pagoActions.GetPagoByID(data.pagoID))

                }

  ngOnInit() { }
  
  onEdit(pago : Pago):void {

        this.store.dispatch(new pagoActions.UpdatePago(pago));
        console.log("entre a on edit pago edit");
        this.dialogRef.close();

  }

}
