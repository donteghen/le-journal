
import { CommentService } from './../../services/comment.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit, OnDestroy{
  sub: Subscription;
  infiniteScrollComponent;
  comments = Array<Comment>();
  constructor(private router:Router, private commentService:CommentService, private activeRoute:ActivatedRoute) { }

  ngOnInit() {
   this.sub =  this.activeRoute.params.subscribe(param =>{ 
     var  id = param.id
      this.commentService.getItem(id).subscribe(data =>{
        var kids = data.kids;
        kids.map(id => this.commentService.get(id).subscribe(data =>{
          this.comments.push(data)
          
        }))
        this.notifyScrollComplete()
      })
    });

  }

  ngOnDestroy(){
    this.sub.unsubscribe()
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
