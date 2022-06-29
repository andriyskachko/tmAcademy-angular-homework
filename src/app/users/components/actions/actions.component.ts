import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { IUSer } from '../../User';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  @Output() onDeleteUsers: EventEmitter<any> = new EventEmitter();
  @Output() onSortAscending: EventEmitter<string> = new EventEmitter();
  @Output() onSortDescending: EventEmitter<string> = new EventEmitter();
  @Output() onSelectAllUsers: EventEmitter<any> = new EventEmitter();
  @Output() onSearchUsers: EventEmitter<string> = new EventEmitter();

  constructor() {}

  selectedAll: boolean = false;
  searchUser: string = '';

  onSearch() {
    this.onSearchUsers.emit(this.searchUser);
  }

  onSelectAll() {
    this.selectedAll = !this.selectedAll;
    this.onSelectAllUsers.emit(this.selectedAll);
  }

  onDelete() {
    this.onDeleteUsers.emit();
    console.log('Deleted Users');
  }

  onSort(how: string) {
    switch (how) {
      case 'ASC':
        this.onSortAscending.emit(how);
        break;
      case 'DESC':
        this.onSortDescending.emit(how);
        break;
    }
    console.log('Sorted ' + how);
  }

  ngOnInit(): void {}
}
