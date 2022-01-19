import { Component, OnInit } from '@angular/core';
import { OnibusService } from '../services/onibus.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.scss']
})
export class ItinerarioComponent implements OnInit {
  itinerario: any;
  idLinha: any;
  p: number = 1;

  constructor(private busService: OnibusService) { }

  ngOnInit(): void {
  }


  obterNumero(event: any) {
    this.getBuslines(event.target.value);
  }

  getBuslines(idLinha: any) {
    let number = parseInt(idLinha);
    this.busService.getItinerario(number).subscribe(result => {
      let obj = result
      this.itinerario = Object.keys(obj).map(function (key) { return obj; });
      Swal.fire(
        'Sucesso!',
        'Dados carregados!',
        'success'
      ) 
    })
  }


  redirect(item: any) {
    window.location.href = 'https://www.google.com/maps/?q=' + item.lat + ',' + item.lng;
  }


  loading(){
  
  }

}
