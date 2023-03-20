import { Component, EventEmitter, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service/public-api';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] | undefined;
  //users_with_messages: User[] | undefined;
  //display = false;

  @Output() messageEvent = new EventEmitter<User[]>();
  sendMessage() {
    console.log("IN CHILD: USER LIST=", this.users)
    this.messageEvent.emit(this.users)
  }
  constructor(private userListService: UserService) { }


  ngOnInit(): void {
    this.getUsers();

  }

  private getUsers() {
    this.userListService.getUserList().subscribe(data => {
      this.users = data;
      this.sendMessage();
      //const filteredArr = data.filter(val => { return val.userMessage !== '' && val.userMessage !== null });
      //return this.users_with_messages = filteredArr;
    })
  }


}
