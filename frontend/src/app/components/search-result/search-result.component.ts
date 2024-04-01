import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    const type = this.route.snapshot.paramMap.get('type') ?? '';
    const id = this.route.snapshot.paramMap.get('id') ?? '';

    this.dataService.getItem(type, id).subscribe(item => {
      this.item = item;
    });
  }
}