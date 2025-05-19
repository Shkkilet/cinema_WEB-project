import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Seat } from '../../data/seat';
@Component({
  selector: 'app-cinema-hall',
  imports: [CommonModule],
  templateUrl: './cinema-hall.component.html',
  styleUrl: './cinema-hall.component.scss'
})
export class CinemaHallComponent implements OnInit{
  @Input() rows: number = 5;
  @Input() cols: number = 8;

    @Output() selectedSeatsChange = new EventEmitter<Seat[]>();

  seats: Seat[][] = [];

    ngOnInit() {
    this.generateSeats();
  }
  generateSeats() {
    this.seats = [];
    for (let row = 0; row < this.rows; row++) {
      const seatRow: Seat[] = [];
      for (let col = 0; col < this.cols; col++) {
        seatRow.push({
          row,
          col,
          reserved: Math.random() < 0.2, // 20% уже заброньовано
          selected: false
        });
      }
      this.seats.push(seatRow);
    }
  }

  toggleSeat(seat: Seat) {
    if (seat.reserved) return;
    seat.selected = !seat.selected;
    this.selectedSeatsChange.emit(this.getSelectedSeats());
  }

  getSelectedSeats(): Seat[] {
    return this.seats.flat().filter(seat => seat.selected);
  }
  }
