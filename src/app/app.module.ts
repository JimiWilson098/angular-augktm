import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { EventsAppComponent } from './events-app.component';
import { HelloComponent } from './hello.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    EventsAppComponent,
    HelloComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  bootstrap:    [ EventsAppComponent ]
})
export class AppModule { }
