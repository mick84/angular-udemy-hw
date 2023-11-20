import { Component, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  constructor(private usersService: UsersService) {}
  onSetToActive(id: number) {
    //this.userSetToActive.emit(id);
    //this.usersService.ToggleActivity(true, id);
    this.usersService.activityChanged.emit({ on: true, id });
  }
}
