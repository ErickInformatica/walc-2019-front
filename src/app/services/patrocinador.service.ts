import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { Patrocinador } from "../models/patrocinador.model";
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class PatrocinadorService{    
    public url: string;
    public identity;
    public token;

    constructor(public _http: HttpClient, private _userService: UserService)
    {
        this.url= GLOBAL.url;
    }
     
    getPatrocinador(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this._http.get(this.url + '/patrocinador/get/one/' + id, {headers: headers})
    }
    getPatrocinadores(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this._http.get(this.url + '/patrocinador/get/all', {headers: headers})
    }
    register(patrocinador: Patrocinador): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        let params = JSON.stringify(patrocinador);
        return this._http.post(this.url + '/patrocinador/add', params,{headers: headers})
    }
    
    deleteSponsor(token, id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token)
        return this._http.delete(this.url + '/patrocinador/delete/' + id, {headers: headers})
    }

    updateSponer(id,patrocinador: Patrocinador): Observable<any>{
        let params = JSON.stringify(patrocinador);
        let headers = new HttpHeaders().set('Content-type','application/json').set('Authorization', this._userService.getToken());
        return this._http.put(this.url + '/patrocinador/upadte/' + id,params, {headers: headers});
      }
} 