import { catchError, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements OnInit, OnDestroy {
  allPhotos: Photo[] = [];
  displayedPhotos: Photo[] = [];
  batchSize: number = 10;
  currentBatchIndex: number = 0;
  private unsubscribe$ = new Subject<void>();

  constructor(private photoService: PhotoService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.photoService.getPhotos().pipe(
      catchError((error) => {
        console.error('Error occurred while fetching photos:', error);
        
        return [];
      }),
      takeUntil(this.unsubscribe$)
    ).subscribe((photos: Photo[]) => {
      this.allPhotos = photos;
      this.displayedPhotos = this.getNextBatch();
      this.cdr.markForCheck();
    });
  }
  
  loadMorePhotos(): void {
    this.displayedPhotos = [...this.displayedPhotos, ...this.getNextBatch()];
    this.cdr.markForCheck();
  }  
  
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getNextBatch(): Photo[] {
    const nextBatch = this.allPhotos.slice(this.currentBatchIndex, this.currentBatchIndex + this.batchSize);
    this.currentBatchIndex += this.batchSize;
    
    return nextBatch;
  }
}
