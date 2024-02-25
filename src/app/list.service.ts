import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface List {
  name: string;
  items: ListItem[];
  tag?: string;
}

export interface ListItem {
  text: string;
  completed: boolean;
  dueDate?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listsSubject = new BehaviorSubject<List[]>([]);
  lists$ = this.listsSubject.asObservable();

  get lists(): List[] {
    return this.listsSubject.value;
  }

  addList(list: List): void {
    const lists = [...this.lists, list];
    this.listsSubject.next(lists);
  }

  selectList(index: number): void {
    this.selectedListIndex = index;
  }

  addItem(newItem: ListItem): void {
    const list = this.lists[this.selectedListIndex];
    list.items.push(newItem);
    this.listsSubject.next(this.lists);
  }

  deleteItem(itemIndex: number): void {
    const list = this.lists[this.selectedListIndex];
    list.items.splice(itemIndex, 1);
    this.listsSubject.next(this.lists);
  }

  deleteList(): void {
    this.lists.splice(this.selectedListIndex, 1);
    this.selectedListIndex = -1;
    this.listsSubject.next(this.lists);
  }

  private selectedListIndex: number = -1;
}
