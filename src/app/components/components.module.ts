import { TimeAgoPipe } from './../shared/time-ago.pipe';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ItemComponent, ItemsComponent, TimeAgoPipe],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
