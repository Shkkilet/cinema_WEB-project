import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie, MOVIES } from '../../data/movies';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule,MovieCardComponent, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  movies = MOVIES;
  searchTerm = '';


  get filteredMovies(): Movie[] {
    return this.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
