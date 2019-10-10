import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { Conferencia } from "../models/conferencia.model";
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable()
export class ConferenciaService {
    public url: string;
    public identity;
    public token;

    constructor(public _http: HttpClient, public _userService: UserService) {
        this.url = GLOBAL.url;
    }

    buscarConferencia(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this._http.get(this.url + '/conferencia/buscar/'+id,{headers:headers})
    }

    listarTodo(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.get(this.url+'/conferencia/listarAll', {headers: headers})
    }

    interesados(token, user: User,id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);
        let params = JSON.stringify(user)
        return this._http.post(this.url+'/conferencia/interesado/'+id+'/'+user._id, params,{headers: headers})
    }

    preinscripcion(token, user: User, idCharla): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);
        let params = JSON.stringify(user)

        return this._http.post(this.url+'/conferencia/preinscribir/'+idCharla+'/'+user._id, params,{headers: headers})
    }
    cambiarColor(token, user: User, idCharla, color, idUsuario): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);
        let params = JSON.stringify(user)

        return this._http.put(this.url+'/conferencia/registrado/'+idCharla+'/'+color+'/'+idUsuario, params,{headers: headers})
    }


    inscripcion(token, user: User, idCharla): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);
        let params = JSON.stringify(user)

        return this._http.post(this.url+'/conferencia/inscribir/'+idCharla+'/'+user._id, params,{headers: headers})
    }

}