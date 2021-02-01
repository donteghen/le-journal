import { AgoPipe } from './../shared/ago.pipe';
import { CommentComponent } from './../components/comment/comment.component';
import { CommentsComponent } from './../components/comments/comments.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CommentsListComponent, CommentsComponent, CommentComponent, AgoPipe],
  imports: [
    CommonModule, FormsModule,ReactiveFormsModule, 
    CommentsRoutingModule
  ]
})
export class CommentsModule { }
