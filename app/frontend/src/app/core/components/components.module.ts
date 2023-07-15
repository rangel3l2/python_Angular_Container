import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicializatorComponent } from './inicializator/inicializator.component';
import { DataManagerComponent } from './data-manager/data-manager.component';
import { WebscrapingManagerComponent } from './webscraping-manager/webscraping-manager.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material/material.module';

const COMPONENTS= [
  HeaderComponent,
  FooterComponent,
  InicializatorComponent,
  WebscrapingManagerComponent,
  DataManagerComponent,
  
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,

  ],
  exports:[
    COMPONENTS
  ]
})
export class ComponentsModule { }
