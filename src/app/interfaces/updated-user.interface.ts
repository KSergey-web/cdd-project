import { IUser } from './user.interface';

export interface IUpdatedUser extends Partial<IUser> {
  updatedAt: Date;
}
