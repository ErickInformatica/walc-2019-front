import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Conferencia } from '../../models/conferencia.model';
import { ConferenciaService } from '../../services/conferenica.service';
import * as jsPDF from 'jspdf';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conferencias',
  templateUrl: './conferencias.component.html',
  styleUrls: ['./conferencias.component.scss'],
  providers: [UserService, ConferenciaService]
})
export class ConferenciasComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  } 
}