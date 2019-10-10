import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patrocinador } from '../../models/patrocinador.model';
import { PatrocinadorService } from '../../services/patrocinador.service';
import { UserService } from '../../services/user.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PatrocinadorService, UserService]
})
export class HomeComponent implements OnInit {
  public patrocinador: Patrocinador
  public patrocinadores = new Array()
  public patrocinadoresNacionales = new Array()
  public patrocinadoresInter = new Array()
  constructor(
    private _router: Router,
    public _patrocinadorService: PatrocinadorService
  ) { }

  ngOnInit() {
    this.getPatrocinadores()
    

    $(window).scroll(function () {
      if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
    });
    $('#return-to-top').click(function () {      // When arrow is clicked
      $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
      }, 500);
    });
  }

  getPatrocinadores() {
    this._patrocinadorService.getPatrocinadores().subscribe(
      response => {
        this.patrocinador = response.patrocinador
        this.patrocinadores = response.patrocinador;
        for (let x = 0; x < this.patrocinadores.length; x++) {
          if (this.patrocinadores[x].internacional == false) {
            this.patrocinadoresNacionales.push(this.patrocinadores[x])            
          }
        }

        for (let x = 0; x < this.patrocinadores.length; x++) {
          if (this.patrocinadores[x].internacional == true) {
            this.patrocinadoresInter.push(this.patrocinadores[x])            
          }          
        }

      }
    )
  }

  public goTo(url, id) {

    var myurl = `${url}/${id}`;
    this._router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

}
