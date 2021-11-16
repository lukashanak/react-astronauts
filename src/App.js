import react, { useState } from 'react';
import data from './data.json'
import './App.css';
import { RowView } from './components/RowView';
import { RowEdit } from './components/RowEdit';
import { Fragment } from 'react/cjs/react.production.min';

const App = () => {

  const [astronauts, setAstronauts] = useState(data)

  const [addFormData, setAddFormData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    birthday: "",
    superpowers: ""
  })

  const submitAddFormData = (event) => {
    event.preventDefault()

    setAstronauts([...astronauts, addFormData])
  }

  const handleAddFormDataChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    setAddFormData({...addFormData, [name]: value})
  }

  return (
    <div className="App container">
      <form className="margin-bottom-big">
        <table className="table">
          <thead className="thead">
          <tr>
              <th className="table__cell"><i className="fas fa-sort-down"></i>First name</th>
              <th className="table__cell"><i className="fas fa-sort-down"></i>Second name</th>
              <th className="table__cell"><i className="fas fa-sort-down"></i>Birthday</th>
              <th className="table__cell"><i className="fas fa-sort-down"></i>Superpowers</th>
              <th className="table__cell">Actions</th>
            </tr>
          </thead>
          <tbody>
            {astronauts.map(astronaut => (
              <Fragment>
                <RowView astronaut = {astronaut}/> 
                <RowEdit astronaut = {astronaut}/>
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2 className="text-center">Add new astronaut</h2>
      <form className="add__form" onSubmit={submitAddFormData}>
        <table className="table margin-bottom-small">
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
        </table>
        <div className="btn-wrapper">
          <button className="btn btn--long btn--primary">Add astronaut</button> 
        </div>
      </form>
    </div>
  );
}

export default App;
