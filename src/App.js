import React, { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data.json";
import "./App.css";
import { RowView } from "./components/RowView";
import { RowEdit } from "./components/RowEdit";
import { Fragment } from "react/cjs/react.production.min";
import { PopupModal } from "./components/PopupModal";

const App = () => {
  // ALL THE DATA SAVED HERE
  const [astronauts, setAstronauts] = useState(data);

  /* ========
  ADD FORM
  =========*/
  const [addFormData, setAddFormData] = useState({
    id: nanoid(),
    firstName: "",
    lastName: "",
    birthday: "",
    superpowers: "",
  });

  const handleAddFormDataChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddFormData({ ...addFormData, [name]: value });
  };

  const submitAddFormData = (event) => {
    event.preventDefault();
    setAstronauts([...astronauts, addFormData]);
    setAddFormData({
      id: nanoid(),
      firstName: "",
      lastName: "",
      birthday: "",
      superpowers: "",
    });
  };

  /* ========
  EDIT FORM FOR EDITING EXISTING ROWS
  =========*/

  // Active editing ID
  const [activeEditingId, setActiveEditingId] = useState(null);

  // Data of the EDIT FORM saved here

  const [editFormData, setEditFormData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    birthday: "",
    superpowers: "",
  });

  const handleEditFormDataChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const newAstronauts = astronauts;
    newAstronauts[activeEditingId] = editFormData;

    setAstronauts(newAstronauts);
    setActiveEditingId(null);
  };

  // Set Active editing ID once the user clicks on the click button + save current row view values into the editFormData
  const handleEditClick = (event, astronaut) => {
    event.preventDefault();
    // set Active editing ID
    setActiveEditingId(astronaut.id);
    // save current row data into the editFormData state
    setEditFormData({
      id: astronaut.id,
      firstName: astronaut.firstName,
      lastName: astronaut.lastName,
      birthday: astronaut.birthday,
      superpowers: astronaut.superpowers,
    });
  };

  // not working, probably because of not having an unique key on rows
  /*
  const handleDeleteClick = (id) => {
    setAstronauts(astronauts.filter((astronaut) => astronaut.id !== id));
  };
  */
  const [activeDeleteId, setActiveDeleteId] = useState(null);

  const handleDeleteClick = () => {
    const newAstronauts = [...astronauts];

    const index = astronauts.findIndex(
      (astronaut) => astronaut.id === activeDeleteId
    );

    newAstronauts.splice(index, 1);

    setAstronauts(newAstronauts);
  };

  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="App container">
      <form className="margin-bottom-big" onSubmit={handleEditFormSubmit}>
        <table className="table">
          <thead className="thead">
            <tr>
              <th className="table__cell">
                <i className="fas fa-sort-down"></i>First name
              </th>
              <th className="table__cell">
                <i className="fas fa-sort-down"></i>Second name
              </th>
              <th className="table__cell">
                <i className="fas fa-sort-down"></i>Birthday
              </th>
              <th className="table__cell">
                <i className="fas fa-sort-down"></i>Superpowers
              </th>
              <th className="table__cell">Actions</th>
            </tr>
          </thead>
          <tbody>
            {astronauts.map((astronaut) => (
              <Fragment>
                {activeEditingId === astronaut.id ? (
                  <RowEdit
                    editFormData={editFormData}
                    handleEditFormDataChange={handleEditFormDataChange}
                    key={`RowEdit${astronaut.id}`}
                  />
                ) : (
                  <RowView
                    astronaut={astronaut}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                    setPopupOpen={setPopupOpen}
                    setActiveDeleteId={setActiveDeleteId}
                    key={`RowView${astronaut.id}`}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
        {popupOpen && (
          <PopupModal
            setPopupOpen={setPopupOpen}
            handleDeleteClick={handleDeleteClick}
          />
        )}
      </form>
      <h2 className="text-center">Add new astronaut</h2>
      <form className="add__form" onSubmit={submitAddFormData}>
        <table className="table margin-bottom-small">
          <tbody>
            <tr className="table__row">
              <td className="table__cell table__cell--edit">
                <input
                  type="text"
                  required="required"
                  name="firstName"
                  placeholder="Enter the first name"
                  value={addFormData.firstName}
                  onChange={handleAddFormDataChange}
                ></input>
              </td>
              <td className="table__cell table__cell--edit">
                <input
                  type="text"
                  required="required"
                  name="lastName"
                  placeholder="Enter the second name"
                  value={addFormData.lastName}
                  onChange={handleAddFormDataChange}
                ></input>
              </td>
              <td className="table__cell table__cell--edit">
                <input
                  type="date"
                  required="required"
                  name="birthday"
                  placeholder="Enter birthday"
                  value={addFormData.birthday}
                  onChange={handleAddFormDataChange}
                ></input>
              </td>
              <td className="table__cell table__cell--edit">
                <input
                  type="text"
                  required="required"
                  name="superpowers"
                  placeholder="Enter superpowers"
                  value={addFormData.superpowers}
                  onChange={handleAddFormDataChange}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btn-wrapper">
          <button className="btn btn--long btn--primary">Add astronaut</button>
        </div>
      </form>
    </div>
  );
};

export default App;
