import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.component.html',
  styleUrl: './turismo.component.css'
})
export class TurismoComponent {

  lugares = [
    {
      img : 'assets/img/ruta-papa/catedral-chiclayo.webp',
      titulo: 'turismo.lugar1Titulo',
      descripcion: 'turismo.lugar1Descripcion'
    },
    {
      img : 'assets/img/ruta-papa/palacio-municipal.webp',
      titulo: 'turismo.lugar2Titulo',
      descripcion: 'turismo.lugar2Descripcion'
    }
    ,
    {
      img : 'assets/img/ruta-papa/santuario-de-la-paz.webp',
      titulo: 'turismo.lugar3Titulo',
      descripcion: 'turismo.lugar3Descripcion'
    }
  ]

  constructor(public translate :  TranslateService, private title: Title, private meta: Meta){}

    ngOnInit() {
    this.title.setTitle('Turismo en Chiclayo y Lambayeque | Ruta del Papa');
    this.meta.updateTag({
      name: 'description',
      content: 'Descubre Chiclayo, el Señor de Sipán, las Pirámides de Túcume, Puerto de Pimentel y más atractivos turísticos de Lambayeque.'
    });
  }
}
