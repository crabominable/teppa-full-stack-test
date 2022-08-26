import User from '../interfaces/IUser';

import UserModel from '../models/User';

import { TResponseError } from '../types';

class UserService {
  model: any;

  constructor() {
    this.model = new UserModel();
  }

  create = async (
    user: User,
  ): Promise<void> => {
    await this.model.create(user);
  };

  getAll = async (): Promise<User[]> => {
    const allUsers = await this.model.getAll();

    return allUsers;
  };

  getOne = async (id: string): Promise<User | TResponseError> => {
    const uniqueUser = await this.model.getOne(id);

    const notFound = { error: '' }

    if (Object.keys(uniqueUser).length === 0 && uniqueUser.constructor === Object) {
      notFound.error = 'user not found'
    }

    return notFound.error === 'user not found' ? notFound : uniqueUser;
  };

  update = async (
    id: string,
    user: User,
  ): Promise<User> => {
    const uniqueUser = await this.getOne(id);

    const notFound = { error: '' }

    if (Object.keys(uniqueUser).length === 0 && uniqueUser.constructor === Object) {
      notFound.error = 'user not found'
    }

    const updatedUser = await this.model.update(id, user);

    return notFound.error === 'user not found' ? notFound : updatedUser;
  };

  delete = async (
    id: string,
  ): Promise<User> => {
    const uniqueUser = await this.getOne(id);

    const notFound = { error: '' }

    if (Object.keys(uniqueUser).length === 0 && uniqueUser.constructor === Object) {
      notFound.error = 'user not found'
    }

    const deletedUser = await this.model.delete(id);
    
    return notFound.error === 'user not found' ? notFound : deletedUser;
  };
}

export default UserService;