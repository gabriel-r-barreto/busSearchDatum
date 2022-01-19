import { Component, OnInit } from '@angular/core';
import { OnibusService } from '../services/onibus.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listar-onibus',
  templateUrl: './listar-onibus.component.html',
  styleUrls: ['./listar-onibus.component.scss']
})
export class ListarOnibusComponent implements OnInit {
  bus: any;
  textFilter: any;
  p: number = 1;

  constructor(private busService: OnibusService) { }

  ngOnInit(): void {
    this.getBuslines();
  }
  getBuslines() {
    this.busService.getBusLines().subscribe(result => {
      this.bus = result
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
