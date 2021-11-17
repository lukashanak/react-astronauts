import React from "react";

export const PopupModal = () => {
  return (
    <div className="popup_modal">
      <p>Do you really want to remove the astronaut from the list? </p>
      <div className="modal__buttons">
        <button
          className="btn btn--primary"
          onClick={() => {
            // setConfirmationOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          className="btn btn--success"
          onClick={() => {
            // deleteAstronaut();
            // setConfirmationOpen(false);
          }}
        >
          Yes, remove
        </button>
      </div>
    </div>
  );
};
