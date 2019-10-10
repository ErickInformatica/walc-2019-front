import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomelogComponent } from './homelog.component';
import { LoginGuard } from '../../services/login.guard';
import { LogeedGuard } from '../../services/logged.guard';

const routes: Routes = [
  {
    path: '',
    component: HomelogComponent,
    canActivate: [LogeedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomelogRoutingModule { }
