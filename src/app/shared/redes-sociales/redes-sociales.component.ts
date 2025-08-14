import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit, OnDestroy {
  isOpen = false;
  private subscription!: Subscription;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    // Nos suscribimos al observable del modal
    this.subscription = this.modalService.modalRedes$.subscribe(
      (state) => this.isOpen = state
    );
  }

  ngOnDestroy() {
    // Evitar memory leaks
    this.subscription.unsubscribe();
  }

  close() {
    this.modalService.closeRedesModal();
  }
}
