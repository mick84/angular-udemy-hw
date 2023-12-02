import { OnInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  defaultSubscription: string = 'Advanced';
  private data = {
    email: '',
    password: '',
    subscriptionType: this.defaultSubscription,
  };
  constructor() {}
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.signupForm.value);
    this.signupForm.reset(this.data);
  }
}
