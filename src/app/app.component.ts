import { Component } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '@tailwindplus/elements';
import { ModalService } from './services/modal.service';
import { faBell } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hoteles Italia';

  iconBell = faBell;

  constructor(private modalService : ModalService){}

  openModalForm() {
    this.modalService.openReservaModal();
  }

}
