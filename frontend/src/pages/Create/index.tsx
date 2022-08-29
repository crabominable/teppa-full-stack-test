import React from 'react';

import {
  Header,
  Form,
} from '../../components';

import './main.css';

function Create() {
  return (
    <div>
      <Header />
      <h2 className='create-page-container'>Create Page</h2>
      <Form />
    </div>
  )
}

export default Create;