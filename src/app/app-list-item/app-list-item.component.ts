import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ListItem {
  text: string;
  completed: boolean;
  //optional due date
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

// Initialize the item property with default values since we aere getting them from input
  constructor() {
    this.item = { text: '', completed: false };
  }
  
//returns true if due date passed
  isPastDue(dueDate: Date | undefined): boolean {
    return dueDate !== undefined && dueDate < new Date();
  }
}
