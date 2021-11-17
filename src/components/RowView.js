import React from "react";

export const RowView = ({ astronaut, handleEditClick }) => {
  return (
    <tr className="table__row">
      <td className="table__cell">{astronaut.firstName}</td>
      <td className="table__cell">{astronaut.lastName}</td>
      <td className="table__cell">{astronaut.birthday}</td>
      <td className="table__cell">{astronaut.superpowers}</td>
      <td className="table__cell">
        <button
          className="btn btn--long"
          onClick={(event) => handleEditClick(event, astronaut)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};
