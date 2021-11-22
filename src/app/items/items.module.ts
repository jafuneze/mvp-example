import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ListUiComponent } from './list-ui/list-ui.component';
import { ContainerComponent } from './list-ui/container/container.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListUiComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ItemsModule { }
