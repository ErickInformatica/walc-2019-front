import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConferenciasComponent } from './conferencias.component';

const routes: Routes = [{
  path: '',
  component: ConferenciasComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConferenciasRoutingModule { }
