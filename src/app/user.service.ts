import { HttpClient } from '@angular/common/http';
import { Injectable, ɵisObservable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserListComponent } from './user-list/user-list.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8080/user"
  constructor(private httpClient: HttpClient) { }
  getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);


  }
}
