import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { DataType } from '../../enums/type.enums';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Result } from '../../models/http.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  @Input() type!: DataType;
  data: any = [];
  schema: any;
  dataKeys: string[] = [];
  searchTerm: string = '';
  selectedIndex: number = -1;

  private searchSubject = new Subject<string>();

  constructor(
    private dataService: DataService,
    private router: Router,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.dataService.getItems(this.type).subscribe((response) => {
      this.setResults(response);
    });

    this.searchSubject
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((searchTerm: string) =>
          this.dataService.searchItems(this.type, searchTerm)
        )
      )
      .subscribe((response) => {
        this.setResults(response);
      });
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  onSearch() {
    this.selectedIndex = -1;
    this.searchSubject.next(this.searchTerm);
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp' && this.selectedIndex > 0) {
      this.selectedIndex--;
      this.scrollToSelectedItem();
    } else if (event.key === 'ArrowDown' && this.selectedIndex < this.data.length - 1
    ) {
      this.selectedIndex++;
      this.scrollToSelectedItem();
    } else if (event.key === 'Enter' && this.selectedIndex !== -1) {
      this.onSelectItem(this.data[this.selectedIndex]);
    }
  }

  onSelectItem(item: any) {
    this.router.navigate([this.type, item.id]);
  }

  private scrollToSelectedItem() {
    const selectedElement = this.el.nativeElement.querySelector('.card.selected');
    if (selectedElement) {
      selectedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
    
  private setResults(response: Result) {
    this.data = response.data;
    this.schema = response.schema;
    this.dataKeys = Object.keys(this.schema?.items?.properties);
  }
}