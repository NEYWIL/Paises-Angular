import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino: string='';
  hayError:boolean=false;
  paises:Country[]=[];

  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;

    this.paisService.buscarCapital(this.termino)
    .subscribe((capital)=>{
      this.paises=capital;

    },
    (err)=>{
      this.hayError=true;
      this.paises=[];
    })
  }

  sugerencias(termino:string){
    this.hayError=false;
  }
  constructor(private paisService:PaisService) { }



}
