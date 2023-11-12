import { Component, OnInit, EventEmitter, Output } from '@angular/core';
export type NumberEvent = { emittedNumber: number };
export type StateEvent = { state: 'pause' | 'on' | 'off' };
@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.scss'],
})
export class GamecontrolComponent implements OnInit {
  @Output('numberEmitted') emitter = new EventEmitter<NumberEvent>();
  @Output('gameState') stateEmitter = new EventEmitter<StateEvent>();
  public interval: any = null;
  public incrementedNumber: number = 0;
  constructor() {}
  ngOnInit(): void {}

  startGame(): void {
    console.log('Game started!');

    this.interval = setInterval(() => {
      this.emitter.emit({ emittedNumber: this.incrementedNumber++ });
    }, 1000);
  }

  stopGame(): void {
    clearInterval(this.interval);
    this.incrementedNumber = 0;
    this.interval = null;
    this.stateEmitter.emit({ state: 'off' });
    console.log('Game stopped!');
  }
}
