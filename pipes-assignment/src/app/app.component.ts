import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
export type Server = {
  instanceType: string;
  name: string;
  status: string;
  started: Date;
};
@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'pipes-assignment';
  @Input() filteredStatus = '';
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });
  servers: Server[] = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
  ];

  getStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Date;
  }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    };
  }
  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'New Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
    });
  }
}
