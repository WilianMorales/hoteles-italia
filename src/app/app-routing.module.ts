import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { UbicanosComponent } from './pages/ubicanos/ubicanos.component';
import { TarifasComponent } from './pages/tarifas/tarifas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: 'tarifas', component: TarifasComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'ubicanos', component: UbicanosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
