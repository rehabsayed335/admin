import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../shared/services/posts.service'
import { News } from '../posts-list model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  items: News[] = [];

  constructor(
    private _PostsService: PostsService,
    private modalService: NgbModal,
    private _ToastrService:ToastrService,
    ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._PostsService.getAll().subscribe(
      res => {
        console.log(res);
        this.items = res["data"] as News[];
        //console.log("items" + this.items)

      },

      err => { console.log("error") })
  }

  deleteItem(model, id) {
    /*let item =this.items[index];
    this._PostsService.delate(item.id).subscribe(
      res=>{ this.items.splice(index,1)},
      err=>{}
    )*/
    this.modalService.open(model).result.then(
      result => {
        this._PostsService.delete(id).subscribe(
          res => { 
            this._ToastrService.success('item delete successfuly!', 'Success' ,{timeOut: 3000,progressBar:true,closeButton:true});
            this.getAll();
          },
          err => { 
            this._ToastrService.error(err.statusText, 'Error' ,{timeOut: 3000,progressBar:true,closeButton:true});
          }
        )
        console.log(result);
        console.log(id);
      },
      reson => { console.log(reson) }
    );


  }

}
