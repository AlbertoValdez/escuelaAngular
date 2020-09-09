import { Component, OnInit } from '@angular/core';
import * as pagoActions from '../../state/actions/alumno.action';
import * as fromReducer from '../../state/reducers';
import { AppConfirmService } from 'src/app/shared/components/app-confirm/app-confirm.service';
import { Store, ActionsSubject } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { Pago } from '../../models/pago';
import { GetPago } from '../../models/get-pagos';
import { takeUntil } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';
import { PagoEditContainerComponent } from '../pago-edit-container/pago-edit-container.component';
import { ConfirmData } from 'src/app/shared/models/confirm-data';


@Component({
  selector: 'app-pago-new-container',
  templateUrl: './pago-new-container.component.html',
  styleUrls: ['./pago-new-container.component.scss']
})
export class PagoNewContainerComponent implements OnInit {

  constructor( private store:Store<fromReducer.AlumnoState>, 
               public dialog:MatDialog,
               private confirm : AppConfirmService,
               private actionsSub$ : ActionsSubject 
             ) { 
                  
              this.triggers();

  }

    protected ngUnsubscribe: Subject<any> = new Subject<any>();
    pagos$:Observable<Pago[]> = this.store.select(fromReducer.getPagos);
    totalRecords$:Observable<number> = this.store.select(fromReducer.totalR);


  ngOnInit() {

    this.refreshData();
 
  }


  triggers():void {

         this.actionsSub$.pipe(takeUntil(this.ngUnsubscribe))
                       .pipe(ofType(pagoActions.AlumnoActionTypes.DeletePagoComplete))
                       .subscribe(_=>this.refreshData())
                  
   }  

  refreshData():void {


    let request = new  GetPago(100,0);
    this.store.dispatch( new pagoActions.LoadPago(request));

  }

  onEdit(pagoID: number): void {
    
    const dialogRef = this.dialog.open(PagoEditContainerComponent, {
        width: '210px',
        data: {pagoID: pagoID}
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.refreshData();
    });
    
  }


onDelete(pagoID : number ):void{

  const confirmData = new ConfirmData ("Estas eliminando un registro","¿Estas seguro de eliminar?", true);
  this.confirm.confirm(confirmData).subscribe(result => {
    if(result){
      this.store.dispatch(new pagoActions.DeletePago(pagoID))
    }
  })

}


}
