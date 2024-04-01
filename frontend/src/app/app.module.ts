import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataComponent } from './components/results/data.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

import { UsersComponent } from './pages/users/users.component';
import { PhotosComponent } from './pages/photos/photos.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  declarations: [
    AppComponent,
    DataComponent,
    UsersComponent,
    PhotosComponent,
    SearchResultComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
