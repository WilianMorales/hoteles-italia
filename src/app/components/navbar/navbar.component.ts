import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { ModalService } from '../../services/modal.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

type NavLink = { key: string; path?: string; action?: () => void };

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentLang: 'es' | 'en' = 'es';
  scrolled = false;
  menuOpen = false;
  activeLink = '';

  readonly links: NavLink[] = [
    { key: 'navbar.inicio', path: '/' },
    { key: 'navbar.habitaciones', path: '/habitaciones' },
    { key: 'navbar.turismo', path: '/turismo' },
    { key: 'navbar.contacto', path: '/contacto' },
    { key: 'navbar.redes', action: () => this.modalService.openRedesModal() },
  ];

  constructor(
    public translate: TranslateService,
    private modalService: ModalService,
    private router: Router
  ) {
    const savedLang = localStorage.getItem('lang') as 'es' | 'en';
    this.currentLang = savedLang || 'es';
  }

  ngOnInit() {
    // Detectar la ruta inicial y en cada navegación
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const currentPath = event.urlAfterRedirects;
        const found = this.links.find(link => link.path === currentPath);
        if (found) {
          this.activeLink = found.key;
        } else {
          this.activeLink = ''; // por si es una ruta sin coincidencia
        }
      });

    // Ejecutar una vez al iniciar para la ruta actual
    const currentPath = this.router.url;
    const found = this.links.find(link => link.path === currentPath);
    if (found) {
      this.activeLink = found.key;
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  changeLang(lang: 'es' | 'en') {
    this.currentLang = lang;
    this.translate.setLang(lang);
    localStorage.setItem('lang', lang);
  }


  handleLinkClick(link: NavLink) {
    this.activeLink = link.key;

    if (link.action) {
      link.action();
    } else if (link.path) {
      this.router.navigate([link.path]);
    }
  }
}
