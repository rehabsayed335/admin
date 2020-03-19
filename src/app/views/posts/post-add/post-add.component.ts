import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from './../../../shared/services/posts.service';
import {FormGroup ,FormBuilder, Validators} from '@angular/forms'
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
    if(this.addform.invalid)
    {
      return;
    }
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
      body:['',Validators.required]
    }

    )
  }

  /*additem(data)
  {
    this._PostsService.add(data).
  }*/

}
