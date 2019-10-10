import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Track1Component } from './track1.component';

const routes: Routes = [{
  path: '',
  component: Track1Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Track1RoutingModule { }
