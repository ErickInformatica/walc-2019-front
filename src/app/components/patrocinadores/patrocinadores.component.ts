import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Patrocinador } from 'src/app/models/patrocinador.model';
import { PatrocinadorService } from 'src/app/services/patrocinador.service';
import { GLOBAL } from 'src/app/services/global.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-patrocinadores',
  templateUrl: './patrocinadores.component.html',
  styleUrls: ['./patrocinadores.component.scss'],
  providers: [PatrocinadorService,UserService,UploadService] 
})
export class PatrocinadoresComponent implements OnInit {
  public patrocinadores: Patrocinador;
  public patrocinador: Patrocinador;
  public proveedor: Patrocinador;
  public url;
  public token;
  public identity;
  public status;
  public admin: Boolean = false;
  public patrocinadoresArray = new Array()
  public patrocinadoresNacionales = new Array()
  public patrocinadoresInter = new Array()

  constructor(private _userService: UserService, private _patrocinadorService: PatrocinadorService, private _uploadService: UploadService) {
    this.proveedor = new Patrocinador('','','','',false);
    this.patrocinador = new Patrocinador('','','','',false);
    this.token = this._userService.getToken();
    this.identity =  this._userService.getIdentity();
    this.url = GLOBAL.url;
   }

  ngOnInit() {
    this.getSponser()
    if(this.identity && this.identity.rol == 'ROLE_ADMIN'){
      this.admin = true;
    }
  }

  getSponser(){
    this._patrocinadorService.getPatrocinadores().subscribe(
      response=>{
        if (response.patrocinador) {     
          this.patrocinadores = response.patrocinador;
          this.patrocinadoresArray = response.patrocinador;
          for (let x = 0; x < this.patrocinadoresArray.length; x++) {
            if (this.patrocinadoresArray[x].internacional == false) {
              this.patrocinadoresNacionales.push(this.patrocinadoresArray[x])            
            }
          }
  
          for (let x = 0; x < this.patrocinadoresArray.length; x++) {
            if (this.patrocinadoresArray[x].internacional == true) {
              this.patrocinadoresInter.push(this.patrocinadoresArray[x])            
            }          
          }  
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

  getSponsor(id){
    this._patrocinadorService.getPatrocinador(id).subscribe(
      response=>{
        if (response.patrocinador) {
          
          this.patrocinador = response.patrocinador;
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

  register(){
    this._patrocinadorService.register(this.proveedor).subscribe(
      response=>{
        if(response){
          alert(response.patrocinador)          
          this.getSponser()
        }
      },
      error=>{
        var errorMessage = <any>error;
        if (errorMessage != null) {          
          this.status = 'error'      
        }
      }
    )
  }

  deleteSponsor(id){
    this._patrocinadorService.deleteSponsor(this.token,id).subscribe(
      response=>{
        if (response.patrocinador) {  
          alert(response.patrocinador)
          this.patrocinador = response.patrocinador;
          this.status = 'OK'
          this.getSponser()
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

  updateSponer(id) {
    this._patrocinadorService.updateSponer(id, this.patrocinador).subscribe(
      response => {          
        if (!response.patrocinador) {
          this.status = 'error';          
        } else {
          this.status = 'ok';          
          
          if (this.subirImege == true) {
            //SUBIR LA IMAGEN DEL CONTACTO          
            this._uploadService.makeFirileRequest(this.url + '/subir-imagen-patrocinador/' + id, [], this.filesToUpload, this.token, 'image')
              .then((result: any) => {
                this.patrocinador.image = result.patrocinador.image;            
                 
                // this._router.navigate(['/home']);
              });
          } else {

          }
          this.getSponser();
        }        
      },
      error => {        
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'error';
        }
      }
    )
  }

  public filesToUpload: Array<File>;
  public subirImege = false;
  fileChangeEvent(fileInput: any) {
    this.subirImege = true;
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
