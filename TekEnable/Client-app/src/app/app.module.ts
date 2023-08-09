import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SubscriptionService } from './services/subscription.service'; // Import the SubscriptionService

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent // Include the SignupFormComponent in the declarations
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule, // Include HttpClientModule if you are using it
    AppRoutingModule // Include AppRoutingModule here
  ],
  providers: [SubscriptionService], // Add the SubscriptionService to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
