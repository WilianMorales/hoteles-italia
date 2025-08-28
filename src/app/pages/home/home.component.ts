import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { faBath, faBroom, faCircleInfo, faConciergeBell, faFan, faLocationDot, faPhone, faStar, faSuitcase, faTint, faVideo, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
