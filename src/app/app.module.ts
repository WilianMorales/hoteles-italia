import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from "./components/components.module";
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TurismoComponent } from './pages/turismo/turismo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HabitacionesComponent,
    ContactoComponent,
    TurismoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FontAwesomeModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
