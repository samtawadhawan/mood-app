import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mood-app';

  public cookie_name = '';
  private all_cookies: any = '';

  constructor() {

  }



  ngOnInit(): void {

  }


}
