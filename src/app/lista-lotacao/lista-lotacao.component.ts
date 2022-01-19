import { Component, OnInit } from '@angular/core';
import { OnibusService } from '../services/onibus.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-lotacao',
  templateUrl: './lista-lotacao.component.html',
  styleUrls: ['./lista-lotacao.component.scss']
})
export class ListaLotacaoComponent implements OnInit {
  lotacao: any;
  p: number = 1;

  constructor(private busService: OnibusService) { }

  ngOnInit(): void {
    this.getBuslines()
  }

  getBuslines() {
    this.busService.getLotacaoLines().subscribe(result => {
      this.lotacao = result
      Swal.fire(
        'Sucesso!',
        'Dados carregados!',
        'success'
      ) 
    }, error => {
      console.log(error.error.text);
      Swal.fire(
        'Erro!',
        error.error.text,
        'error'
      )
    })
  }

}
