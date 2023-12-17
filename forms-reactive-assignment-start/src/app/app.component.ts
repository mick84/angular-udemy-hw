import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'forms-reactive-assignment-start';
  options: string[] = ['Stable', 'Critical', 'Finished'];
  public submitForm: FormGroup;
  constructor() {
    this.submitForm = new FormGroup({
      name: new FormControl(
        null,
        [Validators.required],
        [this.asyncValidateName]
      ),
      email: new FormControl(null, {
        validators: [Validators.email],
      }),
      status: new FormControl(this.options[1]),
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.submitForm.value);
    this.submitForm.reset({ status: this.options[1] });
  }
  syncValidateName(control: FormControl): { [s: string]: boolean } | null {
    return control.value === 'Test' ? { forbiddenName: true } : null;
  }
  asyncValidateName(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve(control.value === 'Test' ? { forbiddenName: true } : null),
        2000
      )
    );
  }
}
