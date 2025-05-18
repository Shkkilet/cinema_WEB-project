import { Component, Input } from '@angular/core';
import { Movie } from '../../data/movies';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() movie!: Movie;
}
