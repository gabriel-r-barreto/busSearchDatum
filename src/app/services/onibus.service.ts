import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnibusService {

  constructor(private http : HttpClient) { }




  getBusLines(){
    return this.http.get("http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o");
  }

  getLotacaoLines(){
    return this.http.get("http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=l");
  }

  getItinerario(idLinha: any){
    return this.http.get("http://www.poatransporte.com.br/php/facades/process.php?a=il&p="+ idLinha);
  }
}
