
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { merge, Observable, Subject } from 'rxjs';
import { Item } from '../model/item';



@Injectable({
  providedIn: 'root'
})
export class CommentService {
  
  constructor(private db: AngularFireDatabase) {}

  get(id:number): Observable<Comment>{
    return this.db.object<Comment>('https://hacker-news.firebaseio.com/v0/item/' + id).valueChanges()
  }

 getItem(id:number){
   return this.db.object<Item>('https://hacker-news.firebaseio.com/v0/item/' + id).valueChanges()
 }

  
}
