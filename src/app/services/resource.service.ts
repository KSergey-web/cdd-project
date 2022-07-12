import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPaginationInfo } from '../interfaces/pagination-info.interface';
import { IResource } from '../interfaces/resource.interface';
import { API_URL } from '../urls-tokens';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  getResources(
    paginationInfo: IPaginationInfo = {}
  ): Observable<{ resources: IResource[]; paginationInfo: IPaginationInfo }> {
    return this.http
      .get<any>(`${this.apiUrl}/unknown`, {
        params: {
          ...paginationInfo,
        },
      })
      .pipe(
        map(({ data: resources, support, ...paginationInfo }) => {
          return { resources, paginationInfo };
        })
      );
  }
}
