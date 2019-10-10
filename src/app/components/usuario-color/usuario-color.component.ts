import { Component, OnInit } from '@angular/core';
import { GLOBAL } from 'src/app/services/global.service';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';
import { ConferenciaService } from '../../services/conferenica.service';

@Component({
  selector: 'app-usuario-color',
  templateUrl: './usuario-color.component.html',
  styleUrls: ['./usuario-color.component.scss'],
  providers: [UserService, ConferenciaService]
})
export class UsuarioColorComponent implements OnInit {
  public users: User;
  public userEdit: User;
  public status: string;
  public identity;
  public token;
  public url;
  public usersColorWhite = new Array()
  public usersColorRed = new Array()
  public usersColorBlue = new Array()
  public usersColorYellow = new Array()
  public lengthWhite = 0;
  public lengthRed = 0;
  public lengthBlue = 0;
  public lengthYellow = 0;
  public titulo;
  public filteredArray
  constructor(private _userService: UserService, private _conferenciaService: ConferenciaService) {
    this.userEdit = new User('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
    , '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
    , '', '', '', '', '', '', '', '', '', '', '', '', '', '','','')
    this.url = GLOBAL.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.listUsers()
  }

  public listUsers() {
    this._userService.getUserColor(this.token).subscribe(
      response => {
        
        if (response.message) {
          this.users = response.message;
          var filtered = response.message.filter(function (element) {
            return element.inscritos.length > 0;
          });
          this.filteredArray = filtered

          for (let x = 0; x < filtered.length; x++) {
            for (let a = 0; a < filtered[x].inscritos.length; a++) {

              if (filtered[x].inscritos[a].color == 'White') {
                console.log(filtered[x].inscritos[a]);
                
                this.usersColorWhite.push(filtered[x].inscritos[a]);
                this.lengthWhite = this.usersColorWhite.length

              }
              if (filtered[x].inscritos[a].color == 'Red') {
                this.usersColorRed.push(filtered[x].inscritos[a]);
                this.lengthRed = this.usersColorRed.length                
              }
              if (filtered[x].inscritos[a].color == 'Blue') {
                this.usersColorBlue.push(filtered[x].inscritos[a]);
                this.lengthBlue = this.usersColorBlue.length
                

              }
              if (filtered[x].inscritos[a].color == 'Yellow') {
               
                this.usersColorYellow.push(filtered[x].inscritos[a]);
                
                
                this.lengthYellow = this.usersColorYellow.length
              }
            }
          }

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


  cambiarColor(color, idUsuario) {
    console.log(color, idUsuario);
    var idCharla;
    for (let x = 0; x < this.filteredArray.length; x++) {
      for (let a = 0; a < this.filteredArray[x].inscritos.length; a++) {
        if (this.filteredArray[x].inscritos[a].user._id == idUsuario) {
          idCharla = this.filteredArray[x]._id
        }
      }
    }

    this._conferenciaService.cambiarColor(this.token, this.userEdit, idCharla, color, idUsuario).subscribe(
      response => {
        this.usersColorWhite = []
        this.usersColorRed = []
        this.usersColorBlue = []
        this.usersColorYellow = []
        this.lengthWhite = 0;
        this.lengthRed = 0;
        this.lengthBlue = 0;
        this.lengthYellow = 0;
        this.listUsers()
      }
    )
  }
}
