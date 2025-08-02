import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  images = [
    { src: 'assets/img/recepcion-7enero.jpg', alt: 'Imagen 1' },
    { src: 'assets/img/personal-calificado.jpg', alt: 'Imagen 2' },
    { src: 'assets/img/recepcion-arica.jpg', alt: 'Imagen 3' }
  ]

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
