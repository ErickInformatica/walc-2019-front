import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioColorComponent } from './usuario-color.component';
import { LogeedGuard } from '../../services/logged.guard';

const routes: Routes = [{
  path: '',
  component: UsuarioColorComponent,
  canActivate: [LogeedGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioColorRoutingModule { }
