import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { Photo } from '../models/photo.model';
import { config } from '../config/api.config';
import { DataType } from '../enums/type.enums';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getItems(type: DataType): Observable<{ data: User[] | Photo[], schema: any }> {
    return this.http.get<{ data: User[] | Photo[], schema: any }>(`${config.BASE_URL}?type=${type}`);
  }

  searchItems(type: DataType, term: string): Observable<{ data: User[] | Photo[], schema: any }> {
    return this.http.get<{ data: User[] | Photo[], schema: any }>(`${config.BASE_URL}?type=${type}&search=${term}`);
  }
  
  getItem(type: string, id: string): Observable<any> {
    return this.http.get<any>(`${config.BASE_URL}?type=${type}&id=${id}`);
  }
}