import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setItem(key:any,value:any,type:string){
    switch(type){
      case 'session':
          sessionStorage.setItem(key,value);
          break;
      default:
          localStorage.setItem(key,value);
   }

  }

  getItem(key:any,type:string){
    switch(type){
      case 'session':
          return sessionStorage.getItem(key);
          break;
      default:
          return localStorage.getItem(key);
   }
  }

  removeItem(key:any,type:string){
    switch(type){
      case 'session':
          sessionStorage.removeItem(key);
          break;
      default:
          localStorage.removeItem(key);
   }
    
  }

  clear(type:string){
     switch(type){
        case 'session':
            sessionStorage.clear();
            break;
        default:
            localStorage.clear();
     }
  }
}
