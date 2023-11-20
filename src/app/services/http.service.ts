import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { observable, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LogService } from './log.service';
import { SessionService } from './session.service';
declare const $:any;
import { environment } from '../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};



@Injectable({
  providedIn: 'root'
})

export class HttpService {
  public configUrl:string=environment.apiUrl;
  // public configImage:string=environment.imagePath;
  public userInfo:any;
  constructor(
    private http: HttpClient,
    private logService:LogService,
    private sessionService:SessionService
    ) { 
      this.userInfo=this.sessionService.getItem('userInfo','session');
      this.userInfo= JSON.parse(this.userInfo);
    }
   
  public get(path:string): Observable<any> {
    let url=this.configUrl+path;

    let header:any = { 'content-type': 'application/json'};

     if(this.userInfo){
       header['Authorization']='Bearer '+ this.userInfo.data.access_token;
     }

     let headers = new HttpHeaders(header);
     let options = { headers: headers };
     
    return this.http.get(url,options).pipe(
      catchError(this.handleError)
    );
  }
 public post(param:any,path:string): Observable<any> {
    let url=this.configUrl+path;

     let header:any = { 'content-type': 'application/json'};

     if(this.userInfo){
       header['Authorization']='Bearer '+ this.userInfo.data.access_token;
     }

     let headers = new HttpHeaders(header);
     let options = { headers: headers };


    //const params=JSON.stringify(param);
    //console.log(params);
    return this.http.post(url,param,options).pipe(
      catchError(this.handleError)
    );;
  }
  
  public  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      this.logService.error(error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(JSON.parse(JSON.stringify(error)));
  }
  public getHeaders(){
        
      const headers=new HttpHeaders({
        'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
      });

      const options:Object={
        headers:headers,
        responseType:'text'
      };

      return options;
  }

  public getBody(params:any){
    let body=new HttpParams({
      fromObject:params
    }).toString();
  }


  update(path:any, data: any): Observable<any>{
    let url=this.configUrl+path;

    let header:any = { 'content-type': 'application/json'};

    if(this.userInfo){
      header['Authorization']='Bearer '+ this.userInfo.data.access_token;
    }

    let headers = new HttpHeaders(header);
    let options = { headers: headers };

    return this.http.patch(`${url}`,data,options);
  }

  delete(path:any): Observable<any> {
    let url=this.configUrl+path;

    let header:any = { 'content-type': 'application/json'};

    if(this.userInfo){
      header['Authorization']='Bearer '+ this.userInfo.data.access_token;
    }

    let headers = new HttpHeaders(header);
    let options = { headers: headers };

    return this.http.delete(`${url}`,options);
  }

  deleteAll(){
    //return this.http.delete(configUrl);
  }
  getAll(){
    //return this.http.get(baseUrl);
  }

  getClient(){
    return this.get('client');
  }

  status(path:String,params:any): Observable<any>{
    let url=this.configUrl+path;

    let header:any = { 'content-type': 'application/json'};

    if(this.userInfo){
      header['Authorization']='Bearer '+ this.userInfo.data.access_token;
    }

    let headers = new HttpHeaders(header);
    let options = { headers: headers };

    return this.http.patch(`${url}`,params,options);
  }

  public upload(param:any,path:string): Observable<any> {
    let url=this.configUrl+path;
     let header:any = { }
     if(this.userInfo){
      header['Authorization']='Bearer '+ this.userInfo.data.access_token;
      header['enctype']='multipart/form-data';
     }
     let headers = new HttpHeaders(header);
     let options = { headers: headers };

     return this.http.post(url,param,options).pipe(
      catchError(this.handleError)
    );
  }

  public downloadPdf(path:string): Observable<any> {
    
   
    const httpOptions = {
      observable:'response',
      responseType: 'blob' as 'json',
       
    };
    
    
    return this.http.get(path, httpOptions);
  }

  public download(){
   

      const headers=new HttpHeaders({
        'Access-Control-Allow-Methods':'*',
       'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type':'application/pdf'
     
      });

      const options:Object={
        headers:headers,
        observe:'response',
        responseType:'blob'
      };


   return this.http.get("https://www.africau.edu/images/default/sample.pdf",options)
  }

}
