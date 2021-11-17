import React from "react";

export const RowView = ({ astronaut, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="table__row">
      <td className="table__cell">{astronaut.firstName}</td>
      <td className="table__cell">{astronaut.lastName}</td>
      <td className="table__cell">{astronaut.birthday}</td>
      <td className="table__cell">{astronaut.superpowers}</td>
      <td className="table__cell">
        <div className="btn-group">
          <button
            className="btn"
            onClick={(event) => handleEditClick(event, astronaut)}
          >
            Edit
          </button>
          <button
            className="btn"
            onClick={() => handleDeleteClick(astronaut.id)}
          >
            X
          </button>
        </div>
      </td>
    </tr>
  );
};
