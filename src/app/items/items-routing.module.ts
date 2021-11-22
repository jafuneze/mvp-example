import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { itemsRoutes } from './items.routes';

const routes: Routes = itemsRoutes

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
