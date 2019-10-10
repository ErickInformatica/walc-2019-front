import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { NavModule } from '../nav/nav.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoggedComponent } from './logged.component';

@NgModule({
  declarations: [LoggedComponent],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    HttpClientModule,
    FormsModule,
    NavModule,
    NgbModule
  ],
  exports: [LoggedComponent]
})
export class LoggedModule { }
