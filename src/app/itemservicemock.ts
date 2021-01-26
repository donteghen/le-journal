import { Injectable } from "@angular/core";
import { Observable, of} from "rxjs";
import { Item } from "./model/item";
import { Items } from "./model/items";
import { ItemService } from "./services/item/item.service";
import * as lodash from 'lodash';

@Injectable({
    providedIn:'root'
})
export class ItemServiceMock  {
load(offset?: number, limit?: number): Observable<Items> {
const results: Item[] = lodash.range(offset, offset + limit).
map(index => ({
id: index,
title: `Item ${index + 1}`,
url: `http://www.example.com/item${index}`,
by: `demo`,
time: new Date().getTime() / 1000,
score: index,
}));
return of({
    offset,
    limit,
    total: offset + limit,
    results,
    });
}
}
