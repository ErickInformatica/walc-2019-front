import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedComponent } from './logged.component';
import { LogeedGuard } from '../../services/logged.guard';

const routes: Routes = [
  {
    path: '',
    component: LoggedComponent,
    canActivate: [LogeedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
