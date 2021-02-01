import { Comment } from './../../model/comments';
import { CommentService } from './../../services/comment.service';
import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() item: Comment;
  comments: Comment[];
  constructor(private commentService:CommentService) { }

  ngOnInit() {
    var ids = this.item.kids;
    //ids.map(id => this.commentService.get(id).subscribe(data => {
      //this.comments.push(data);
     // console.log(this.comments)
   // }));
  }

}
