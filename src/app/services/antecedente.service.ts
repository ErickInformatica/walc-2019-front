import { Injectable } from '@angular/core';
import {GLOBAL} from './global.service'
import {Antecedente} from '../models/antecedente.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AntecedenteService {
  public url: String;



  constructor(
    public _http:HttpClient,
  ) {
    this.url= GLOBAL.url
   }

   addAntecedente(antecedente:Antecedente): Observable<any>{
     let params= JSON.stringify(antecedente);
     let headers= new HttpHeaders().set('Content-type', 'application/json')
     return this._http.post(this.url+'/add-antecedente', params, {headers:headers})
   }

   getAntecedentes():Observable<any>{
    let headers= new HttpHeaders().set('Content-type', 'application/json');
    return this._http.get(this.url + '/listar-antecendente', {headers:headers})
   }

   getAntecedente(id):Observable<any>{
    let headers= new HttpHeaders().set('Content-type', 'application/json');
    return this._http.get(this.url + '/listar-antecedente/'+id, {headers:headers})
   }

   editAntecedente(id,antecedente:Antecedente): Observable<any>{
    let params= JSON.stringify(antecedente);
    let headers= new HttpHeaders().set('Content-type', 'application/json')
    return this._http.put(this.url+'/editar-antecedente/'+ id, params, {headers:headers})
  }
  deleteAntecedente(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + '/eliminar-antecedente/' + id, { headers: headers })
}
}
