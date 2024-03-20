import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  schema: any;
  userKeys: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getItems('users').subscribe(response => {
      this.users = response.data;
      this.schema = response.schema;
      this.userKeys = Object.keys(this.schema?.items?.properties);
    });
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}