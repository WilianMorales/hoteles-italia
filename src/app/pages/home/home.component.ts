import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { faBath, faBroom, faCircleInfo, faConciergeBell, faDroplet, faFan, faHeadset, faLocationDot, faPhone, faShower, faStar, faSuitcase, faTint, faTv, faUserShield, faVideo, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'Hotel Italia';

  iconStart = faStar;
  iconInfo = faCircleInfo
  iconWsp = faWhatsapp;
  iconTelf = faPhone;
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

    services = [
    { icon: faWifi, titleKey: 'home.wifi', descriptionKey: 'home.wifiDesc' },
    { icon: faBath, titleKey: 'home.bath', descriptionKey: 'home.bathDesc' },
    { icon: faTint, titleKey: 'home.water', descriptionKey: 'home.waterDesc' },
    { icon: faFan, titleKey: 'home.fan', descriptionKey: 'home.fanDesc' },
    { icon: faBroom, titleKey: 'home.cleaning', descriptionKey: 'home.cleaningDesc' },
    { icon: faVideo, titleKey: 'home.security', descriptionKey: 'home.securityDesc' },
    { icon: faConciergeBell, titleKey: 'home.reception', descriptionKey: 'home.receptionDesc' },
    { icon: faSuitcase, titleKey: 'home.luggage', descriptionKey: 'home.luggageDesc' }
  ];

  currentImageIndex = 0;
  intervalId: any;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 3000)
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
