import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../interfaces/user';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class userService {
  //URI's
  private urlUsers = 'http://localhost:3000/users';


  //BUILDER
  constructor(private http: HttpClient) { }

  //USERS
  getUsers(): Observable<user[]> {
    return this.http.get<user[]>(this.urlUsers);
  }

  getUserById(id: string): Observable<user> {
    return this.http.get<user>(`${this.urlUsers}/${id}`);
  }

  addUser(user: user): Observable<user> {
    console.log(user);

    return this.http.post<user>(this.urlUsers, user);
  }
  checkUserEmail(email: string): Observable<boolean> {
    return this.http.get<user[]>(`${this.urlUsers}?email=${email}`).pipe(
      map(users => users.filter(user => user.email === email).length === 0)
    );
  }


  checkUserUid(username: string): Observable<boolean> {
    return this.http.get<user[]>(`${this.urlUsers}?username=${username}`).pipe(
      map(users => users.filter(user => user.username === username).length === 0)
    );
  }

  updateUser(id: string, user: user): Observable<user> {
    return this.http.put<user>(`${this.urlUsers}/${id}`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.urlUsers}/${id}`);
  }

  getUserByUid(username: string): Observable<user> {
    return this.http.get<user[]>(`${this.urlUsers}?username=${username}`).pipe(
      map(users => {
        const user = users.find(user => user.username === username);
        if (user) {
          return user;
        } else {
          throw new Error(`No se encontró ningún usuario con userUid: ${username}`);
        }
      })
    );
  }

}
