import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ListItem {
  text: string;
  completed: boolean;
  dueDate?: Date;
}

@Component({
  standalone: true,
  selector: 'app-list-item',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ItemComponent {
  @Input() item: ListItem;
  @Output() toggle = new EventEmitter();

  constructor() {
    this.item = { text: '', completed: false };
  }

  toggleCompletion() {
    this.item.completed = !this.item.completed;
  }
  

  isPastDue(dueDate: Date | undefined): boolean {
    return dueDate !== undefined && dueDate < new Date();
  }

  get dueDateColor(): string {
    if (this.isPastDue(this.item.dueDate)) {
      return 'red';
    } else if (this.item.dueDate) {
      return 'green';
    } else {
      return 'black'; // Default color for no due date
    }
  }
}
