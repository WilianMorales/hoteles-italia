import { Component, HostListener } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { faConciergeBell, faMailBulk, faPhone, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  iconCal = faCalendarAlt;
  iconBell = faConciergeBell;

  currentLang: 'es' | 'en' = 'es';

  scrolled = false;
  menuOpen = false;

  showModal = false;

  checkInDate: string | null = null;
  checkOutDate: string | null = null;

  personalFields = [
    { label: 'Nombre', type: 'text', placeholder: 'Ingresa tu nombre', icon: faUserTie },
    { label: 'Cantidad de personas', type: 'number', placeholder: 'Ej: 2', icon: faUsers },
    { label: 'Email', type: 'email', placeholder: 'correo@ejemplo.com', icon: faMailBulk },
    { label: 'Teléfono', type: 'tel', placeholder: '+51 999 999 999', icon: faPhone }
  ];

  links = [
    { key: 'navbar.inicio', path: '/' },
    { key: 'navbar.habitaciones', path: '/habitaciones' },
    { key: 'navbar.turismo', path: '/turismo' },
    { key: 'navbar.contacto', path: '/contacto' },
    { key: 'navbar.redes', path: '' }
  ];


  sedes = [
    { id: '1', value: '7 de Enero' },
    { id: '2', value: 'Arica' },
  ]

  tarifas = [
    { id: '1', value: 'tarifas.simple.nombre', precio: 40 },
    { id: '2', value: 'tarifas.doble.nombre', precio: 60 },
    { id: '3', value: 'tarifas.ejecutiva.nombre', precio: 70 },
  ]

  constructor(public translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') as 'es' | 'en';
    this.currentLang = savedLang || 'es';
  }

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

  mostrarModal() {
    this.showModal = true;

  }

  closeModal() {
    this.showModal = false;
  }

}
