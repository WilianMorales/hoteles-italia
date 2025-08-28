import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faConciergeBell, faMailBulk, faPhone, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '../../services/translate.service';
import { ModalService } from '../../services/modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.css']
})
export class FormReservaComponent implements OnInit {

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
    { key: 'name', label: 'Nombre', type: 'text', placeholder: 'Juan Peréz', icon: faUserTie },
    { key: 'email', label: 'Email', type: 'email', placeholder: 'mail@mail.com', icon: faMailBulk },
    { key: 'person', label: 'Cantidad de personas', type: 'number', placeholder: 'Ej: 2', icon: faUsers },
    { key: 'telf', label: 'Teléfono', type: 'tel', placeholder: '+51 999 999 999', icon: faPhone }
  ];

  checkInDate: string | null = null;
  checkOutDate: string | null = null;

  reservaForm!: FormGroup;

  private subscription!: Subscription;

  constructor(public translate: TranslateService, private modalService: ModalService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();

  }

  initForm() {
    this.reservaForm = this.fb.group({
      sede: [null, Validators.required],             // Radio buttons para Sede
      tarifa: [null, Validators.required],           // Radio buttons para Tipo de habitación
      checkInDate: [null, Validators.required],      // Fecha Check-In
      checkOutDate: [null, Validators.required],     // Fecha Check-Out
      name: ['', Validators.required],             // Campo Nombre
      person: [1, [Validators.required, Validators.min(1)]], // Número mínimo 1
      email: ['', [Validators.required, Validators.email]],             // Validación email
      telf: ['', Validators.required]            // Campo teléfono
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    if (this.reservaForm.valid) {
      // Obtenemos el valor seleccionado
      const selectedTarifa = this.reservaForm.value.tarifa;

      // Mapear a código interno
      let tarifaCodigo: string;
      switch (selectedTarifa) {
        case 'tarifas.simple.nombre':
          tarifaCodigo = "Simple";
          break;
        case 'tarifas.doble.nombre':
          tarifaCodigo = "Doble";
          break;
        case 'tarifas.ejecutiva.nombre':
          tarifaCodigo = "Ejecutiva";
          break;
        default:
          tarifaCodigo = ''; // o manejar error
      }
      // Creamos el JSON final que vamos a enviar
      const payload = {
        ...this.reservaForm.value,
        tarifa: tarifaCodigo
      };

      console.log('Formulario válido, datos a enviar:', payload);

      // Aquí iría la llamada al backend
      // this.reservaService.enviarReserva(payload).subscribe(...)
    } else {
      console.log('Formulario inválido');
      this.reservaForm.markAllAsTouched();
    }
  }

  // Método que se ejecuta al enviar el formulario
  // onSubmit() {
  //   if (this.reservaForm.valid) {
  //     console.log('Formulario válido, datos:', this.reservaForm.value);
  //     // Aquí enviarías los datos a tu backend o servicio
  //   } else {
  //     console.log('Formulario inválido');
  //     this.reservaForm.markAllAsTouched(); // Marca todos los campos para mostrar errores
  //   }
  // }

}
