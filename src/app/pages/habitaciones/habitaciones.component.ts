import { Component } from '@angular/core';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '../../services/translate.service';
import { faEye } from '@fortawesome/free-regular-svg-icons';

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

  iconStar = faStar;
  iconStarR = faStar
  iconEye = faEye;


  imagenes = [
    'assets/img/habitaciones/_MG_1513.webp',
    'assets/img/habitaciones/_MG_1562.webp',
    'assets/img/habitaciones/_MG_1577.webp',
    'assets/img/habitaciones/_MG_1659.webp'
  ];

  tarifas = [
    {
      nombre: 'tarifas.simple.nombre',
      precio: 40,
      descripcion: 'tarifas.simple.descripcion',
      beneficios: [
        'tarifas.simple.beneficios.0',
        'tarifas.simple.beneficios.1',
        'tarifas.simple.beneficios.2',
        'tarifas.simple.beneficios.3',
        'tarifas.simple.beneficios.4',
        'tarifas.simple.beneficios.5',
        'tarifas.simple.beneficios.6'
      ],
      imagenes: [
        'assets/img/habitaciones/habitacion-simple1.webp',
        'assets/img/habitaciones/habitacion-simple2.webp',
        'assets/img/habitaciones/habitacion-simple3.webp',
        'assets/img/habitaciones/habitacion-simple4.webp',
        'assets/img/habitaciones/habitacion-simple5.webp',
      ]
    },
    {
      nombre: 'tarifas.doble.nombre',
      precio: 60,
      descripcion: 'tarifas.doble.descripcion',
      beneficios: [
        'tarifas.doble.beneficios.0',
        'tarifas.doble.beneficios.1',
        'tarifas.doble.beneficios.2',
        'tarifas.doble.beneficios.3',
        'tarifas.doble.beneficios.4',
        'tarifas.doble.beneficios.5',
        'tarifas.doble.beneficios.6'
      ],
      imagenes: [
        'assets/img/habitaciones/habitacion-doble1.webp',
        'assets/img/habitaciones/habitacion-doble2.webp',
        'assets/img/habitaciones/habitacion-doble3.webp',
        'assets/img/habitaciones/habitacion-doble4.webp',
        'assets/img/habitaciones/habitacion-doble5.webp',
      ]
    },
    {
      nombre: 'tarifas.ejecutiva.nombre',
      precio: 70,
      descripcion: 'tarifas.ejecutiva.descripcion',
      beneficios: [
        'tarifas.ejecutiva.beneficios.0',
        'tarifas.ejecutiva.beneficios.1',
        'tarifas.ejecutiva.beneficios.2',
        'tarifas.ejecutiva.beneficios.3',
        'tarifas.ejecutiva.beneficios.4',
        'tarifas.ejecutiva.beneficios.5',
        'tarifas.ejecutiva.beneficios.6'
      ],
      imagenes: [
        'assets/img/habitaciones/habitacion-ejecutiva1.webp',
        'assets/img/habitaciones/habitacion-ejecutiva2.webp',
        'assets/img/habitaciones/habitacion-ejecutiva3.webp',
        'assets/img/habitaciones/habitacion-ejecutiva4.webp',
        'assets/img/habitaciones/habitacion-ejecutiva5.webp',
      ]
    }
  ];


  reviews = [
    {
      nombre: 'Juan Pérez',
      fecha: 'Hace 2 semanas',
      estrellas: 5,
      comentario: 'La habitación estaba impecable, el servicio muy atento y la ubicación perfecta. ¡Recomendado!',
      foto: 'assets/img/comentarios/usuario-1.jpg'
    },
    {
      nombre: 'María López',
      fecha: 'Hace 1 mes',
      estrellas: 4,
      comentario: 'Muy buena experiencia, aunque el desayuno podría mejorar. El personal fue excelente.',
      foto: 'assets/img/comentarios/usuario-2.jpg'
    },
    {
      nombre: 'Carlos Fernández',
      fecha: 'Hace 3 meses',
      estrellas: 5,
      comentario: 'Me encantó todo, volveré sin duda alguna. La vista desde la habitación es increíble.',
      foto: 'assets/img/comentarios/usuario-3.jpg'
    },
    {
      nombre: 'Piero Salvador',
      fecha: 'Hace 3 meses',
      estrellas: 5,
      comentario: 'Me encantó todo, volveré sin duda alguna. La vista desde la habitación es increíble.',
      foto: 'assets/img/comentarios/usuario-4.jpg'
    }
    , {
      nombre: 'Luis Silva',
      fecha: 'Hace 3 meses',
      estrellas: 5,
      comentario: 'Me encantó todo, volveré sin duda alguna. La vista desde la habitación es increíble.',
      foto: 'assets/img/comentarios/usuario-5.jpg'
    }
  ];

  currentIndex = 0;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imagenes.length;

    }, 3000);

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
