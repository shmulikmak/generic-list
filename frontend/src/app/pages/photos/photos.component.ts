import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: any[] = [];
  schema: any;
  photoKeys: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getItems('photos').subscribe(response => {
      this.photos = response.data;
      this.schema = response.schema;
      this.photoKeys = Object.keys(this.schema?.items?.properties);
    });
  }
}