import { Component } from '@angular/core';
import { faBroom, faChevronLeft, faChevronRight, faCloudShowersHeavy, faDroplet, faFan, faHeadset, faShower, faTv, faUserShield, faWater, faWifi } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {

  showModal = false;
  tarifaSeleccionada: any = null;
  currentImg = 0;

  iconLeft = faChevronLeft;
  iconRight = faChevronRight;

  imagenes = [
    'assets/img/habitaciones/_MG_1513.jpg',
    'assets/img/habitaciones/_MG_1562.jpg',
    'assets/img/habitaciones/_MG_1577.jpg',
    'assets/img/habitaciones/_MG_1659.jpg'
  ];

  tarifas = [
    {
      nombre: 'tarifas.simple.nombre',
      precio: 120,
      descripcion: 'tarifas.simple.descripcion',
      beneficios: [
        'tarifas.simple.beneficios.0',
        'tarifas.simple.beneficios.1',
        'tarifas.simple.beneficios.2'
      ],
      imagenes: [
        'assets/img/habitaciones/habitacion-simple1.jpg',
        'assets/img/habitaciones/habitacion-simple2.jpg',
        'assets/img/habitaciones/habitacion-simple3.jpg',
        'assets/img/habitaciones/habitacion-simple4.jpg',
        'assets/img/habitaciones/habitacion-simple5.jpg',
      ]
    },
    {
      nombre: 'tarifas.doble.nombre',
      precio: 180,
      descripcion: 'tarifas.doble.descripcion',
      beneficios: [
        'tarifas.doble.beneficios.0',
        'tarifas.doble.beneficios.1',
        'tarifas.doble.beneficios.2'
      ],
      imagenes: [
        'assets/img/habitaciones/habitacion-doble1.jpg',
        'assets/img/habitaciones/habitacion-doble2.jpg',
        'assets/img/habitaciones/habitacion-doble3.jpg',
        'assets/img/habitaciones/habitacion-doble4.jpg',
        'assets/img/habitaciones/habitacion-doble5.jpg',
      ]
    },
    {
      nombre: 'tarifas.ejecutiva.nombre',
      precio: 300,
      descripcion: 'tarifas.ejecutiva.descripcion',
      beneficios: [
        'tarifas.ejecutiva.beneficios.0',
        'tarifas.ejecutiva.beneficios.1',
        'tarifas.ejecutiva.beneficios.2'
      ],
      imagenes: [
        'assets/img/habitaciones/habitacion-ejecutiva1.jpg',
        'assets/img/habitaciones/habitacion-ejecutiva2.jpg',
        'assets/img/habitaciones/habitacion-ejecutiva3.jpg',
        'assets/img/habitaciones/habitacion-ejecutiva4.jpg',
        'assets/img/habitaciones/habitacion-ejecutiva5.jpg',
      ]
    }
  ];


  servicios = [
    { nombre: 'serviceRoom.service1', icono: faWifi },
    { nombre: 'serviceRoom.service2', icono: faTv },
    { nombre: 'serviceRoom.service3', icono: faBroom },
    { nombre: 'serviceRoom.service4', icono: faShower },
    { nombre: 'serviceRoom.service5', icono: faDroplet },
    { nombre: 'serviceRoom.service6', icono: faFan },
    { nombre: 'serviceRoom.service7', icono: faHeadset },
    { nombre: 'serviceRoom.service8', icono: faUserShield }
  ];


  currentIndex = 0;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imagenes.length;
    }, 3000);
  }

  scrollToPricing() {
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  }

  mostrarModalTarifa(tarifa: any) {
    this.tarifaSeleccionada = tarifa;
    this.showModal = true;
    this.currentImg = 0;
  }

  closeModal() {
    this.showModal = false;
  }

  nextImg() {
    this.currentImg = (this.currentImg + 1) % this.tarifaSeleccionada.imagenes.length;
  }

  prevImg() {
    this.currentImg = (this.currentImg - 1 + this.tarifaSeleccionada.imagenes.length) % this.tarifaSeleccionada.imagenes.length;
  }

}
