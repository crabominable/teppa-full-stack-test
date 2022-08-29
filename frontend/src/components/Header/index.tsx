import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../store';
import { setEditMode, setIdToBeEdited } from '../../redux/userSlice';

import './main.css'

function Header() {
  const dispatch: AppDispatch = useDispatch();
  const { editMode, idToBeEdited } = useSelector((state: any) => state.UserSlice);

  function handleClick() {
    if (editMode === true && idToBeEdited !== null) {
      dispatch(setIdToBeEdited(null));
      dispatch(setEditMode(false));
    }
  }

  return (
    <div className='header-container'>
      <h1 className='header-title'>Teppa users dashboard</h1>
      <p className='header-title-text'>Clique <Link to='/create' onClick={handleClick}>aqui</Link> para criar um usuário</p>
    </div>
  )
}

export default Header;