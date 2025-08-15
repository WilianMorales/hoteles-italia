import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faHotel, faLocationDot, faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'Hotel Italia';

  iconStart = faStar;

  iconWsp = faWhatsapp;

  iconLocation = faLocationDot;

   images = [
    { src: 'assets/img/inicio/recepcion-arica1.webp', alt: 'Imagen 1' },
    { src: 'assets/img/inicio/recepcion-arica2.webp', alt: 'Imagen 2' },
    { src: 'assets/img/inicio/recepcion-7enero1.webp', alt: 'Imagen 3' },
    { src: 'assets/img/inicio/recepcion-7enero2.webp', alt: 'Imagen 4' },
  ]

    // servicios = [
    //   { nombre: 'serviceRoom.service1', icono: faWifi },
    //   { nombre: 'serviceRoom.service2', icono: faTv },
    //   { nombre: 'serviceRoom.service3', icono: faBroom },
    //   { nombre: 'serviceRoom.service4', icono: faShower },
    //   { nombre: 'serviceRoom.service5', icono: faDroplet },
    //   { nombre: 'serviceRoom.service6', icono: faFan },
    //   { nombre: 'serviceRoom.service7', icono: faHeadset },
    //   { nombre: 'serviceRoom.service8', icono: faUserShield }
    // ];

  currentImageIndex = 0;
  intervalId: any;

  constructor(public translate: TranslateService) { }

  ngOnInit(){
    this.intervalId = setInterval( ()=> {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 3000)
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
