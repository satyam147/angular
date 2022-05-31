import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserComponent } from './User/user/user.component';
import { UsersComponent } from './User/users/users.component';
import {FormsModule} from "@angular/forms";
import { AddUserComponent } from './User/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserComponent,
    UsersComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    console.log(AppComponent.name);
  }
}
