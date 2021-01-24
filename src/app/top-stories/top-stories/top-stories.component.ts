import { ItemServiceMock } from './../../itemservicemock';
import { ItemService } from './../../services/item/item.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Items } from 'src/app/model/items';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss'],
})
export class TopStoriesComponent implements OnInit, OnDestroy {
  items: Items;
  private subscription: Subscription;
  constructor(private itemService:ItemService, private ims:ItemServiceMock) { }

  ngOnInit() {
    this.subscription = this.ims.load(0, 10).
    subscribe(items => {
      this.items = items;
      console.log(items);
    });
  }
  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
