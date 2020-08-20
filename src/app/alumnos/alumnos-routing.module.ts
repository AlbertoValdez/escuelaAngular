import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosMainContainerComponent } from './containers/alumnos-main-container/alumnos-main-container.component';
import { AlumnosListContainerComponent } from './containers/alumnos-list-container/alumnos-list-container.component';
import { AlumnoNewContainerComponent } from './containers/alumno-new-container/alumno-new-container.component';


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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
