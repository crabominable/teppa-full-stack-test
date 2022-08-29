import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ICreateUser,
  IUpdateUser,
} from '../../interfaces';

import UsersRequests from '../../utils';

export const createUser = createAsyncThunk(
  'UserSlice/createUser', (user: ICreateUser) => UsersRequests.createUser(user),
);

export const getAllUsers = createAsyncThunk(
  'UserSlice/getAllUsers', () => UsersRequests.getAllUsers(),
);

export const updateUser = createAsyncThunk(
  'UserSlice/updateUser', (user: IUpdateUser) => UsersRequests.updateUser(user),
);

export const deleteUser = createAsyncThunk(
  'UserSlice/deleteUser', (user: any) => UsersRequests.deleteUser(user),
);

export const extraReducers = (builder: any) => {
  builder.addCase(createUser
    .fulfilled, (state: any, action: any) => {
    const statusCode = 201;
    if (action.payload.statusCode === statusCode) {
      state.loading = 'succeeded';
    }
  })
    .addCase(createUser
      .rejected, (state: any) => {
      state.loading = 'failed';
    });

  builder.addCase(getAllUsers
    .fulfilled, (state: any, action: any) => {
    const statusCode = 200;
    if (action.payload.statusCode === statusCode) {
      state.loading = 'succeeded';
      state.users = action.payload.body;
    }
  })
    .addCase(getAllUsers
      .rejected, (state: any) => {
      state.loading = 'failed';
    });

  builder.addCase(updateUser
    .fulfilled, (state: any, action: any) => {
    console.log(state, action);
    /* const statusCode = 201;
        if (action.payload.statusCode === statusCode) {
          state.loading = 'succeeded';
        } */
  })
    .addCase(updateUser
      .rejected, (state: any, action: any) => {
      console.log(state, action);
      // state.loading = 'failed';
    });

  builder.addCase(deleteUser
    .fulfilled, (state: any, action: any) => {
    console.log(state, action);
    /* const statusCode = 201;
          if (action.payload.statusCode === statusCode) {
            state.loading = 'succeeded';
          } */
  })
    .addCase(deleteUser
      .rejected, (state: any, action: any) => {
      console.log(state, action);
      // state.loading = 'failed';
    });
};