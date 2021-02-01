import { OpenPageService } from './../../services/open-page/open-page.service';
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
total:number;
private subscription: Subscription;
private offset = 0;
private limit = 10;
private infiniteScrollComponent: any;
private refresherComponent: any;


constructor(private itemService: ItemService, private openPageService:OpenPageService) { }

ngOnInit() {
this.subscription = this.itemService.get()
.subscribe(items =>{
 this.items = items
 
  this.total = this.itemService.total;
  this.notifyRefreshComplete();
});
this.doLoad(true);
}

ngOnDestroy() {
if (this.subscription) {
this.subscription.unsubscribe();
}

}
hasPrevious(): boolean {
return this.offset > 0;
}

previous(): void {
if (!this.hasPrevious()) {
  return;
}
this.offset -= this.limit;
this.doLoad(false);
}

load(event) {
  this.infiniteScrollComponent = event.target;
  if (this.hasNext()) {
    //this.offset += this.limit;
    this.limit += this.limit;
    this.doLoad(false);
    this.notifyScrollComplete();
  }
  
}

hasNext(): boolean {
return this.items != null && (this.offset + this.limit) < this.total;
}

next() {
if (!this.hasNext()) {
return;
}
this.offset += this.limit;
this.doLoad(false);

}

canRefresh(): boolean {
return this.items != null;
}


refresh(event) {
  this.refresherComponent = event.target;
  if (this.canRefresh()) {
    this.offset = 0;
    this.doLoad(true);
  }
}

private doLoad(refresh: boolean) {
this.itemService.load({
offset: this.offset,
limit: this.limit,
refresh,
});
}
private notifyScrollComplete(): void {
  if (this.infiniteScrollComponent) {
  this.infiniteScrollComponent.complete();
  }
  }
  private notifyRefreshComplete(): void {
  if (this.refresherComponent) {
    setTimeout(() =>{
      this.refresherComponent.complete();
      
    }, 3000);
  
  }
  }

  pageOpen(url){
    this.openPageService.open(url);
  }
}
