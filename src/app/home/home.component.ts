import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  rangeDates!: Date[];
  minDate!: Date;
  adults: number = 0;
  children: number = 0;
  rooms: number = 1;
  maxAdults: number = 10;

  ngOnInit() {
    const today = new Date();
    this.minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  }

  // Method to format the date
  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
  }

  // Method to format the placeholder date
  formatDatePlaceholder(): string {
    const start = new Date();
    const end = new Date();
    end.setDate(start.getDate() + 10);
    return `${this.formatDate(start)} - ${this.formatDate(end)}`;
  }


  changeAdults(event: Event, change: number) {
    event.stopPropagation();
    this.adults = Math.max(0, Math.min(this.maxAdults, this.adults + change));
  }

  changeChildren(event: Event, change: number) {
    event.stopPropagation();
    this.children = Math.max(0, this.children + change);
  }

  changeRooms(event: Event, change: number) {
    event.stopPropagation();
    this.rooms = Math.max(1, this.rooms + change);
  }

  apply() {
    const totalPeople = this.adults + this.children;
    const startDate = this.rangeDates ? this.formatDate(this.rangeDates[0]) : 'not selected';
    const endDate = this.rangeDates && this.rangeDates[1] ? this.formatDate(this.rangeDates[1]) : 'not selected';
    console.log(`Start Date: ${startDate}, End Date: ${endDate}, Adults: ${this.adults}, Children: ${this.children}, Total People: ${totalPeople}, Rooms: ${this.rooms}`);
  }
}