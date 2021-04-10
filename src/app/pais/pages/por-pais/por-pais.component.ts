import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencia: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    //console.log(this.termino);
    //suscribe para que se ejecute
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        //console.log(resp);
        this.paises = paises;
        console.log(paises);
      },
      (err) => {
        //console.log(err);
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia=true;
    //todo: crear sugerencias

    this.paisService.buscarPais(termino).subscribe(
      paises => this.paisesSugeridos = paises.splice(0, 5),
      (err) => this.paisesSugeridos = []
    );
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);

  }
}
