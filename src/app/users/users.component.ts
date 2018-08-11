import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {ProcessType} from '../process';
import {ProcessTypeService} from '../services/process-type.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isEdit = false;
  newItem?: User;

  constructor(
    public service: UserService
  ) { }

  ngOnInit() {
    this.service.update();
  }

  edit() {
    this.isEdit = true;
  }

  save(item: User) {
    this.service.updateItem(item, item.id).subscribe(res => {
      if (res) {
        this.isEdit = false;
      }
    });
  }

  saveNew() {
    this.service.addItem(this.newItem).subscribe(res => {
      if (res) {
        this.service.update();
      }
    });
  }

  add(): void {
    this.newItem = new User();
  }

  cancel() {
    this.isEdit = false;
    this.service.update();
  }

}
