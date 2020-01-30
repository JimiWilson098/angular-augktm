import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { EventsAppComponent } from './events-app.component';
import { HelloComponent } from './hello.component';
import { EventsListComponent } from './events/events-list.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    EventsAppComponent,
    HelloComponent,
    EventsListComponent
  ],
  bootstrap:    [ EventsAppComponent ]
})
export class AppModule { }
