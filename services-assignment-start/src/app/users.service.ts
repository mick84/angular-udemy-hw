import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public activeUsers: string[] = ['Max', 'Anna'];
  public inactiveUsers: string[] = ['Chris', 'Manu'];
  public activityChanged = new EventEmitter<{ on: boolean; id: number }>();
  constructor(private counterService: CounterService) {}
  ToggleActivity(on: boolean, id: number) {
    if (on) {
      const [user] = this.inactiveUsers.splice(id, 1);
      this.activeUsers.push(user);
    } else {
      const [user] = this.activeUsers.splice(id, 1);
      this.inactiveUsers.push(user);
    }
    this.counterService.addToggle(on);
  }
}
