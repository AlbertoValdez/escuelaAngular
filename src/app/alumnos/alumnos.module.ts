import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosMainContainerComponent } from './containers/alumnos-main-container/alumnos-main-container.component';
import { AlumnosListContainerComponent } from './containers/alumnos-list-container/alumnos-list-container.component';
import { SharedModule } from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { reducers } from './state/reducers';
import { AlumnoEffects } from './state/effects/alumno.effects';
import { AlumnosTableListComponent } from './components/alumnos-table-list/alumnos-table-list.component';
import { AlumnoEditContainerComponent } from './containers/alumno-edit-container/alumno-edit-container.component';
import { AlumnoEditComponent } from './components/alumno-edit/alumno-edit.component';
import { AlumnoNewContainerComponent } from './containers/alumno-new-container/alumno-new-container.component';
import { FilterPipe } from './components/pipes/filter.pipe';
import { PagoNewContainerComponent } from './containers/pago-new-container/pago-new-container.component';
import { PagoTableListComponent } from './components/pago-table-list/pago-table-list.component';
import { PagoEditComponent } from './components/pago-edit/pago-edit.component';
import { PagoEditContainerComponent } from './containers/pago-edit-container/pago-edit-container.component';
import { PagoAddContainerComponent } from './containers/pago-add-container/pago-add-container.component';
import { PruebasComponent } from './containers/pruebas/pruebas.component';


@NgModule({
  declarations: [AlumnosMainContainerComponent, AlumnosListContainerComponent, AlumnosTableListComponent, AlumnoEditContainerComponent, AlumnoEditComponent, AlumnoNewContainerComponent, FilterPipe, PagoNewContainerComponent, PagoTableListComponent, PagoEditComponent, PagoEditContainerComponent, PagoAddContainerComponent, PruebasComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    StoreModule.forFeature('alumno', reducers),
    EffectsModule.forFeature([AlumnoEffects])
  ],
  entryComponents:[AlumnoEditContainerComponent,PagoEditContainerComponent]
})
export class AlumnosModule { }
