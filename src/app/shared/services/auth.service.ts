import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { BASE_URL } from 'src/app/shared/constants';
import { User } from '../models/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private user: UsersService) {}

  public login(email: string, password: string): Observable<Object> {
    return this.http.post<User>(this.getUrl(), { email, password }).pipe(
      tap((res: User) => {
        this.user.setUser(res);
      }),
      catchError((err) => throwError(() => err))
    );
  }

  public isLoggedIn(): boolean {
    return !!this.user.getUser();
  }

  private getUrl(): string {
    return `${BASE_URL}/users/login`;
  }

  public logout(): void {
    this.user.setUser(null);
  }
}
