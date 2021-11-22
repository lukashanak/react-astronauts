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
  EDIT FORM
  =========*/

  const [activeEditingId, setActiveEditingId] = useState(null);

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

  const handleEditClick = (event, astronaut) => {
    event.preventDefault();

    setActiveEditingId(astronaut.id);

    setEditFormData({
      id: astronaut.id,
      firstName: astronaut.firstName,
      lastName: astronaut.lastName,
      birthday: astronaut.birthday,
      superpowers: astronaut.superpowers,
    });
  };

  const [activeDeleteId, setActiveDeleteId] = useState(null);

  const handleDeleteClick = () => {
    const newAstronauts = [...astronauts];

    const index = astronauts.findIndex(
      (astronaut) => astronaut.id === activeDeleteId
    );

    newAstronauts.splice(index, 1);

    setAstronauts(newAstronauts);
  };

  // POPUP TOGGLE
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="App container">
      <div className="header margin-bottom-small">
        <h1>AstronautsApp</h1>
        <p>
          In this app, you can add new astronauts to the list, remove them or
          edit them{" "}
        </p>
      </div>
      <form
        className="margin-bottom-big position-relative"
        onSubmit={handleEditFormSubmit}
      >
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
