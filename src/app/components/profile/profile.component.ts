import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public user: User | null = null;
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    this.user = this.usersService.getUser();
  }
}
