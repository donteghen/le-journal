import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { combineLatest, merge, Observable, Subject} from 'rxjs';
import { filter, map, mergeMap, skip, switchAll, take, withLatestFrom} from 'rxjs/operators'
import { Item } from 'src/app/model/item';
import { Items } from 'src/app/model/items';
import * as lodash from 'lodash';

export interface Query {
  refresh?: boolean;
  offset: number;
  limit: number;
  }

@Injectable()
export class ItemService {
private queries: Subject<Query>;
total:number;
constructor(private db: AngularFireDatabase) {
this.queries = new Subject<Query>();
}

load(query: Query) {
this.queries.next(query);
}

get(): Observable<Items> {
const rawItemIds = this.db.list<number>('/v0/topstories').valueChanges();
rawItemIds.subscribe(data => this.total = data.length);
const itemIds = combineLatest(rawItemIds,this.queries)
.pipe(
filter(([ids, query]) => query.refresh),
map(([ids, query]) => ids)
);
const selector = ({offset, limit}, ids) => combineLatest<Items>(...(ids.slice(offset, offset + limit).map(id => this.db.object<Item>('/v0/item/' + id).valueChanges())));

return merge(combineLatest(this.queries, itemIds)
.pipe(
map(([query, ids]) => selector(query, ids).
pipe(take(1)))
),
this.queries.pipe( 
skip(1),
withLatestFrom(itemIds, selector)))
.pipe(switchAll());
}

}