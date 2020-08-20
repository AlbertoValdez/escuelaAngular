import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatTabsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatDividerModule,MatSelectModule} from '@angular/material';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule, 
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule
  ],
  exports: [

    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
