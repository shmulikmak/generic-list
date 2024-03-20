import { Component } from '@angular/core';
import { DataType } from '../../enums/type.enums';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  type = DataType.Users;
}