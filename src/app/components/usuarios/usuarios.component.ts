import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { User } from '../../models/user.model';
import { GLOBAL } from '../../services/global.service';
import { ConferenciaService } from '../../services/conferenica.service';
import { filter } from 'rxjs/operators';
import { stringify } from '@angular/core/src/render3/util';
import { ExcelService } from '../../services/excel.service';
import * as XLSX from 'xlsx';
import { TNODE } from '@angular/core/src/render3/interfaces/injector';
declare var $: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UserService, ConferenciaService, ExcelService]
})
export class UsuariosComponent implements OnInit {
  @ViewChild('TABLE') table: ElementRef;
  public users: User;
  public userEdit: User;
  public userEditSaldo: User;
  public status: string;
  public identity;
  public token;
  public url;
  public conferencias = new Array()
  public idCharla
  public charlas = new Array()
  public userPreInscritos = []
  public usersInteresados = []
  public usersInscritos =[]
  public usersExcel = []
  public tableOculta =false
  public aray = new Array();
  public aray2Interesados = new Array();
  public aray2PreInscritos = new Array();
  public aray2Inscritos = new Array();
  public isButtonVisible = false;
  public isChecked
  constructor(private _userService: UserService, public _conferenciaService: ConferenciaService, public excelService:ExcelService) {
    this.userEdit = new User('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
    , '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
    , '', '', '', '', '', '', '', '', '', '', '', '', '', '','','')
    this.userEditSaldo = new User('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
    , '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
    , '', '', '', '', '', '', '', '', '', '', '', '', '', '','','')
    this.url = GLOBAL.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
   this.allLists()
   $('.dr').dropdown()   
  }

  searchInteresados(e){
    $(document).ready(function(){
      $('#txt_searchall').on('keyup', function() {
        var value = $(this).val();
        var patt = new RegExp(value, "i");
      
        $('#tableInt').find('tr').each(function() {
          if (!($(this).find('td').text().search(patt) >= 0)) {
            $(this).not('.myHeadInt').hide();
          }
          if (($(this).find('td').text().search(patt) >= 0)) {
            $(this).show();
          }
        });
      
      });
     })
  }
  searchPreInscritos(e){
    $(document).ready(function(){
      $('#txt_searchallPre').on('keyup', function() {
        var value = $(this).val();
        var patt = new RegExp(value, "i");
      
        $('#tablePre').find('tr').each(function() {
          if (!($(this).find('td').text().search(patt) >= 0)) {
            $(this).not('.myHeadPre').hide();
          }
          if (($(this).find('td').text().search(patt) >= 0)) {
            $(this).show();
          }
        });
      
      });
     })
  }
  searchInscritos(e){
    $(document).ready(function(){
      $('#txt_searchallIns').on('keyup', function() {
        var value = $(this).val();
        var patt = new RegExp(value, "i");
      
        $('#tableIns').find('tr').each(function() {
          if (!($(this).find('td').text().search(patt) >= 0)) {
            $(this).not('.myHeadIns').hide();
          }
          if (($(this).find('td').text().search(patt) >= 0)) {
            $(this).show();
          }
        });
      
      });
     })
  }

  checkValue(event: any){
    this.isButtonVisible = !this.isButtonVisible
    console.log(event, this.isButtonVisible);
 }

