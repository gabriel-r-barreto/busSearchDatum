import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarOnibusComponent } from './listar-onibus/listar-onibus.component';

const routes: Routes = [{path: '', component: ListarOnibusComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
