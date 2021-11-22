import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ItemsComponent } from './items/items.component';
import { PresenterComponent } from './items/presenter/presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ItemsComponent,
    PresenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
