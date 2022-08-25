import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import 'dotenv/config';

import User from '../interfaces/IUser';

class UserModel {
  db: any;

  constructor() {
    initializeApp({
      credential: applicationDefault(),
      databaseURL: process.env.DATABASE_URL
    });
    this.db = getFirestore();
  }

  create = async (user: User) => {
    const userCollection = this.db.collection('users');

    await userCollection.add({ ...user })
  };

  getAll = async () => {
    const userCollection = this.db.collection('users');

    const allUsers = await userCollection.get();

    const finalRes: string[] = [];

    allUsers.forEach((doc: any) => {
      finalRes.push(doc.data());
    });

    return finalRes;
  };

  getOne = async (id: string) => {
    const userCollection = this.db.collection('users').doc(id);

    const uniqueUser = await userCollection.get();

    const finalRes = { ...uniqueUser.data() }

    return finalRes;
  };

  update = async (
    id: string,
    user: User,
  ) => {
    const userCollection = this.db.collection('users').doc(id);

    const updatedUser = await userCollection.doc(id).update({ ...user })

    return updatedUser;
  };

  delete = async (
    id: string,
  ) => {
    const userCollection = this.db.collection('users');

    const deletedUser = await userCollection.doc(id);

    return deletedUser;
  };
}

export default UserModel;