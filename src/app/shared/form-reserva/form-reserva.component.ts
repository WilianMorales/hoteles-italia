import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faConciergeBell, faMailBulk, faPhone, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '../../services/translate.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.css']
})
export class FormReservaComponent implements OnInit, OnDestroy {

  showModal = false; // Ahora lo controlamos desde ModalService

  iconCal = faCalendarAlt;
  iconBell = faConciergeBell;

  sedes = [
    { id: '1', value: '7 de Enero' },
    { id: '2', value: 'Arica' },
  ];

  tarifas = [
    { id: '1', value: 'tarifas.simple.nombre', precio: 40 },
    { id: '2', value: 'tarifas.doble.nombre', precio: 60 },
    { id: '3', value: 'tarifas.ejecutiva.nombre', precio: 70 },
  ];

  personalFields = [
    { label: 'Nombre', type: 'text', placeholder: 'Ingresa tu nombre', icon: faUserTie },
    { label: 'Cantidad de personas', type: 'number', placeholder: 'Ej: 2', icon: faUsers },
    { label: 'Email', type: 'email', placeholder: 'correo@ejemplo.com', icon: faMailBulk },
    { label: 'Teléfono', type: 'tel', placeholder: '+51 999 999 999', icon: faPhone }
  ];

  checkInDate: string | null = null;
  checkOutDate: string | null = null;

  private subscription!: Subscription;

  constructor(
    public translate: TranslateService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.subscription = this.modalService.modalForm$.subscribe(state => {
      this.showModal = state;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  closeModal() {
    this.modalService.closeReservaModal();
  }
}
