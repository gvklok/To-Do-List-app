// app.component.ts

import { Component } from '@angular/core';
import { ListItem } from './app-list-item/app-list-item.component'; // Update the path
import { CommonModule,  } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
  title = 'My To-Do List';

  lists: ListItem[][] = [[]];
  newListName: string = '';
  selectedListIndex: number = -1;

  addList() {
    if (this.newListName) {
      this.lists.push([]);
      this.newListName = '';
    }
  }

  selectList(index: number) {
    this.selectedListIndex = index;
  }

  addItem(newItem: string) {
    if (newItem && this.selectedListIndex !== -1) {
      this.lists[this.selectedListIndex].push({ text: newItem, completed: false });
    }
  }

  deleteItem(listIndex: number, itemIndex: number) {
    this.lists[listIndex].splice(itemIndex, 1);
  }

  deleteList(index: number) {
    this.lists.splice(index, 1);
    this.selectedListIndex = -1; // Reset selected list index
  }
}
