import React from "react";

export const PopupModal = ({ setPopupOpen, handleDeleteClick }) => {
  return (
    <div className="popup__modal">
      <p>Do you really want to remove the astronaut from the list? </p>
      <div className="modal__buttons">
        <button
          className="btn btn--primary"
          onClick={() => {
            setPopupOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          className="btn btn--success"
          onClick={() => {
            handleDeleteClick();
            setPopupOpen(false);
          }}
        >
          Yes, remove
        </button>
      </div>
    </div>
  );
};