  editSaldo(id, saldo){
    console.log(+saldo);
    
    this._userService.getUser(this.token, id).subscribe(
      response => {
        if (response.user) {
          this.userEditSaldo = response.user
          this.userEditSaldo.saldo = saldo
          this.status = 'OK';
        }
        this._userService.editSaldo(this.userEditSaldo).subscribe(
          response=>{
            console.log(this.userEditSaldo);
            
            console.log(response.message);
            this.allLists()
          }
        )
        
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'error'
        }
      }
    )
    
    
    
  }

  updateUser(id){
    this._userService.updateUser(id, this.userEdit).subscribe(
      response=>{
        this.allLists()
        console.log(response);
        Swal.fire({
          position: 'top-end',
          title: 'Usuario Actualizado',
          showConfirmButton: false,
          imageUrl: 'https://imagenes-walc2019.s3.amazonaws.com/logo-walc.png',
          imageWidth: 100,
          imageHeight: 45,
          imageAlt: 'Custom image',
          animation: false,
          timer: 1500
        })
      }
    )
  }

  allLists(){
    this.listUsersInteresados()
    this.listUsersPreInscritos()
    this.listUsersInscritos()
    this.misConferencias()
    this.listallUsers()
  }

  exportAsXLSX(){
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'usuarios');

    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');
 }
 listallUsers(){
  this._userService.getUsers(this.token).subscribe(
    response=>{
      this.usersExcel = response.usuarios
      console.log(this.usersExcel);
      
    }
  )
 }

  // listarTodo() {
  //   this._conferenciaService.listarTodo().subscribe(
  //     response => {
  //       // listar por interesados
  //       var interesadosCharla = []
  //       // var pruebas = response.charlas.filter(c => c.interesados.length > 0)
  //       for (let x = 0; x < response.charlas.length; x++) {
  //         if (response.charlas[x].interesados.length > 0) {
  //           interesadosCharla.push({ titulo: response.charlas[x].titulo, interesados: response.charlas[x].interesados })
  //         }
  //       }
  //       // listar por preInscritosPorCharla
  //       var preInscritosPorCharla = []
  //       // var pruebas = response.charlas.filter(c => c.interesados.length > 0)
  //       for (let x = 0; x < response.charlas.length; x++) {
  //         if (response.charlas[x].preinscritos.length > 0) {
  //           preInscritosPorCharla.push({ titulo: response.charlas[x].titulo, preinscritos: response.charlas[x].preinscritos })
  //         }
  //       }

  //       // listar por preInscritosPorCharla
  //       var InscritosPorCharla = []
  //       // var pruebas = response.charlas.filter(c => c.interesados.length > 0)
  //       for (let x = 0; x < response.charlas.length; x++) {
  //         if (response.charlas[x].inscritos.length > 0) {
  //           InscritosPorCharla.push({ titulo: response.charlas[x].titulo, inscritos: response.charlas[x].inscritos })
  //         }
  //       }
        
  //       console.log(interesadosCharla);
  //       console.log(preInscritosPorCharla);
  //       console.log(InscritosPorCharla);
        
        
        
  //     }
  //   )
  // }
  interesado() {
    var interesadoId
    if(this.userEdit.preinscrito == '5d408e36e7179a064faae9db'){
      interesadoId = this.userEdit.inscrito
    }
    if (this.userEdit.inscrito == '5d408e36e7179a064faae9db') {
      interesadoId = this.userEdit.preinscrito
    }
    this._conferenciaService.interesados(this.token, this.userEdit, interesadoId).subscribe(
      response => {
        console.log(response);
        this.listUsersInteresados()
        this.listUsersPreInscritos()
        this.listUsersInscritos()
        Swal.fire({
          position: 'top-end',
          title: `${response.message}`,
          showConfirmButton: false,
          imageUrl: 'https://imagenes-walc2019.s3.amazonaws.com/logo-walc.png',
          imageWidth: 100,
          imageHeight: 45,
          imageAlt: 'Custom image',
          animation: false,
          timer: 1500
        })
      }
    )
  }

  preInscribir() {
    var preinscrito = this.userEdit.interesado
    console.log(preinscrito); 
    this._conferenciaService.preinscripcion(this.token, this.userEdit, preinscrito).subscribe(
      response => {
        this.listUsersInteresados()
        this.listUsersPreInscritos()
        this.listUsersInscritos()
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: `${response.message}`,
          showConfirmButton: false,
          imageUrl: 'https://imagenes-walc2019.s3.amazonaws.com/logo-walc.png',
          imageWidth: 100,
          imageHeight: 45,
          imageAlt: 'Custom image',
          animation: false,
          timer: 1500
        })
      }
    )
  }

  Inscribir() {
    var inscrito = this.userEdit.preinscrito
    this._conferenciaService.inscripcion(this.token, this.userEdit, inscrito).subscribe(
      response => {
        this.listUsersInteresados()
        this.listUsersPreInscritos()
        this.listUsersInscritos()
      }
    )
  }

  onKeyInteresados({target:{value}}) {
    this.usersInteresados = this.aray2Interesados.filter(v => v.primerNombre.toLowerCase().indexOf(value.toLowerCase()) > -1).slice(0, 10);
  }
  onKeyPreinscritos({target:{value}}) {
    this.userPreInscritos = this.aray2PreInscritos.filter(v => v.primerNombre.toLowerCase().indexOf(value.toLowerCase()) > -1).slice(0, 10);
  }
  onKeyInscritos({target:{value}}) {
    this.usersInscritos = this.aray2Inscritos.filter(v => v.primerNombre.toLowerCase().indexOf(value.toLowerCase()) > -1).slice(0, 10);
  }

  misConferencias() {
    this._userService.getMisConferencias().subscribe(
      response => {
        // si esta interesado
        if (response && response.interesados) {
          this.conferencias = response.interesados;    
            this.idCharla = response.interesados._id
          
        }
        // si esta preinscrito
        if (response && response.preinscritos) {
          this.conferencias = response.preinscritos;
            this.idCharla = response.preinscritos._id
          
        }
        // si esta inscrito
        if (response && response.inscritos) {
          this.conferencias = response.inscritos;
            this.idCharla = response.inscritos._id
          
        }


      }
    )
  }

  buscarConferencia(id){
    this._conferenciaService.buscarConferencia(id).subscribe(
      response=>{
        return response.titulo
        
      }
    )
  }


  
  public listUsersInteresados() {
    this._userService.getUsers(this.token).subscribe(
      response => {        
        console.log(response);
        
        var idPreinscripcion: String = '5d408e36e7179a064faae9db'
        if (response.usuarios) {    
          for( var i = 0; i < response.usuarios.length; i++){ 
            var filtered = response.usuarios.filter(function(element) {
              return element.interesado._id !== "5d408e36e7179a064faae9db";
          });
          
          }
          this.aray2Interesados = filtered;
          this.usersInteresados = this.aray2Interesados;
          this.status = 'OK'
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          Swal.fire(errorMessage)
          this.status = 'error'
        }
      }
    )
  }
  public listUsersPreInscritos() {
    this._userService.getUsers(this.token).subscribe(
      response => {
       
        var idPreinscripcion: String = '5d408e36e7179a064faae9db'
        if (response.usuarios) {    
          for( var i = 0; i < response.usuarios.length; i++){ 
            var a =response.usuarios.indexOf(idPreinscripcion);
            var filtered = response.usuarios.filter(function(element) {
              return element.preinscrito._id !== "5d408e36e7179a064faae9db";
          });
          
          }
          this.status = 'OK'
        }
        this.aray2PreInscritos = filtered;
          this.userPreInscritos = this.aray2PreInscritos;
        
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          Swal.fire(errorMessage)
          this.status = 'error'
        }
      }
    )
  }
  public listUsersInscritos() {
    this._userService.getUsers(this.token).subscribe(
      response => {
        var idPreinscripcion: String = '5d408e36e7179a064faae9db'
        if (response.usuarios) {    
          for( var i = 0; i < response.usuarios.length; i++){ 
            var a =response.usuarios.indexOf(idPreinscripcion);
            var filtered = response.usuarios.filter(function(element) {
              return element.inscrito._id !== "5d408e36e7179a064faae9db";
          });
          
          }
          this.aray2Inscritos = filtered;
          this.usersInscritos = this.aray2Inscritos; 
          this.status = 'OK'
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          Swal.fire(errorMessage)
          this.status = 'error'
        }
      }
    )
  }
  

  public getUser(id) {
    this._userService.getUser(this.token, id).subscribe(
      response => {
        if (response.user) {
          this.userEdit = response.user;
          this.userEditSaldo = response.user
          this.status = 'OK';
          console.log(response);
          
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'error'
        }
      }
    )
  }

}
