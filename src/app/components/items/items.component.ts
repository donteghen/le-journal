
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Items } from 'src/app/model/items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  
 @Input() items:Items;
 @Output() toOpen : EventEmitter<any> = new EventEmitter();
 @Output() open: EventEmitter<any> = new EventEmitter();
  constructor() { }
pageOpen(url:string){
  this.toOpen.emit(url);
}
}
