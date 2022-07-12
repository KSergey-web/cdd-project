import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPaginationInfo } from '../interfaces/pagination-info.interface';
import { IUpdatedUser } from '../interfaces/updated-user.interface';
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

  deleteUser(user: IUser): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${user.id}`);
  }

  getUserById(userId: number): Observable<IUser> {
    return this.http
      .get<{ data: IUser }>(`${this.apiUrl}/users/${userId}`)
      .pipe(
        map(({ data: user }) => {
          return user;
        })
      );
  }

  //отправляю всего юзера, потому что в тз стоит put, а не patch
  updateUser(user: IUser): Observable<IUpdatedUser> {
    return this.http.patch<any>(`${this.apiUrl}/users/${user.id}`, user).pipe(
      map((res) => {
        res.updatedAt = new Date(res.updatedAt);
        return res as IUpdatedUser;
      })
    );
  }
}
