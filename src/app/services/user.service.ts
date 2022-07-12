import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPaginationInfo } from '../interfaces/pagination-info.interface';
import { IUser } from '../interfaces/user.interface';
import { API_URL } from '../urls-tokens';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  getUsers(
    paginationInfo: IPaginationInfo = {}
  ): Observable<{ users: IUser[]; paginationInfo: IPaginationInfo }> {
    return this.http
      .get<any>(`${this.apiUrl}/users`, {
        params: {
          ...paginationInfo,
        },
      })
      .pipe(
        map(({ data: users, support, ...paginationInfo }) => {
          return { users, paginationInfo };
        })
      );
  }
}
