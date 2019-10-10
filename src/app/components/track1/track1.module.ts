import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Track1RoutingModule } from './track1-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Track1Component } from './track1.component';
@NgModule({
  declarations: [Track1Component],
  imports: [
    CommonModule,
    Track1RoutingModule,
    NgbModule
  ],
  exports: [Track1Component]
})
export class Track1Module { }
