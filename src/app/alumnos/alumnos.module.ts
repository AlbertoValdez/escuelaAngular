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


@NgModule({
  declarations: [AlumnosMainContainerComponent, AlumnosListContainerComponent, AlumnosTableListComponent, AlumnoEditContainerComponent, AlumnoEditComponent, AlumnoNewContainerComponent, FilterPipe],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    StoreModule.forFeature('alumno', reducers),
    EffectsModule.forFeature([AlumnoEffects])
  ],
  entryComponents:[AlumnoEditContainerComponent]
})
export class AlumnosModule { }
