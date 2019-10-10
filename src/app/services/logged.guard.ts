
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class LogeedGuard implements CanActivate{
    public identity;
    constructor(private _router: Router) { }

    canActivate() {
        let identity2 = this.getIdentity()
        if(!identity2){
            
            this._router.navigate(['/home'])
            return false;
        } else{
            
            return true;
        }
        
    }

    getIdentity(){
        var identity = JSON.parse(sessionStorage.getItem('identity'));
        
        if(identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }

        return this.identity;
    }
}