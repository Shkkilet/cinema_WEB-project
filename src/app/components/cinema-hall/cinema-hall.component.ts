import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Seat } from '../../data/seat';
import { BookingService } from '../../services/booking.service';
@Component({
  selector: 'app-cinema-hall',
  imports: [CommonModule],
  templateUrl: './cinema-hall.component.html',
  styleUrl: './cinema-hall.component.scss'
})
export class CinemaHallComponent implements OnInit{
  @Input() movieId!: number;
  seats: number[] = Array.from({ length: 30 }, (_, i) => i + 1);
  bookedSeats: number[] = [];
  selectedSeats: number[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookedSeats = this.bookingService.getBookings(this.movieId);
  }

  toggleSeat(seat: number): void {
    if (this.bookedSeats.includes(seat)) return;

    if (this.selectedSeats.includes(seat)) {
      this.selectedSeats = this.selectedSeats.filter(s => s !== seat);
    } else {
      this.selectedSeats.push(seat);
    }
  }

  isBooked(seat: number): boolean {
    return this.bookedSeats.includes(seat);
  }

  isSelected(seat: number): boolean {
    return this.selectedSeats.includes(seat);
  }
  }
