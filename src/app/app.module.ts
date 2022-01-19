import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarOnibusComponent } from './listar-onibus/listar-onibus.component';
import { ListaLotacaoComponent } from './lista-lotacao/lista-lotacao.component';
import { HttpClientModule } from '@angular/common/http';
import { ItinerarioComponent } from './itinerario/itinerario.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListarOnibusComponent,
    ListaLotacaoComponent,
    ItinerarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
