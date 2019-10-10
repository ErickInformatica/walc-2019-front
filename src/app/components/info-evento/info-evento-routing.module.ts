import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoEventoComponent } from './info-evento.component';

const routes: Routes = [
  {
    path: '',
    component: InfoEventoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoEventoRoutingModule { }
