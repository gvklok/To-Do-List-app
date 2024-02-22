// app.component.ts

import { Component } from '@angular/core';
import { ListItem } from './app-list-item/app-list-item.component'; // Update the path
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface List {
  name: string;
  items: ListItem[];
}

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
  title = 'My To-Do List';

  lists: List[] = [];
  newListName: string = '';
  selectedListIndex: number = -1;

  addList() {
    if (this.newListName) {
      const newList: List = { name: this.newListName, items: [] };
      this.lists.push(newList);
      this.newListName = '';
    }
  }

  selectList(index: number) {
    this.selectedListIndex = index;
  }

  addItem(newItem: string) {
    if (newItem && this.selectedListIndex !== -1) {
      this.lists[this.selectedListIndex].items.push({ text: newItem, completed: false });
    }
  }

  deleteItem(listIndex: number, itemIndex: number) {
    this.lists[listIndex].items.splice(itemIndex, 1);
  }

  deleteList(index: number) {
    this.lists.splice(index, 1);
    this.selectedListIndex = -1; // Reset selected list index
  }
}
