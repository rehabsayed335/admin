import { Injectable } from '@angular/core';
import { environment} from './../../../environments/environment';
import {HttpClient ,HttpHeaders} from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  httpoptions ={
    headers: new HttpHeaders({
      'authorization':"Token"
    })
  }

  constructor( private _HttpClient:HttpClient) { }

  // get all news
  getAll()
  {
     return this._HttpClient.get(`${environment.apiurl}/articles/Get`,this.httpoptions)
     //return this._HttpClient.get(`${environment.apiurl}/Task/Get`, this.httpoptions)

  };
  delate(id:number)
  {
    return this._HttpClient.delete(`${environment.apiurl}/articles/Delete/${id}`,this.httpoptions);
  }

  add(data)
  {
    return this._HttpClient.post(`${environment.apiurl}/articles/Post`,data,this.httpoptions)
  }
}
