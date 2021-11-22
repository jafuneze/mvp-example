import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Item } from '../item.interface';
import { FormGroup } from '@angular/forms';
import { ItemsPresenter } from './presenter/items-presenter';

@Component({
  selector: 'app-list-ui',
  templateUrl: './list-ui.component.html',
  styleUrls: ['./list-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListUiComponent implements OnInit {
  @Input() items: Item[]  | null;
  @Input() title: string;
  @Output() add: EventEmitter<Item> = new EventEmitter();

  constructor( private presenter: ItemsPresenter ){}

  get itemGroup() : FormGroup {
    return this.presenter.itemsForm;
  }

  ngOnInit() : void {
    this.presenter.add$.subscribe( item => this.add.emit(item));
  }

  onSubmit(): void {
    this.presenter.addItemSubmit();
    this.itemGroup.reset()
  }
}
