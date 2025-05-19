import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaHallComponent } from '../../components/cinema-hall/cinema-hall.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, CinemaHallComponent, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  movieId!: number;

  form!: FormGroup;

  @ViewChild(CinemaHallComponent) cinemaHallComponent!: CinemaHallComponent;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.movieId = +this.route.snapshot.paramMap.get('id')!;
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid || this.cinemaHallComponent.selectedSeats.length === 0) return;

    const userData = this.form.value as {
      name: string;
      phone: string;
      email: string;
    };

    const selectedSeats = this.cinemaHallComponent.selectedSeats;

    this.bookingService.saveBooking(this.movieId, selectedSeats, userData);
    alert('Бронювання збережено успішно!');
  }
}
