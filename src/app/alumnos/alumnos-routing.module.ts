import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosMainContainerComponent } from './containers/alumnos-main-container/alumnos-main-container.component';
import { AlumnosListContainerComponent } from './containers/alumnos-list-container/alumnos-list-container.component';
import { AlumnoNewContainerComponent } from './containers/alumno-new-container/alumno-new-container.component';
import { PagoNewContainerComponent } from './containers/pago-new-container/pago-new-container.component';
import { PagoAddContainerComponent } from './containers/pago-add-container/pago-add-container.component';
import { PruebasComponent } from './containers/pruebas/pruebas.component';


const routes: Routes = [

  {
    path:'',
    component:AlumnosMainContainerComponent,
    children:[
      {
        path:'',
        redirectTo:'lista',
        pathMatch:'full'
      },
      
      {
        path:'lista',
        component:AlumnosListContainerComponent
      },
      {
        path:'nuevo',
        component:AlumnoNewContainerComponent
      },
      {
        path:'pagos',
        component:PagoNewContainerComponent
      },
      {
        path:'nuevoPago',
        component:PagoAddContainerComponent
      },
      {
        path:'prueba',
        component:PruebasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
