import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstalacionesRoutingModule } from './instalaciones-routing.module';
import { InstalacionesComponent } from './instalaciones.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [InstalacionesComponent],
  imports: [
    CommonModule,
    InstalacionesRoutingModule,
    NgbModule
  ],
  exports: [InstalacionesComponent]
})
export class InstalacionesModule { }
