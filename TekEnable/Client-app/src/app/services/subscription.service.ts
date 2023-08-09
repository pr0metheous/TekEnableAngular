import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Subscription } from '../models/subscription.model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private baseUrl = '/api/subscriptions'; 

  constructor(private http: HttpClient) { }

  signUp(subscription: Subscription): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .post<string>(`${this.baseUrl}/signup`, subscription, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    let errorMessage = 'An error occurred.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else if (error.status) {
      errorMessage = `Server Error: ${error.status} - ${error.statusText}`;
    }
    return throwError(errorMessage);
  }
}
