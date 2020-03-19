import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from './../../../shared/services/posts.service';
import {FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { News } from '../posts-list model';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  addform :FormGroup;
  constructor(
    private _PostsService:PostsService, 
    private _ToastrService:ToastrService,
    private _FormBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.buildaddform();
  }

  //get f () {return this.addform.controls}
  onSubmit()
  {
    let item:News=new News();
    item = this.addform.value;
    if(this.addform.invalid)
    {
      return;
    }
    /*console.log(typeof(JSON.stringify(this.addform.value)));
    console.log(typeof(item));
    console.log(typeof((this.addform.value)));
    console.log(item)*/

    console.log(typeof((this.addform.value)));




    this._PostsService.add(this.addform.value).subscribe(
      res=>{
        this._ToastrService.success('item add successfuly!', 'Success' ,{timeOut: 3000,progressBar:true,closeButton:true});
      },
      err=>{ 
        this._ToastrService.error(err.statusText, 'Error' ,{timeOut: 3000,progressBar:true,closeButton:true});

      }
    )

  }
  buildaddform()
  {
    this.addform = this._FormBuilder.group({
      title:['',Validators.required],
      body:['',Validators.required],
      category_id:['1',Validators.required],
      language:['en',Validators.required],
      image:['',Validators.required],

    }

    )
  }

  

}
