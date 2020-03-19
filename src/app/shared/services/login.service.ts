import { Injectable } from '@angular/core';
import { environment} from './../../../environments/environment';
import {HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private _HttpClient:HttpClient) { }

  login(data)
  {
    return this._HttpClient.post(`${environment.apiurl}/login/Post`,data);
  }
}
