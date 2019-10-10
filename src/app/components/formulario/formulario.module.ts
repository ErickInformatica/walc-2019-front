import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NavModule } from '../nav/nav.module';
import { AppFieldErrorDisplayModule } from '../app-field-error-display/app-field-error-display.module';

@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NavModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AppFieldErrorDisplayModule
  ]
})
export class FormularioModule { }
