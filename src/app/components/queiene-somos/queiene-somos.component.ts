import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, Layer, marker, icon } from 'leaflet';

@Component({
  selector: 'app-queiene-somos',
  templateUrl: './queiene-somos.component.html',
  styleUrls: ['./queiene-somos.component.scss']
})
export class QueieneSomosComponent implements OnInit {
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' })
    ],
    zoom: 16,
    center: latLng(14.625587, -90.535994)
  };

  markers: Layer[] = []
  constructor() { }

  ngOnInit() {
    const newMarker = marker(
      [ 14.625587, -90.535994 ],
      {
				icon: icon({
					iconSize: [ 30, 30 ],
					iconUrl: 'https://imagenes-walc2019.s3.amazonaws.com/location+icon_1948176.png'
				})
			}
      
    ).bindPopup('Fundacíon Kinal').openPopup();;
    this.markers.push(newMarker)
  }

}
