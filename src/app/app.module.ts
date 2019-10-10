import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './components/nav/nav.module';
import { LoginGuard } from './services/login.guard';
import { FooterModule } from './components/footer/footer.module';
import { LogeedGuard } from './services/logged.guard';
import { LoggedComponent } from './components/logged/logged.component';
import { QueieneSomosComponent } from './components/queiene-somos/queiene-somos.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppFieldErrorDisplayComponent } from './components/app-field-error-display/app-field-error-display.component';
import { InfoEventoComponent } from './components/info-evento/info-evento.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxQRCodeModule,
    NavModule,
    FooterModule,
    NgbModule,
    LeafletModule.forRoot(),
    ReactiveFormsModule 
  ],
  providers: [LoginGuard, LogeedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
