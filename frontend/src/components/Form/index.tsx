import React, { useState } from 'react';
// import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import schema from './components/schema';
import { createUser, getAllUsers, updateUser } from '../../redux/thunk/userExtraReducer';
import { AppDispatch } from '../../store';
import { setEditMode } from '../../redux/userSlice';

import './main.css';

function UserInput() {
  const [able, setAble] = useState(true);
  const [err, setError] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const { editMode, idToBeEdited } = useSelector((state: any) => state.UserSlice);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },

    validate: (values) => {
      setError(false);
      const { error } = schema.validate(values);
      if (error) {
        return setAble(true);
      }
      return setAble(false);
    },

    // eslint-disable-next-line consistent-return
    onSubmit: async (values) => {
      if (editMode === true) {
        dispatch(updateUser({ id: idToBeEdited, data: values }));
        dispatch(setEditMode(false));
        return dispatch(getAllUsers());
      }
      dispatch(createUser({ ...values }));
      dispatch(getAllUsers());
    },
  });

  return (
    <form className="userform-container" onSubmit={formik.handleSubmit}>
      <div className="userform-inputs-container">
        <input
          className="userform-input-content"
          type="text"
          placeholder="Nome"
          id="name"
          {...formik.getFieldProps('name')}
        />
        <input
          className="userform-input-content"
          type="text"
          placeholder="Email"
          {...formik.getFieldProps('email')}
        />
        <input
          className="userform-input-content"
          placeholder="Telefone"
          type="tel"
          id="phone"
          {...formik.getFieldProps('phone')}
        />
      </div>
      <button
        className="userform-submit-button"
        type="submit"
        disabled={able}
      >
        { !editMode ? 'Registrar' : 'Atualizar' }
      </button>
      {
        err && <span>Email ou telefone inválidos</span>
      }
    </form>
  );
}

export default UserInput;