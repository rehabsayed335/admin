import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../shared/services/posts.service'
import { News } from '../posts-list model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  items :News[] =[];

  constructor( private _PostsService: PostsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll()
  {
    this._PostsService.getAll().subscribe(
      res => {
        console.log(res);
        this.items = res["data"] as News[];
        //console.log("items" + this.items)
      
      },
      
      err => {console.log("error")})
  }

  deleteItem(index:number)
  {
    let item =this.items[index];
    this._PostsService.delate(item.id).subscribe(
      res=>{ this.items.splice(index,1)},
      err=>{}
    )
  }

}
