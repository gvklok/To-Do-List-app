import { CommonModule } from '@angular/common';

import { Component, Input } from '@angular/core';

export interface ListItem {
  text: string;
  completed: boolean;
  dueDate?: Date;
}

@Component({
  standalone: true,
  selector: 'app-list-item',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.css'],
  imports: [CommonModule]
})
export class AppListItemComponent {
  @Input() item: ListItem;

  constructor() {
    this.item = { text: '', completed: false };
  }

  toggleCompletion() {
    this.item.completed = !this.item.completed;
  }

  isPastDue(dueDate: Date | undefined): boolean {
    return dueDate !== undefined && dueDate < new Date();
  }
}
