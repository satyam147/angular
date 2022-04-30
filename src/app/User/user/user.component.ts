import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input() name:string;
  // name: string;

  constructor() {
    this.name = 'user';
  }

  ngOnInit(): void {
  }

}
