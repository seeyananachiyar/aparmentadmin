import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  log(pageName:string,message:string){
    console.log("Pagename: "+pageName+"\n Message: "+message);
  }

  error(error:any){
    console.error('An error occurred:', error.error);
  }
  
}
