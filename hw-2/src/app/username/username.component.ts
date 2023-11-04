import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss'],
})
export class UsernameComponent {
  username: string = 'initial name';
  setUsername(event: Event): void {
    this.username = (<HTMLInputElement>event.target).value;
  }
  resetUsername(): void {
    this.username = '';
  }
}
