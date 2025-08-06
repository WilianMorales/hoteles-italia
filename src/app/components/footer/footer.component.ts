import { Component } from '@angular/core';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faAddressCard, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faLocation, faLocationArrow, faLocationCrosshairs, faLocationDot, faLocationPin, faLocationPinLock, faMailBulk, faMailForward, faMapLocation, faMapLocationDot, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  links = [
    { key: 'navbar.inicio', path: '/' },
    { key: 'navbar.habitaciones', path: '/habitaciones' },
    // { key: 'navbar.tarifas', path: '/tarifas' },
    // { key: 'navbar.servicios', path: '/servicios' },
    // { key: 'navbar.ubicanos', path: '/ubicanos' },
    { key: 'navbar.contacto', path: '/contacto' }
  ];

  iconFb = faFacebook;
  iconGm = faGoogle;
  iconLocation = faLocationDot;
  iconAddress = faMapLocationDot;
  iconPhone = faPhone;

  currentYear = new Date().getFullYear();

  constructor(public translate: TranslateService) {}

}
