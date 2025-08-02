import { Component, HostListener } from '@angular/core';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  scrolled = false;
  menuOpen = false;

  currentLang: 'es' | 'en' = 'es';

  constructor(public translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') as 'es' | 'en';
    this.currentLang = savedLang || 'es';
  }

  links = [
    { key: 'navbar.inicio', path: '/' },
    { key: 'navbar.habitaciones', path: '/habitaciones' },
    { key: 'navbar.tarifas', path: '/tarifas' },
    { key: 'navbar.servicios', path: '/servicios' },
    { key: 'navbar.ubicanos', path: '/ubicanos' },
    { key: 'navbar.contacto', path: '/contacto' }
  ];

  changeLang(lang: 'es' | 'en') {
    this.currentLang = lang;
    this.translate.setLang(lang);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

}
