import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SaisieficheComponent } from './saisiefiche/saisiefiche.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PpeComponent } from './ppe/ppe.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { E6Component } from './e6/e6.component';
import { E4Component } from './e4/e4.component';


const appRoutes: Routes = [
  { path: 'Accueil', component: AccueilComponent },
  { path: 'PPE',      component: PpeComponent },
  { path: 'E4',      component: E4Component },
  { path: 'E6',      component: E6Component },
  { path: '',
    redirectTo: '/Accueil',
    pathMatch: 'full'
  },

];



@NgModule({
  declarations: [
    AppComponent,
    SaisieficheComponent,
    AccueilComponent,
    PpeComponent,
    E6Component,
    E4Component
  ],
  imports: [
    RouterModule.forRoot(
     appRoutes
   ),
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
