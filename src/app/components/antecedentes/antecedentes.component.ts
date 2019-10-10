import { Component, OnInit, ViewChild } from '@angular/core';
import { Antecedente } from '../../models/antecedente.model';
import { AntecedenteService } from '../../services/antecedente.service';
import * as jsPDF from 'jspdf';
import Swal from 'sweetalert2';
import { GLOBAL } from 'src/app/services/global.service';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-antecedentes',
  templateUrl: './antecedentes.component.html',
  styleUrls: ['./antecedentes.component.scss'],
  providers: [AntecedenteService, UploadService, UserService]
})
export class AntecedentesComponent implements OnInit {
  @ViewChild('timeConf') formValues;
  public antecedentes: Antecedente;
  public antecedenteModel: Antecedente;
  public antecedenteSeleccionada: Antecedente;
  public url;
  public identity;
  public token;
  public status;
  public admin: boolean = false;
  public loading: boolean;
  public usuarioPdf:boolean = false;
 

  constructor(private _antecedenteService: AntecedenteService, private _uploadService: UploadService,private _userService: UserService) {
    this.antecedenteModel = new Antecedente('','','','','');
    this.antecedenteSeleccionada = new Antecedente('','', '', '', '');
    this.url = GLOBAL.url;    
    this.identity = this._userService.getIdentity()
  }

  ngOnInit() {
    this.getAntecedentes()
    if(this.identity && this.identity.rol == 'ROLE_ADMIN'){
      this.admin = true;
    }
  }

  public getAntecedentes() {
    this._antecedenteService.getAntecedentes().subscribe(
      response => {
        
        if (response.antecedente) {
          console.log(response.antecedente);   
          this.antecedentes = response.antecedente;
          this.status = 'OK'
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

  public getAntecedente(id) {
    this._antecedenteService.getAntecedente(id).subscribe(
      response => {
        if (response.antecedente) {
          console.log(response.antecedente);
          this.antecedenteSeleccionada = response.antecedente;
          this.status = 'OK';
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

  public addAntecedente() {    
      this._antecedenteService.addAntecedente(this.antecedenteModel).subscribe(
        response => {
          console.log(response.antecedente)
          if (response.antecedente) {
            console.log(response.antecedente);                        
            this.getAntecedentes();
            this.status = 'Ok'
          } else {            
            console.log(response)
          }
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage)
          if (errorMessage != null) {            
            this.status = 'error'
          }
        }
      )    
  }

  updateAntecedente(id){
    setTimeout(() => {
      this._antecedenteService.editAntecedente(id,this.antecedenteSeleccionada).subscribe(      
        response => {          
          console.log(response);
          
          if(!response.antecedente){          
            this.status='error';            
          }else{
            this.status = 'ok';                      
            if (this.subirImege == true) {
              //SUBIR LA IMAGEN DEL CONTACTO          
              this._uploadService.makeFirileRequest(this.url + '/subir-imagen-patrocinador/' + id, [], this.filesToUpload, this.token, 'image')
                .then((result: any) => {
                  console.log(result);
                  this.antecedenteSeleccionada.image = result.antecedente.image;            
                   
                  // this._router.navigate(['/home']);
                });
            } else {
  
            }
            this.getAntecedentes()          
          }        
        },
        error => {        
          var errorMessage = <any>error;
          console.log(errorMessage);
          if(errorMessage != null){
            this.status = 'error';
          }
        }
      )
    }, 1500);
  }

  public filesToUpload: Array<File>;
  public subirImege = false;
  fileChangeEvent(fileInput: any) {
    this.subirImege = true;
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  deleteAntecedente(id){    
      this._antecedenteService.deleteAntecedente(id).subscribe(
        response=>{
          this.getAntecedentes();
          if(response.antecedente){            
            this.antecedenteSeleccionada =  response.antecedente;          
            this.status='OK';
          } 
        },
        error=>{
          var errorMessage = <any>error;
          console.log(errorMessage);
          if(errorMessage != null){            
            this.status = 'error'
          }
        }      
      )    
  }

}