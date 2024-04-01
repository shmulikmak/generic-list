import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchResultComponent } from './components/search-result/search-result.component';

import { UsersComponent } from './pages/users/users.component';
import { PhotosComponent } from './pages/photos/photos.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'photos', component: PhotosComponent },
  { path: ':type/:id', component: SearchResultComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}