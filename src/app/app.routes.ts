import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { BookingComponent } from './pages/booking/booking.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booking/:id', component: BookingComponent }];
