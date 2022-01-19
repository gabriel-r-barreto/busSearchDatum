import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItinerarioComponent } from './itinerario/itinerario.component';
import { ListaLotacaoComponent } from './lista-lotacao/lista-lotacao.component';
import { ListarOnibusComponent } from './listar-onibus/listar-onibus.component';

const routes: Routes = [
  { path: '', component: ListarOnibusComponent },
  { path: 'onibus', component: ListarOnibusComponent },
  { path: 'lotacao', component: ListaLotacaoComponent },
  { path: 'itinerario', component: ItinerarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
