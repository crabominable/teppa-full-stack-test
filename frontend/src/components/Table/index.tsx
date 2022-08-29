import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../store';
import { deleteUser, getAllUsers } from '../../redux/thunk/userExtraReducer';
import { setEditMode, setIdToBeEdited } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

import './main.css';
import Row from './components/Row';

function Table() {
  const dispatch: AppDispatch = useDispatch();
  const { users, editMode } = useSelector((state: any) => state.UserSlice);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const handleClick = ({ target }: any, id: any) => {
    if (target.id === 'edit' || target.parentElement.id === 'edit') {
      if (editMode === false) {
        dispatch(setIdToBeEdited(id));
        dispatch(setEditMode(true));
        return navigate("../edit", { replace: true });
      }
      dispatch(setEditMode(false));
    }

    if (target.id === 'delete' || target.parentElement.id === 'delete') {
      dispatch(deleteUser(id));
      dispatch(getAllUsers());
    }
  };

  return (
    <table className="userstable-container">
      <thead className="userstable-structure-container">
        <tr>
          <th className="userstable-thead-content">Id</th>
          <th className="userstable-thead-content">Nome</th>
          <th className="userstable-thead-content">Email</th>
          <th className="userstable-thead-content">Senha</th>
          <th className="userstable-thead-content">Editar</th>
          <th className="userstable-thead-content">Excluir</th>
        </tr>
      </thead>
      <tbody className="userstable-structure-container">
        { !users ? 'loading' : users.map((item: any, index: any) => (
          <Row key={index} handleClick={handleClick} id={item.id} name={item.name} email={item.email} phone={item.phone} />
        ))}
      </tbody>
    </table>
  )
}

export default Table;