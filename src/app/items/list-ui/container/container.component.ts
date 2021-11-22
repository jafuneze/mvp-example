import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemService } from '../../item.service';
import { Observable, Subject } from 'rxjs';
import { Item } from '../../item.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent{
  private itemAdd: Subject<Item> = new Subject();
 
  items$: Observable<Item[]> = this.itemService.getItems()

  constructor( private itemService: ItemService ) {}

  add(item: Item) : void {
    // send hero added to db
    this.itemAdd.next(item)
  }

}
