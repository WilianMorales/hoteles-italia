import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { RedesSocialesComponent } from './shared/redes-sociales/redes-sociales.component';
import { FormReservaComponent } from './shared/form-reserva/form-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HabitacionesComponent,
    ContactoComponent,
    RedesSocialesComponent,
    FormReservaComponent,
    TurismoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FontAwesomeModule
],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
