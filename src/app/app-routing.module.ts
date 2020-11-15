import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CannotBeFoundComponent } from './cannot-be-found/cannot-be-found.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'movie-detail', component: MovieDetailComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: CannotBeFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
