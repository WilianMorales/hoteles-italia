import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Subscription } from 'rxjs';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit, OnDestroy {

  isOpen = false;
  private subscription!: Subscription;

  iconIg = faInstagram;
  iconFb = faFacebook;
  iconTrip = faBook;
  iconWsp = faWhatsapp;

  socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/mauriciovereau.dev',
      icon: this.iconIg,
      gradient: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
      desc: 'redes.instagram'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: this.iconFb,
      gradient: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), linear-gradient(45deg,#1877f2,#3b5998)',
      desc: 'redes.facebook'
    },
    {
      name: 'Booking',
      url: 'https://booking.com',
      icon: this.iconTrip,
      gradient: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), linear-gradient(45deg,#003580,#0059b3,#0071c2,#feba02)',
      desc: 'redes.booking'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/51999999999',
      icon: this.iconWsp,
      gradient: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), linear-gradient(45deg,#25D366,#128C7E)',
      desc: 'redes.whatsapp'
    }
  ];

  constructor(private modalService: ModalService, public translate: TranslateService) {}

  ngOnInit() {
    // Nos suscribimos al observable del modal
    this.subscription = this.modalService.modalRedes$.subscribe(
      (state) => this.isOpen = state
    );
  }

  ngOnDestroy() {
    // Evitar memory leaks
    this.subscription.unsubscribe();
  }

  close() {
    this.modalService.closeRedesModal();
  }
}
