import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatrocinadoresRoutingModule } from './patrocinadores-routing.module';
import { PatrocinadoresComponent } from './patrocinadores.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavModule } from '../nav/nav.module';

@NgModule({
  declarations: [PatrocinadoresComponent],
  imports: [
    CommonModule,
    PatrocinadoresRoutingModule,
    HttpClientModule,
    FormsModule,
    NavModule
  ]
})
export class PatrocinadoresModule { }
