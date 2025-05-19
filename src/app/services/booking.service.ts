import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private storageKey = 'bookings';

  getBookings(movieId: number): number[] {
    const allBookings = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
    return allBookings[movieId] || [];
  }

  saveBooking(movieId: number, seats: number[], user: { name: string, phone: string, email: string }) {
    const allBookings = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
    allBookings[movieId] = [...(allBookings[movieId] || []), ...seats];
    localStorage.setItem(this.storageKey, JSON.stringify(allBookings));

    const userData = { ...user, seats };
    console.log('Збережено бронювання:', userData);
  }
}
