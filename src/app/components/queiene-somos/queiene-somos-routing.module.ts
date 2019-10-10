import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueieneSomosComponent } from './queiene-somos.component';

const routes: Routes = [
  {
    path: '',
    component: QueieneSomosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueieneSomosRoutingModule { }
