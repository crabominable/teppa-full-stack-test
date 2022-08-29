import React from 'react';

import '../main.css';

import {
  Editar,
  Excluir,
} from '../../../images';

function Row({ handleClick, id, name, email, phone }: any) {
  return (
    <tr>
      <td className="userstable-row-content">{id}</td>
      <td className="userstable-row-content">{name}</td>
      <td className="userstable-row-content">{email}</td>
      <td className="userstable-row-content">{phone}</td>
      <td className="userstable-row-content">
        <button
          className="userstable-row-edit-button"
          type="button"
          id="edit"
          onClick={(event: any) => handleClick(event, id)}
        >
          <img
            className="userstable-icon"
            src={Editar}
            alt="editar"
          />
        </button>
      </td>
      <td className="userstable-row-content">
        <button
          className="userstable-row-delete-button"
          type="button"
          id="delete"
          onClick={(event: any) => handleClick(event, id)}
        >
          <img
            className="userstable-icon"
            src={Excluir}
            alt="excluir"
          />
        </button>
      </td>
    </tr>
  )
}

export default Row