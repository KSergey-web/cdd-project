import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';

@Pipe({
  name: 'fio',
})
export class FioPipe implements PipeTransform {
  transform(user?: IUser | null, args?: any): string {
    if (!user) return `user ${user}`;
    return user.first_name + ' ' + user.last_name;
  }
}
