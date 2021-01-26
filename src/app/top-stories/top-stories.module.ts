import { TopStoriesComponent } from './top-stories/top-stories.component';
import { ComponentsModule } from './../components/components.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopStoriesRoutingModule } from './top-stories-routing.module';
import { ItemComponent } from '../components/item/item.component';
import { ItemsComponent } from '../components/items/items.component';
import { TimeAgoPipe } from '../shared/time-ago.pipe';
import { IonicModule } from '@ionic/angular';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TopStoriesComponent, ItemComponent, ItemsComponent, TimeAgoPipe],
  imports: [
    CommonModule, ComponentsModule, IonicModule,
    TopStoriesRoutingModule
  ]
})
export class TopStoriesModule { }
