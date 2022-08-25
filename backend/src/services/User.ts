import User from '../interfaces/IUser';

import UserModel from '../models/User';

class UserService {
  model: any;

  constructor() {
    this.model = new UserModel();
  }

  create = async (
    user: User,
  ): Promise<User> => {
    const newUser = await this.model.create(user);

    return newUser;
  };

  getAll = async (): Promise<User[]> => {
    const allUsers = await this.model.getAll();

    return allUsers;
  };

  getOne = async (id: string): Promise<User | null> => {
    const uniqueUser = await this.model.getOne(id);

    return uniqueUser;
  };

  update = async (
    id: string,
    user: User,
  ): Promise<User> => {
    const updatedUser = await this.model.update(id, user);

    return updatedUser;
  };

  delete = async (
    id: string,
  ): Promise<User> => {
    const deletedUser = await this.model.delete(id);

    return deletedUser;
  };
}

export default UserService;