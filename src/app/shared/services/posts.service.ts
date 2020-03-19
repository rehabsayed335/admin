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
      Authorization :`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjhhYWZmNDQ5YWVhYjJhNmZiYjU1MDFjMjAxNmQxMTRmZGQyNzI4ODRkMDk5MTZlM2ZlOTdmMjg3MzJmYzEyMTEyMjI5MDYwZThkYzhlMTYiLCJpYXQiOjE1ODQ2MDMyNjUsIm5iZiI6MTU4NDYwMzI2NSwiZXhwIjoxNjE2MTM5MjY1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.s4wRpkVv5Ag0Tp2rb1dJl4zCVG2kxF-fqguP8TPk6VKrYkJftwT4Lq5w_9XvYdn9bqTGPVqI5G1YQq-m3rEUh_E5-KNbPXkkNKWPLu_8NxlVVE5kRqqMvcTC7sZfbk-21bZfxSdlCBqcQbBf6c3AjIAuCLVF5hGSAPKaBiv5K92JypAptwhZdLpoy8ZRIQZ019R9x6z-WFVW3TXtNOOrIOcKeyR61X1RnJnwktf7Iit_7Q7dIAWNHX2ASWaphwx97gSMuSHtu6qOOPsjW8yfbcgWZGBAqagxCgLfcdtMhIhK2iDmJROyhRQboCd2HL-OFfXXaJsAqzQCnFCmy0JqV_4K4ITFLTJ6BCFZuuuZBlpveR8L7yHyl2wifpxQlRyH_Sj8WfqxW1JnPCz68Hsxo_6sigs6gPR4kXIRF_WOh_Zgz7CKUDlPu0rxLoyX6ho9gal3QFb_IV9F1bubhPmXM4nDetyTfPgbp9c_HA5lcN_6xidAgwz_18F_Ie3Dg_-qTHFkjACv3vDx8zwnGfm1cJb57HEBhFGYP4jrmzNecoeWfeDuumAEyHK7PpsMM_NX8HDr0_lFyMFKnFY2l8ztWkJ7KR0SAjV26XOfE7O5ws9tQ11QQ6m-8r-7qX9yKOelQ0nmEQUwdnV1wJ9C-XsEQbWL6sAW7LtJ5igXoVpWis4`
    })
  }

  constructor( private _HttpClient:HttpClient) { }

  // get all news
  getAll()
  {
     return this._HttpClient.get(`${environment.apiurl}/articles?lang=ar`,this.httpoptions)

  };

  // getitembyid
  getitem(id)
  {
    return this._HttpClient.get(`${environment.apiurl}/articles?lang=ar/${id}`,this.httpoptions)

    
  }

  // delete item
  delete(id:number)
  {
    return this._HttpClient.delete(`${environment.apiurl}/articles/${id}`,this.httpoptions);
  }


// add new item
  add(data)
  {
    return this._HttpClient.post(`${environment.apiurl}/articles?lang=ar`,data,this.httpoptions)
  }
}
