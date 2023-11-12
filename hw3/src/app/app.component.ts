import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hw3';
  showDetails: boolean = false;
  password: string = 'tuna';
  toggles: number = 0;
  dates: Date[] = [];
  toggleDetails(): void {
    this.showDetails = !this.showDetails;
    this.toggles++;
    this.dates.push(new Date(Date.now()));
  }
}
