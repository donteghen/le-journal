import { Comment } from './../../model/comments';
import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from './../../services/comment.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  commentsReply =  Array<any>();
  showReplies : boolean = false;
  sub : Subscription
  constructor(private commentService: CommentService) { }

  ngOnInit() {
  var ids = this.comment.kids? this.comment.kids : [];
   ids.map(id => this.sub = this.commentService.get(id).subscribe(comment =>{
    this.commentsReply.push(comment);
  })
  )
  this.sub.unsubscribe();
  }

  

  toggleReplyView(){
   this.showReplies = !this.showReplies;
  }

}
