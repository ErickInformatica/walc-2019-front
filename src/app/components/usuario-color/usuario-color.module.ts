import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioColorRoutingModule } from './usuario-color-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioColorComponent } from './usuario-color.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [UsuarioColorComponent],
  imports: [
    CommonModule,
    UsuarioColorRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ]
})
export class UsuarioColorModule { }
