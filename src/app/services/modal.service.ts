import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  // Estados de cada modal
  private modalFormState = new BehaviorSubject<boolean>(false);
  private modalRedesState = new BehaviorSubject<boolean>(false);

  // Observables públicos para que los modales se suscriban
  modalForm$ = this.modalFormState.asObservable();
  modalRedes$ = this.modalRedesState.asObservable();

  // Métodos para modal de formulario
  openReservaModal() {
    this.modalFormState.next(true);
  }

  closeReservaModal() {
    this.modalFormState.next(false);
  }

  // Métodos para modal de redes
  openRedesModal() {
    this.modalRedesState.next(true);
  }

  closeRedesModal() {
    this.modalRedesState.next(false);
  }
}
