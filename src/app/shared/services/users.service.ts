import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private user: User | null = null;

  public setUser(user: User | null): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  public getUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  public getId(): string {
    const user = this.getUser();
    return user ? user._id : '';
  }
}
