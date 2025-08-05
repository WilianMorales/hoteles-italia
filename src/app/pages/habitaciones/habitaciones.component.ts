import { Component } from '@angular/core';
import { faBroom, faCloudShowersHeavy, faFan, faHeadset, faShower, faTv, faUserShield, faWater, faWifi } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {

  iconWifi = faWifi;
  iconTV = faTv;
  iconEscoba = faBroom;
  iconShower = faShower;
  iconAgua = faWater;
  iconVentilador = faFan;
  iconAtencion = faHeadset;
  iconSeguridad = faUserShield;


  imagenes = [
    'assets/img/habitaciones/_MG_1513.jpg',
    'assets/img/habitaciones/_MG_1562.jpg',
    'assets/img/habitaciones/_MG_1577.jpg',
    'assets/img/habitaciones/_MG_1659.jpg'
  ];

  tarifas = [
    {
      nombre: 'Simple',
      precio: 120,
      descripcion: 'Ideal para viajeros individuales.',
      beneficios: ['Tv', 'Cama individual 1.5', 'Habitacioón confortable', '+ Todos los servicios incluidos']
    },
    {
      nombre: 'Doble',
      precio: 180,
      descripcion: 'Perfecta para dos personas.',
      beneficios: ['Tv', '2 Camas individuales 1.5', 'Habitación confortable', '+ Todos los servicios incluidos']
    },
    {
      nombre: 'Ejecutiva',
      precio: 300,
      descripcion: 'Lujo y confort para tu estadía.',
      beneficios: ['Tv LED 32"', 'Cama 2 plazas', 'Habitación confortable']
    }
  ];

  servicios = [
    { nombre: 'Wi-Fi gratis en todo el hotel', icono: faWifi },
    { nombre: 'TV por cable', icono: faTv },
    { nombre: 'Limpieza permanente', icono: faBroom },
    { nombre: 'Baño privado por habitación', icono: faShower },
    { nombre: 'Agua fría y caliente 24h', icono: faWater },
    { nombre: 'Ventilador por habitación', icono: faFan },
    { nombre: 'Atención las 24 horas', icono: faHeadset },
    { nombre: 'Seguridad y tranquilidad', icono: faUserShield }
  ];


  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imagenes.length;
    }, 3000);
  }

  prev() {
    this.currentIndex = (this.currentIndex === 0) ? this.imagenes.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex === this.imagenes.length - 1) ? 0 : this.currentIndex + 1;
  }

  scrollToPricing() {
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  }


}
