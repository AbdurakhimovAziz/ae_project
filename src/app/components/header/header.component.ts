import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private usersService: UsersService,
    private auth: AuthService,
    private router: Router
  ) {}

  get userName(): string {
    const user = this.usersService.getUser();
    return user ? user.firstName + ' ' + user.lastName : '';
  }

  public logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
