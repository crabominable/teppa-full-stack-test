import React from 'react';

import {
  Header,
  Form,
} from '../../components';

import './main.css';

function Edit() {
  return (
    <div>
      <Header />
      <h2 className='edit-page-container'>Edit Page</h2>
      <Form />
    </div>
  )
}

export default Edit;