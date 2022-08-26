import { Request, Response } from 'express';

import Controller from './GenericController';
import UserService from '../services/User';

import User from '../interfaces/IUser';
import { TResponseError } from '../types';

class UserController extends Controller<User> {
  private $route: string;

  private objectNotFound: string;

  private service: any;

  constructor(
    route = '/users',
  ) {
    super();
    this.$route = route;
    this.objectNotFound = 'Object not found';
    this.service = new UserService();
  }

  get route() { return this.$route; }

  create = async (
    req: Request,
    res: Response<TResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      await this.service.create(body);
      
      return res.status(this.statusCode.Created)
        .json();
    } catch (err) {
      return res.status(this.statusCode.Internal)
        .json({ error: this.statusCode.Internal });
    }
  };

  getAll = async (
    _req: Request,
    res: Response<User[] | TResponseError>,
  ): Promise<typeof res> => {
    try {
      const allUsers = await this.service.getAll();
      return res.status(this.statusCode.Ok).json(allUsers);
    } catch (err) {
      console.log(err);
      return res.status(this.statusCode.Internal).json({ error: err });
    }
  };

  getOne = async (
    req: Request,
    res: Response<User | null | TResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const user = await this.service.getOne(id);
      if (user.error === 'user not found') {
        return res.status(this.statusCode.NotFound)
          .json({ error: this.objectNotFound });
      }
      return res.status(this.statusCode.Ok).json(user);
    } catch (err) {
      return res.status(this.statusCode.Internal).json({ error: err });
    }
  };

  update = async (
    req: Request,
    res: Response<User | null | TResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const updatedCar = await this.service.update(id, req.body);
      if (updatedCar.error === 'user not found') {
        return res.status(this.statusCode.NotFound)
          .json({ error: this.objectNotFound });
      }
      return res.status(this.statusCode.Ok).json(updatedCar);
    } catch (err) {
      return res.status(this.statusCode.Internal).json({ error: err });
    }
  };

  delete = async (
    req: Request,
    res: Response<TResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const deletedUser = await this.service.delete(id);
      if (deletedUser.error === 'user not found') {
        return res.status(this.statusCode.NotFound)
          .json({ error: this.objectNotFound })
      }
      return res.status(this.statusCode.NoContent).json();
    } catch (err) {
      console.log(err);
      return res.status(this.statusCode.Internal).json({ error: err });
    }
  };
}

export default UserController;