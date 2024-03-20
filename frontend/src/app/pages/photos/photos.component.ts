import { Component } from '@angular/core';
import { DataType } from '../../enums/type.enums';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent {
  type = DataType.Photos;
}
