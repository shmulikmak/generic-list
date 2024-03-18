import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  users$: Observable<User[]> = this.userService.getUsers();

  constructor(private userService: UserService) {}

  // ngOnInit(): void {
  //   this.userService.getUsers().subscribe((users) => {
  //     this.users = users;
  //   });
  // }
}
