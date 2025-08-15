import { Component } from '@angular/core';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot,faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '../../services/translate.service';
import { ModalService } from '../../services/modal.service';
import { Router } from '@angular/router';

type NavLink = { key: string; path?: string; action?: () => void };
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  readonly links: NavLink[] = [
    { key: 'navbar.inicio', path: '/' },
    { key: 'navbar.habitaciones', path: '/habitaciones' },
    { key: 'navbar.turismo', path: '/turismo' },
    { key: 'navbar.contacto', path: '/contacto' },
    { key: 'navbar.redes', action: () => this.modalService.openRedesModal() },
  ];

  iconFb = faFacebook;
  iconGm = faGoogle;
  iconLocation = faLocationDot;
  iconAddress = faMapLocationDot;
  iconPhone = faPhone;

  currentYear = new Date().getFullYear();

  constructor(public translate: TranslateService, private modalService: ModalService, private router: Router) {}

    handleLinkClick(link: NavLink) {

    if (link.action) {
      link.action();
    } else if (link.path) {
      this.router.navigate([link.path]);
    }
  }

}
