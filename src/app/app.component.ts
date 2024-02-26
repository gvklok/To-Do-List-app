import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './app-list-item/app-list-item.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



interface List {
  name: string;
  items: ListItem[]; // Array of ListItem objects
  tag?: string;
}

interface ListItem {
  text: string;
  completed: boolean;
  dueDate?: Date;
}

@Component({
  //all of these components are standalone since from my understanding its easier to manage by having multiple smalller
  //components and its being used more in angular 17
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, FormsModule, ItemComponent, MatSlideToggleModule, MatButtonModule,MatIconModule]
})
export class AppComponent {
  title = 'Create a new to do list';
  // Variables for managing new list creation
  lists: List[] = [];
  newListName: string = '';
  selectedListIndex: number = -1;
  newItemText: string = '';
  newItemDueDate: string = '';
  newTag: string = '';
  tagOptions: string[] = [
    "Work",
    "Personal",
    "School",
    "Health",
    "Fitness",
    "Shopping",
    "Home",
    "Family",
    "Friends"
  ];
  selectedTag: string = '';
  filterTag: string = '';
  filteredLists: List[] = [];
  listAdded: boolean = false;
  filter: boolean = false;

  //innitially filtered lists is all lists since we hae not applied any filters yet
  constructor() {
    this.filteredLists = [...this.lists];
  }

  addList() {
    //only add a list if theres a name typed
    if (this.newListName) {
      const newList: List = { name: this.newListName, items: [], tag: this.selectedTag };
      this.lists.push(newList);
      this.newListName = '';
      this.selectedTag = '';
      //keeping track if a list has been added so we can properly display like filter lists for example
      this.listAdded = true;
      //filter list based on current filter
this.filterLists(this.filterTag)
    }
  }

  //this is selects a list by assigning selectedListIndex to the list index or -1 to deselect and essentially represent no list
  toggleList(index: number) {
    if (this.selectedListIndex === index) {
      this.selectedListIndex = -1; // Deselect the list
    } else {
      this.selectedListIndex = index; // Select the clicked list
    }
  }

  addItem(event: Event) {
    event.stopPropagation(); // Prevent event from propagating to parent(so stopping click from inside list item to deselect list)

    if (this.newItemText ) {
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
    if (this.lists.length === 0) {
      this.listAdded = false;
    }
  }


  filterLists(category: string) {    

    if (this.filter && category) {
      this.filteredLists = this.lists.filter((list) => list.tag === this.filterTag);
    } else {
      this.filteredLists = this.lists;
    }
  }
}
