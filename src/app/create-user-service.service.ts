import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CreateUserServiceService {
  private baseURL = "http://localhost:8080/user"
  constructor(private httpClient: HttpClient) { }
  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}`, user);

  }
}



