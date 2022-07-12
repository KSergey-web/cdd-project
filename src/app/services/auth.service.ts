import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../urls-tokens';
import { tap } from 'rxjs/operators';
import { ILoginData } from '../interfaces/login-data.interface';
import { ISignupData } from '../interfaces/signup-data.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  get authToken() {
    return localStorage.getItem('token');
  }

  private setSession(token: string) {
    localStorage.setItem('token', token);
  }

  register(newUser: ISignupData): Observable<any> {
    return this.http
      .post<{ token: string; id: string }>(`${this.apiUrl}/register`, newUser)
      .pipe(
        tap((res) => {
          this.setSession(res.token);
        })
      );
  }

  login(newUser: ILoginData): Observable<any> {
    return this.http
      .post<{ token: string }>(`${this.apiUrl}/login`, newUser)
      .pipe(
        tap((res) => {
          this.setSession(res.token);
        })
      );
  }
}
