import { Component, Input, Output, EventEmitter } from '@angular/core';

interface ListItem {
  text: string;
  completed: boolean;
  dueDate?: Date;
}

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent {
  @Input() list: ListItem[] = [];
  @Output() deleteList = new EventEmitter<number>();
  emitAddItem = new EventEmitter<string>();

  addNewItem(newItem: string) {
    this.emitAddItem.emit(newItem);
  }

  deleteItem(index: number) {
    this.list.splice(index, 1); // Delete item from the local list
  }
}
