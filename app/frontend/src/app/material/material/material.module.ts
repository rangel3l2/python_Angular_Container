import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
const COMPONENTS = [
  MatIconModule, 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    COMPONENTS,
  ]
})
export class MaterialModule { }
