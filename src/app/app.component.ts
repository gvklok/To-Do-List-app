import { Component } from '@angular/core';
import { ItemComponent } from './app-list-item/app-list-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


interface List {
  name: string;
  items: ListItem[]; // Array of ListItem objects
}

interface ListItem {
  text: string;
  completed: boolean;
  dueDate?: Date;
}

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ItemComponent, FormsModule, RouterModule]
})
export class AppComponent {
  title = 'Create a new to do list';

  lists: List[] = [];
  newListName: string = '';
  selectedListIndex: number = -1;
  newItemText: string = '';
  newItemDueDate: string = '';

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
      this.lists[this.selectedListIndex].items.push({
        text: this.newItemText,
        completed: false,
        dueDate: dueDate
      });
      this.newItemText = '';
      this.newItemDueDate = '';
    }
  }

  deleteItem(listIndex: number, itemIndex: number) {
    this.lists[listIndex].items.splice(itemIndex, 1);
  }

  deleteList(index: number) {
    this.lists.splice(index, 1);
    this.selectedListIndex = -1;
  }

}
