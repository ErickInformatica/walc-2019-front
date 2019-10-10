import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioTrackRoutingModule } from './usuario-track-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavModule } from '../nav/nav.module';
import { UsuarioTrackComponent } from './usuario-track.component';

@NgModule({
  declarations: [UsuarioTrackComponent],
  imports: [
    CommonModule,
    UsuarioTrackRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NavModule
  ]
})
export class UsuarioTrackModule { }
