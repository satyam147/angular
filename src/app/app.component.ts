import {Component} from '@angular/core';

enum Dir {
  Up = 'UP',
  Down  = 'down',
  Left = 'left',
}

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public name: string;
  private un: undefined = undefined;
  protected nl: null = null;
  user: string = '';
  tup: [string, number];
  dir:'up' | 'down' | 'left' | 'right';

  constructor() {
    // console.log('tst');
    // this.updateName();
    // this.dir = 'right';
    // console.log(this.un == this.nl);
    // this.un.toUpperCase();
    // this.updateName();
  }

  public updateName() {
    // this.name = 'Test';
    // this.user = 'user';
    let result: string = AppComponent.add(1, 2);
    console.log(result);
    this.tup = ['user',1];
    this.tup.push('ted');
    this.tup[0] = 'en';
    this.tup[1] = 1;
    // this.tup[0] = 'user2';
    // this.tup[1] = '';
    console.log(this.tup);
    console.log(Dir.Up);

  }

  test():never{
    // let user = '';
    // console.log('test');
    // console.log('test200');
    throw {name: 'test',message: 'this is a error'};
  }

  public static add(a: number, b: number): string {
    let result: number = a + b;
    return result.toString();
  }
}

AppComponent.add(1,2);
