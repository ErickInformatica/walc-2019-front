import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoEventoRoutingModule } from './info-evento-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoEventoComponent } from './info-evento.component';
@NgModule({
  declarations: [InfoEventoComponent],
  imports: [
    CommonModule,
    InfoEventoRoutingModule,
    NgbModule
  ],
  exports: [InfoEventoComponent]
})
export class InfoEventoModule { }
