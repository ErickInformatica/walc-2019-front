import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/models/track.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';
import { ConferenciaService } from 'src/app/services/conferenica.service';

@Component({
  selector: 'app-track1',
  templateUrl: './track1.component.html',
  styleUrls: ['./track1.component.scss'],
  providers: [UserService, ConferenciaService]
})
export class Track1Component implements OnInit {
  public idTrack
  public token
  public identity
  public status
  public track: Track
  public description: []
  public iconTrack;
  public preRequisitos = new Array()
  public track6: Boolean = false;
  public requisitosSoftWareTrack6 = ['Google Chrome', 'Virtual Box','GIT', 'Docker toolbox', 'Wireshark', 'Postman', 'Anaconda (Python y R) en versión estable más reciente.'];
  public requisitosHardwareTrack6 = ['Sistema operativo (Linux, Windows 8/10, masOSx 10.11/10.12)', 'I5 Dual Core', '8G de RAM', '50G de disco duro disponible (mínimo)', 'Conexión de red']
  constructor(private activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _conferenciaService: ConferenciaService) {
    this.token = this._userService.getToken()
    this.identity = this._userService.getIdentity();
    this.track = new Track("", "", [], [], [], "", "", [], "", "", [], "", "", "", "", [])
  }

  ngOnInit() {
    this.idTrack = this.activatedRoute.snapshot.paramMap.get("id")
    this.getTrack(this.idTrack)
  }

  getTrack(id) {
    this._userService.getTrak(id).subscribe(
      response => {
        sessionStorage.setItem('track', JSON.stringify(this.idTrack))
        this.track = response.track;
        
        this.description = response.track.descripcion
        this.iconTrack = response.track.icon;
        this.preRequisitos = this.track.preRequisito
        if (this.idTrack == "5d3e13a97c213e1b35df9d8c") {
          this.track6 = true;
          
        }

      }
    )
  }

  // insterasado(id) {
  //   this._conferenciaService.interesados(this.token, id).subscribe(
  //     response => {
  //       if (response) {
  //         console.log(response)
  //         this.status = 'OK'
  //       }
  //     },
  //     error => {
  //       var errorMessage = <any>error;
  //       if (errorMessage != null) {
  //         this.status = 'error'
  //       }
  //     }
  //   )
  // }

}
