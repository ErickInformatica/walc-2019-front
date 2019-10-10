import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { LogeedGuard } from '../../services/logged.guard';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    canActivate: [LogeedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
