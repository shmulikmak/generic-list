import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { PhotosComponent } from './pages/photos/photos.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    UsersComponent,
    PhotosComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
