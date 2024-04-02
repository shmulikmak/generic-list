import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../config/api.config';
import { DataType } from '../enums/type.enums';
import { Result } from '../models/http.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getItems(type: DataType): Observable<Result> {
    return this.http.get<Result>(`${config.BASE_URL}/${type}`);
  }

  searchItems(type: DataType, term: string): Observable<Result> {
    return this.http.get<Result>(`${config.BASE_URL}/${type}/search?q=${term}`);
  }

  getItem(type: DataType, id: string): Observable<Result> {
    return this.http.get<Result>(`${config.BASE_URL}/${type}/${id}`);
  }
}