import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueieneSomosRoutingModule } from './queiene-somos-routing.module';
import { QueieneSomosComponent } from './queiene-somos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
@NgModule({
  declarations: [QueieneSomosComponent],
  imports: [
    CommonModule,
    QueieneSomosRoutingModule,
    NgbModule,
    LeafletModule.forRoot()
  ],
  exports: [QueieneSomosComponent]
})
export class QueieneSomosModule { }
