import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataType } from '../../enums/type.enums';

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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getItems(this.type).subscribe(response => {
      this.data = response.data;
      this.schema = response.schema;
      this.dataKeys = Object.keys(this.schema?.items?.properties);
    });
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
