import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [
  {
    type: 'success',
    message: 'Successfully registered for the newsletter',
  },
  {
    type: 'info',
    message: 'This is an info alert',
  },
  {
    type: 'warning',
    message: 'Email address is already in use',
  },
];

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  signupForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    heardAboutUs: ['', Validators.required],
    reason: [''],
  });

  alert: Alert | undefined;
  alerts: Alert[] = ALERTS;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() { }

  signUp() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      console.log('Form Data:', formData);

      this.alert = this.alerts.find((a) => a.type === 'success');
      this.signupForm.reset();
      this.hideAlert();
    } else {
      this.alert = this.alerts.find((a) => a.type === 'warning');
    }
  }

  hideAlert() {
    setTimeout(() => {
      this.alert = undefined;
    }, 3000); // Hide the alert after 3 seconds
  }
}
