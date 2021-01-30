
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent{
  @Input() item: Item;
  @Output() toOpen : EventEmitter<string> = new EventEmitter();


  openPage(url: string){
    this.toOpen.emit(url);
  }

}
