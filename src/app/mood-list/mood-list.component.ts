import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CreateUserServiceService } from '../create-user-service.service';
import { User } from '../user';
import { UserListComponent } from '../user-list/user-list.component';


@Component({
  selector: 'app-mood-list',
  templateUrl: './mood-list.component.html',
  styleUrls: ['./mood-list.component.css']
})
export class MoodListComponent {

  userList: User[];

  user: User = new User();
  User = {
    userID: 0,
    userName: '',
    mood: '',
    userMessage: ''
  }
  public cookie_name = '';
  private all_cookies: any = '';

  constructor(private createUserServiceService: CreateUserServiceService, private cookieService: CookieService) { }



  public setCookie(user: User) {
    console.log("User in cookie", user)
    this.cookieService.set("user-id", String(user.userID), 1);
    this.cookieService.set("user-mood", user.mood, 1);
  }

  public getCookie(name: any) {
    return this.cookieService.check(name);
  }

  public deleteAll() {
    this.cookieService.deleteAll();
  }

  ngOnInit(): void {

  }

  open(mood: any) {
    this.user.mood = mood;


    //alert('Open' + this.user);
  }

  display = false;
  showMsg: boolean = false;
  onSubmit() {
    console.log("In Submit=", this.user);
    console.log("In submit=", this.cookieService.get("user-mood"))

    if (!this.cookieService.get("user-mood")) {
      this.createUserServiceService.addUser(this.user).subscribe(data => {
        console.log("POST CALL=", data);
        this.user = { ...data };
        console.log("POST CALL=", this.user);
        this.setCookie(this.user);
      });

    } else {
      alert("Sorry, you have already submitted your response for today, try again tomorrow!")
    }
    this.showMsg = true;
    this.display = !this.display;

  }

  receiveMessage($event) {
    console.log("IN RECEIVE=");
    this.userList = $event;
    console.log("IN RECEIVE=", this.userList);
  }

}
