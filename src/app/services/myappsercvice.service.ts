import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MyappsercviceService {
  obj: any;
  constructor(private httpclient : HttpClient , private router :Router) { }
  loadapps(){
    const url = environment.API_EndPoint + 'view.php' ;
    return this.httpclient.get(url).pipe(map(data => data) );
  }
  delete(idapp:any): Observable<HttpResponse<MyappsercviceService>> {
    const url = environment.API_EndPoint + 'delete.php?id=' + idapp;
    return this.httpclient.get<HttpResponse<MyappsercviceService>>(url).pipe(map(data => data) );
  }
  createapp(data :any)  : Observable<HttpResponse<MyappsercviceService>>{
    const url = environment.API_EndPoint + 'create.php' ;
    return this.httpclient.post<HttpResponse<MyappsercviceService>>(url,data).pipe(map(data => data)
  );
  }
  update(data : any): Observable<HttpResponse<MyappsercviceService>>{
    const url = environment.API_EndPoint + 'update.php';
    return this.httpclient.post<HttpResponse<MyappsercviceService>>(url,data).pipe(map(data => data) );
  }

}
