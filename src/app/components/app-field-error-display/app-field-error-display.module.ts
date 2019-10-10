import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppFieldErrorDisplayComponent } from './app-field-error-display.component';
@NgModule({
  declarations: [AppFieldErrorDisplayComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  exports: [AppFieldErrorDisplayComponent]
})
export class AppFieldErrorDisplayModule { }
