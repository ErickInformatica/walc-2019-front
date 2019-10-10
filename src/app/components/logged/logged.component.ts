import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss'],
  providers: [UserService]
})
export class LoggedComponent implements OnInit {
  public identity;
  public conferencias=new Array()
  public image;
  public statusConf;
  public filtered
  constructor(private _userService: UserService, private sanitizer: DomSanitizer) { 

    this.identity =  this._userService.getIdentity();
  }

  ngOnInit() {
     this.misConferencias()
  }

  misConferencias(){
    this._userService.getMisConferencias().subscribe(
      response=>{
        this.filtered = response.miConfe.inscrito.inscritos.filter(function (element) {
          return element.user == response.miConfe._id;
        });
         if(response && response.miConfe.interesado._id !== "5d408e36e7179a064faae9db"){
          this.conferencias.push(response.miConfe);
          this.image = response.miConfe.interesado.imagen
          this.statusConf = 'interesados'
        } 
        // si esta preinscrito
        if(response && response.miConfe.preinscrito._id !== "5d408e36e7179a064faae9db"){
          this.conferencias.push(response.miConfe);
          this.image = response.miConfe.preinscrito.imagen
          this.statusConf = 'preinscritos'
        } 
        // si esta inscrito
        if(response && response.miConfe.inscrito._id !== "5d408e36e7179a064faae9db"){
          this.conferencias.push(response.miConfe);
          this.image = response.miConfe.inscrito.imagen
          this.statusConf = 'inscritos'
        } 
      }
    ) 
  }

}
