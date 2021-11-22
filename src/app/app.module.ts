import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ContainerComponent } from './app-root-ui/container/container.component';

import { AppRootUiComponent } from './app-root-ui/app-root-ui.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ContainerComponent,
    AppRootUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
