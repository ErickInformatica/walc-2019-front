import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntecedentesRoutingModule } from './antecedentes-routing.module';
import { AntecedentesComponent } from './antecedentes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NavModule } from '../nav/nav.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [AntecedentesComponent],
  imports: [
    CommonModule,
    AntecedentesRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxQRCodeModule,
    NavModule,
    NgbModule
  ],
  exports: [AntecedentesComponent]
})
export class AntecedentesModule { }
