import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConferenciasRoutingModule } from './conferencias-routing.module';
import { ConferenciasComponent } from './conferencias.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NavModule } from '../nav/nav.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ConferenciasComponent],
  imports: [
    CommonModule,
    ConferenciasRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxQRCodeModule,
    NavModule,
    NgbModule
  ],
  exports: [ConferenciasComponent]
})
export class ConferenciasModule { }
