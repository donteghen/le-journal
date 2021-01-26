import { TimeAgoPipe } from './../shared/time-ago.pipe';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [
    CommonModule,IonicModule,
  ]
})
export class ComponentsModule { }
