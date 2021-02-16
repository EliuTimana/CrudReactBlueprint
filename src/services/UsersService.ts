import { axiosApi, toPromise } from '../ApiConfig';
import { User } from '../models';

export class UsersService {
  public static getAll() {
    return toPromise<User[]>(axiosApi.get<User[]>('/users'));
  }
}
