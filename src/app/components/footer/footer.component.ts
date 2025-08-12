import { Component } from '@angular/core';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot,faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
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
    { key: 'navbar.turismo', path: '/turismo' },
    { key: 'navbar.contacto', path: '/contacto' },
    { key: 'navbar.redes', path: '' }
  ];

  iconFb = faFacebook;
  iconGm = faGoogle;
  iconLocation = faLocationDot;
  iconAddress = faMapLocationDot;
  iconPhone = faPhone;

  currentYear = new Date().getFullYear();

  constructor(public translate: TranslateService) {}

}
