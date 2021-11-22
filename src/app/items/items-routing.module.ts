import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUiComponent } from './list-ui/list-ui.component';
import { itemsRoutes } from './items.routes';

const routes: Routes = [
  {
    path:'',
    component: ListUiComponent,
    children: itemsRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
