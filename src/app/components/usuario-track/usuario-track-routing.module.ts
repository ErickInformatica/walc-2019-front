import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioTrackComponent } from './usuario-track.component';
import { LogeedGuard } from '../../services/logged.guard';

const routes: Routes = [{
  path: '',
  component: UsuarioTrackComponent,
  canActivate: [LogeedGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioTrackRoutingModule { }
