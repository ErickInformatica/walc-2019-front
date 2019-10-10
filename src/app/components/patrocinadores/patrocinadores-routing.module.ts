import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatrocinadoresComponent } from './patrocinadores.component';

const routes: Routes = [{
  path:'',
  component: PatrocinadoresComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatrocinadoresRoutingModule { }
