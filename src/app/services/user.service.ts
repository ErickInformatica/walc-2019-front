import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { User } from "../models/user.model";
import { Observable } from 'rxjs';

@Injectable()
export class UserService{
    public headers = new HttpHeaders().set('Content-Type', 'application/json');
    public url: string;
    public identity;
    public token;

    constructor(public _http: HttpClient)
    {
        this.url= GLOBAL.url;
    }
    editSaldo(user:User): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
        let params = JSON.stringify(user);
        return this._http.put(this.url+'/editSaldo/'+user._id, params ,{headers: headers})
    }

    getMisConferencias(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());

        return this._http.get(this.url+'/conferencias', {headers: headers})
    }

    getTrak(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.get(this.url+'/track/'+id, {headers: headers})
    }
    getTraks(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.get(this.url+ '/tracks', {headers: headers})
    }
    register(user: User): Observable<any>{
        let params = JSON.stringify(user);

        return this._http.post(this.url + '/registrar', params,{headers: this.headers})
    }

    registerFollow(id,user: User): Observable<any>{
        let params = JSON.stringify(user);

        return this._http.post(this.url + '/registrarYSeguir/'+id, params,{headers: this.headers})
    }

    getUser(token, id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + '/usario/' + id, { headers: headers })
    }

    getUsers(token): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.get(this.url+'/usuarios', {headers: headers})
    }

    getUserColor(token): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.get(this.url+'/conferencia/listarColor', {headers: headers})
    }

    getUsersPre(token,id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.get(this.url+'/conferencia/interesado/'+id, {headers: headers})
    }

    login(user, gettoken2 = null): Observable<any>{
        if(gettoken2 != null){
            user.gettoken = gettoken2;
        }
        let params = JSON.stringify(user);
        console.log(params);
        
        return this._http.post(this.url + '/login', params, {headers: this.headers})
    }

    getIdentity(){
        var identity2 = JSON.parse(sessionStorage.getItem('identity'))

        if(identity2 != null){
            this.identity = identity2
        }else{
            this.identity = null;
        }

        return this.identity
    }

    getToken(){
        var token2 = sessionStorage.getItem('token');

        if(token2 != null){
            this.token = token2
        }else{
            this.token = null;
        }

        return this.token
    }    

    updateUser(id,user: User): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-type','application/json').set('Authorization', this.getToken());
      
        return this._http.put(this.url + '/editar-usuario/' + id,params, {headers: headers});
      }
}