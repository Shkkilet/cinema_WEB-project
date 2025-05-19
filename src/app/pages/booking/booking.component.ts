import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seat } from '../../data/seat';
import { CinemaHallComponent } from '../../components/cinema-hall/cinema-hall.component';
@Component({
  selector: 'app-booking',
  imports: [CommonModule,CinemaHallComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit {
  movieId!: number;
  selectedSeats: Seat[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
  }
  onSelectedSeatsChange(seats: Seat[]) {
    this.selectedSeats = seats;
  }
}
