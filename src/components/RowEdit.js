import React from "react";

export const RowEdit = ({ editFormData, handleEditFormDataChange }) => {
  return (
    <tr className="table__row">
      <td className="table__cell table__cell--edit">
        <input
          type="text"
          required="required"
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormDataChange}
        ></input>
      </td>
      <td className="table__cell table__cell--edit">
        <input
          type="text"
          required="required"
          name="lastName"
          value={editFormData.lastName}
          onChange={handleEditFormDataChange}
        ></input>
      </td>
      <td className="table__cell table__cell--edit">
        <input
          type="text"
          required="required"
          name="birthday"
          value={editFormData.birthday}
          onChange={handleEditFormDataChange}
        ></input>
      </td>
      <td className="table__cell table__cell--edit">
        <input
          type="text"
          required="required"
          name="superpowers"
          value={editFormData.superpowers}
          onChange={handleEditFormDataChange}
        ></input>
      </td>
      <td className="table__cell">
        <button className="btn btn--primary" type="submit">
          Save
        </button>
      </td>
    </tr>
  );
};
