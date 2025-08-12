import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TurismoComponent } from './pages/turismo/turismo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'turismo', component: TurismoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
