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
      finalRes.push({ id: doc.id, ...doc.data()});
    });

    return finalRes;
  };

  getOne = async (id: string) => {
    const userCollection = this.db.collection('users').doc(id);

    const uniqueUser = await userCollection.get();

    const finalRes = { id: uniqueUser.id, ...uniqueUser.data() }

    return finalRes;
  };

  update = async (
    id: string,
    user: User,
  ) => {
    const userCollection = this.db.collection('users').doc(id);

    await userCollection.update({ ...user });

    const finalRes = {
      id,
      ...user
    }

    return finalRes;
  };

  delete = async (
    id: string,
  ) => {
    const userCollection = this.db.collection('users');
    
    await userCollection.doc(id).delete();
  };
}

export default UserModel;