import { Component, Input } from '@angular/core';

interface ListItem {
  text: string;
  completed: boolean;
  dueDate?: Date;
  
}

@Component({
  selector: 'app-list-item',
  standalone: true,
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.css']

})
export class AppListItemComponent {
  @Input() item: ListItem;

  constructor() {
    // Optionally initialize the item with an empty object
    // if it's not guaranteed to be provided through input binding:
    this.item = { text: '', completed: false };
  }
  toggleCompletion() {
    this.item.completed = !this.item.completed;
  }
}
