import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../item.interface';

@Component({
  selector: 'app-list-ui',
  templateUrl: './list-ui.component.html',
  styleUrls: ['./list-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListUiComponent {
  @Input() items: Item[]  | null;
  @Input() title: string;
}
