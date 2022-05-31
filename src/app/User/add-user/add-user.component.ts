import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  name: string;
  @Output() userCreated = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit(): void {
  }

  createUser() {
    this.userCreated.emit(this.name);
    this.name = '';
  }
}
