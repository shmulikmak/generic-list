import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { Photo } from '../models/photo.model';
import { config } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getItems(type: string): Observable<{ data: User[] | Photo[], schema: any }> {
    return this.http.get<{ data: User[] | Photo[], schema: any }>(`${config.BASE_URL}?type=${type}`);
  }
}