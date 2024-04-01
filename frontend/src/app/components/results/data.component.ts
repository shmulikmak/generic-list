import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { DataType } from '../../enums/type.enums';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  @Input() type!: DataType;
  data: any = [];
  schema: any;
  dataKeys: string[] = [];
  searchTerm: string = '';
  selectedIndex: number = -1;

  private searchSubject = new Subject<string>();

  constructor(private dataService: DataService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getItems(this.type).subscribe(response => {
      this.data = response.data;
      this.schema = response.schema;
      this.dataKeys = Object.keys(this.schema?.items?.properties);
    });

    this.searchSubject.pipe(
      debounceTime(300), 
      distinctUntilChanged(),
      switchMap(searchTerm => this.dataService.searchItems(this.type, searchTerm))
    ).subscribe(response => {
      this.data = response.data;
      this.schema = response.schema;
      this.dataKeys = Object.keys(this.schema?.items?.properties);
    });
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  onSearch() {
    this.selectedIndex = -1;
    this.dataService.searchItems(this.type, this.searchTerm).subscribe(response => {
      this.data = response.data;
    });
  }
  
  onKeyDown(event: KeyboardEvent) {
    // TODO: need to check
    if (event.key === 'ArrowUp' && this.selectedIndex > 0) {
      this.selectedIndex--;
    } else if (event.key === 'ArrowDown' && this.selectedIndex < this.data.length - 1) {
      this.selectedIndex++;
    } else if (event.key === 'Enter' && this.selectedIndex !== -1) {
      this.onSelectItem(this.data[this.selectedIndex]);
    }
  }
  
  onSelectItem(item: any) {
    this.router.navigate([this.type, item.id]);
  }
}
