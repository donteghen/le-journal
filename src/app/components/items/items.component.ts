
import { Component, Input, OnInit } from '@angular/core';
import { Items } from 'src/app/model/items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
 @Input() items:Items;
  constructor() { }

  ngOnInit() {
    console.log(this.items);
    console.log('items component');
  }

}
