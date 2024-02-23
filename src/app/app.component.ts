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
  newItemText: string = ''; // Declare newItemText property
  newItemDueDate: string = ''; // Declare newItemDueDate property

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

  addItem() {
    if (this.newItemText && this.selectedListIndex !== -1) {
      const dueDate = this.newItemDueDate ? new Date(this.newItemDueDate) : undefined;
      this.lists[this.selectedListIndex].items.push({ text: this.newItemText, completed: false, dueDate: dueDate });
      this.newItemText = ''; // Reset newItemText
      this.newItemDueDate = ''; // Reset newItemDueDate
    }
  }
  isPastDue(dueDate: Date): boolean {
    return dueDate < new Date();
  }
  

  deleteItem(listIndex: number, itemIndex: number) {
    this.lists[listIndex].items.splice(itemIndex, 1);
  }

  deleteList(index: number) {
    this.lists.splice(index, 1);
    this.selectedListIndex = -1; // Reset selected list index
  }
}
