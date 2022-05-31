import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  btnStatus: boolean = false;
  name: string;
  users: string[] = [];

  constructor() {
    this.toggleBtnStatus();
  }

  toggleBtnStatus() {
    setTimeout(() => this.btnStatus = true, 3000);
  }

  createUser(name: string) {
    if (name != '') {
      this.users.push(name);
      // this.name = '';
    }
    console.log(this.users);
  }

  ngOnInit(): void {
  }

}
