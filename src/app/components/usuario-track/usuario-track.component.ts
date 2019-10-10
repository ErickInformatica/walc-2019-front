import { Component, OnInit } from '@angular/core';
import { GLOBAL } from 'src/app/services/global.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-usuario-track',
  templateUrl: './usuario-track.component.html',
  styleUrls: ['./usuario-track.component.scss'],
  providers: [UserService]
})
export class UsuarioTrackComponent implements OnInit {
  public users: User;
  public userEdit: User;
  public status: string;
  public identity;
  public token;
  public url;
  
  //TRACK 1
public track1Interesados = []
public track1preInscritos = []
public track1Inscritos = []
public track1Interesadoslength
public track1preInscritoslength
public track1Inscritoslength
  //TRACK 2
public track2Interesados = []
public track2preInscritos = []
public track2Inscritos = []
public track2Interesadoslength
public track2preInscritoslength
public track2Inscritoslength
  //TRACK 3
public track3Interesados = []
public track3preInscritos = []
public track3Inscritos = []
public track3Interesadoslength
public track3preInscritoslength
public track3Inscritoslength
  //TRACK 4
public track4Interesados = []
public track4preInscritos = []
public track4Inscritos = []
public track4Interesadoslength
public track4preInscritoslength
public track4Inscritoslength
    //TRACK 5
public track5Interesados = []
public track5preInscritos = []
public track5Inscritos = []
public track5Interesadoslength
public track5preInscritoslength
public track5Inscritoslength
  //TRACK 6
public track6Interesados = []
public track6preInscritos = []
public track6Inscritos = []
public track6Interesadoslength
public track6preInscritoslength
public track6Inscritoslength
  constructor(private _userService: UserService) {
    this.userEdit = new User('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
    , '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
    , '', '', '', '', '', '', '', '', '', '', '', '', '', '','','')
    this.url = GLOBAL.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();    
  }

  ngOnInit() {
    this.listaAllTracks()
  }

  listaAllTracks(){
    this.listTrack1()
    this.listTrack2()
    this.listTrack3()
    this.listTrack4()
    this.listTrack5()
    this.listTrack6()
  }

  public listTrack1() {    
      this._userService.getUsers(this.token).subscribe(
        response => {
          if (response.usuarios) {
            this.track1Interesados = response.usuarios.filter(function(element) {
            return element.interesado._id == "5d3e0f167c213e1b35df9cf3" ;
            });
            this.track1Interesadoslength = this.track1Interesados.length
            this.track1preInscritos = response.usuarios.filter(function(element) {
              return element.preinscrito._id == "5d3e0f167c213e1b35df9cf3" ;
            });   
            this.track1preInscritoslength = this.track1preInscritos.length
            this.track1Inscritos = response.usuarios.filter(function(element) {
              return element.inscrito._id == "5d3e0f167c213e1b35df9cf3" ;
            });       
            this.track1Inscritoslength = this.track1Inscritos.length
            this.users = response.usuarios;
            this.status = 'OK'
          }
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
          if (errorMessage != null) {            
            console.log(errorMessage);
            this.status = 'error'
          }
        }
      )    
  }
  public listTrack2() {    
    this._userService.getUsers(this.token).subscribe(
      response => {
        if (response.usuarios) {
          this.track2Interesados = response.usuarios.filter(function(element) {
          return element.interesado._id == "5d3e13117c213e1b35df9d78" ;
          });
          this.track2Interesadoslength = this.track2Interesados.length
          this.track2preInscritos = response.usuarios.filter(function(element) {
            return element.preinscrito._id == "5d3e13117c213e1b35df9d78" ;
          });   
          this.track2preInscritoslength = this.track2preInscritos.length
          this.track2Inscritos = response.usuarios.filter(function(element) {
            return element.inscrito._id == "5d3e13117c213e1b35df9d78" ;
          });
          this.track2Inscritoslength = this.track2Inscritos.length
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {            
          console.log(errorMessage);
          this.status = 'error'
        }
      }
    )    
  }
  public listTrack3() {    
    this._userService.getUsers(this.token).subscribe(
      response => {
        if (response.usuarios) {
          this.track3Interesados = response.usuarios.filter(function(element) {
          return element.interesado._id == "5d3e134f7c213e1b35df9d85" ;
          });
          this.track3Interesadoslength = this.track3Interesados.length
          this.track3preInscritos = response.usuarios.filter(function(element) {
            return element.preinscrito._id == "5d3e134f7c213e1b35df9d85" ;
          });   
          this.track3preInscritoslength = this.track3preInscritos.length
          this.track3Inscritos = response.usuarios.filter(function(element) {
            return element.inscrito._id == "5d3e134f7c213e1b35df9d85" ;
          });
          this.track3Inscritoslength = this.track3Inscritos.length
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {            
          console.log(errorMessage);
          this.status = 'error'
        }
      }
    )    
  }
  public listTrack4() {    
    this._userService.getUsers(this.token).subscribe(
      response => {
        if (response.usuarios) {
          this.track4Interesados = response.usuarios.filter(function(element) {
          return element.interesado._id == "5d3e136c7c213e1b35df9d86" ;
          });
          this.track4Interesadoslength = this.track4Interesados.length
          this.track4preInscritos = response.usuarios.filter(function(element) {
            return element.preinscrito._id == "5d3e136c7c213e1b35df9d86" ;
          });   
          this.track4preInscritoslength = this.track4preInscritos.length
          this.track4Inscritos = response.usuarios.filter(function(element) {
            return element.inscrito._id == "5d3e136c7c213e1b35df9d86" ;
          });
          this.track4Inscritoslength = this.track4Inscritos.length
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {            
          console.log(errorMessage);
          this.status = 'error'
        }
      }
    )    
  }
  public listTrack5() {    
    this._userService.getUsers(this.token).subscribe(
      response => {
        if (response.usuarios) {
          this.track5Interesados = response.usuarios.filter(function(element) {
          return element.interesado._id == "5d39e141e7179a064fa91633" ;
          });
          this.track5Interesadoslength = this.track5Interesados.length
          this.track5preInscritos = response.usuarios.filter(function(element) {
            return element.preinscrito._id == "5d39e141e7179a064fa91633" ;
          });   
          this.track5preInscritoslength = this.track5preInscritos.length
          this.track5Inscritos = response.usuarios.filter(function(element) {
            return element.inscrito._id == "5d39e141e7179a064fa91633" ;
          });
          this.track5Inscritoslength = this.track5Inscritos.length
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {            
          console.log(errorMessage);
          this.status = 'error'
        }
      }
    )    
  }
  public listTrack6() {    
    this._userService.getUsers(this.token).subscribe(
      response => {
        if (response.usuarios) {
          this.track6Interesados = response.usuarios.filter(function(element) {
          return element.interesado._id == "5d3e13a97c213e1b35df9d8c" ;
          });
          this.track6Interesadoslength = this.track6Interesados.length
          this.track6preInscritos = response.usuarios.filter(function(element) {
            return element.preinscrito._id == "5d3e13a97c213e1b35df9d8c" ;
          }); 
          this.track6preInscritoslength = this.track6preInscritos.length  
          this.track6Inscritos = response.usuarios.filter(function(element) {
            return element.inscrito._id == "5d3e13a97c213e1b35df9d8c" ;
          });
          this.track6Inscritoslength = this.track6Inscritos.length
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {            
          console.log(errorMessage);
          this.status = 'error'
        }
      }
    )    
  }

}
