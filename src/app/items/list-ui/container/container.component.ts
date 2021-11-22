import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemService } from '../../item.service';
import { Observable } from 'rxjs';
import { Item } from '../../item.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent{
  items$: Observable<Item[]> = this.itemService.getItems()

  constructor( private itemService: ItemService ) { }

}
