import { TopStoriesComponent } from './top-stories/top-stories.component';
import { ComponentsModule } from './../components/components.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopStoriesRoutingModule } from './top-stories-routing.module';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TopStoriesComponent],
  imports: [
    CommonModule, ComponentsModule,
    TopStoriesRoutingModule
  ]
})
export class TopStoriesModule { }
