import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class CounterService {
  public activations: number = 0;
  public deactivations: number = 0;
  addToggle(on: boolean) {
    this[on ? 'activations' : 'deactivations']++;
    console.log(
      'activations: ',
      this.activations,
      'deactivations: ',
      this.deactivations
    );
  }
}
