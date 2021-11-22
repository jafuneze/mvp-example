import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ContainerComponent } from './app-root-ui/container/container.component';

import { AppRootUiComponent } from './app-root-ui/app-root-ui.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContainerComponent,
    AppRootUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
