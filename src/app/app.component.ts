import { Component } from '@angular/core';

interface ListItem {
  text: string;
  completed: boolean;
  dueDate?: Date;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To-Do List'; 

  lists: ListItem[][] = [];
  newListName: string = '';

  addList() {
    if (this.newListName) {
      this.lists.push([]);
      localStorage.setItem('lists', JSON.stringify(this.lists));
      this.newListName = '';
    }
  }

  // Receive events from child components for adding and deleting items/lists
  addNewItem(listIndex: number, newItem: string) {
    this.lists[listIndex].push({ text: newItem, completed: false }); // Add the new item to the list
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }
  

  deleteItem(listIndex: number, itemIndex: number) {
    this.lists[listIndex].splice(itemIndex, 1);
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }

  deleteList(listIndex: number) {
    this.lists.splice(listIndex, 1);
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      const storedLists = localStorage.getItem('lists');
      if (storedLists) {
        this.lists = JSON.parse(storedLists);
      }
    }
  }
}  
