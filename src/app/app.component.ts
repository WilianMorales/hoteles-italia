import { Component } from '@angular/core';
import '@tailwindplus/elements';
import { ModalService } from './services/modal.service';
import { faConciergeBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hoteles Italia';
  iconBell = faConciergeBell;

  constructor(private modalService : ModalService){}

  openModalForm() {
    this.modalService.openReservaModal();
  }

}
