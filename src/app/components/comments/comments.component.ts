import { ItemService } from './../../services/item/item.service';
import { CommentService } from './../../services/comment.service';
import { Location } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from 'src/app/model/items';
import { Item } from 'src/app/model/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit{
  
  infiniteScrollComponent;
  comments = Array<Comment>();
  constructor(private router:Router, private commentService:CommentService, private activeRoute:ActivatedRoute, private itemService:ItemService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(param =>{ 
     var  id = param.id
      this.commentService.getItem(id).subscribe(data =>{
        var kids = data.kids;
        kids.map(id => this.commentService.get(id).subscribe(data =>{
          this.comments.push(data)
          
        }))
        console.log(this.comments)
        this.notifyScrollComplete()
      })
    });

    //var ids = this.item.kids;
   // console.log(ids);
    //ids.map(id => this.commentService.get(id).subscribe(data => {
      //this.comments.push(data);
     // console.log(id);
     // console.log(data)

   // }));
  }
    goBack(): void {
    this.router.navigateByUrl('/top-stories');
    }
    private notifyScrollComplete(): void {
      if (this.infiniteScrollComponent) {
      this.infiniteScrollComponent.complete();
      }
    }
}
