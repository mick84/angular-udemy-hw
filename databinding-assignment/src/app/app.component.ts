import { Component, Input } from '@angular/core';
import { NumberEvent, StateEvent } from './gamecontrol/gamecontrol.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public emittedNumbers: number[] = [];

  constructor() {}

  onNumberEmitted({ emittedNumber }: NumberEvent) {
    this.emittedNumbers.push(emittedNumber);
  }
  changeGameState({ state }: StateEvent) {
    switch (state) {
      case 'on':
        break;
      case 'off':
        this.emittedNumbers = [];
        break;
      case 'pause':
        break;
    }
  }
}
