import react, { useState } from 'react';
import data from './data.json'
import './App.css';
import { RowView } from './components/RowView';
import { RowEdit } from './components/RowEdit';
import { Fragment } from 'react/cjs/react.production.min';

const App = () => {

  const [astronauts, setAstronauts] = useState(data)


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
      <h2 className="text-center">Add new item</h2>
      <form className="add__form">
        <table className="table margin-bottom-small">
        <tr className="table__row">
            <td className="table__cell table__cell--edit">
                <input
                 type="text"
                 required="required"
                 name="firstName"
                 placeholder="Enter the first name"
                ></input>
            </td>
            <td className="table__cell table__cell--edit">
                <input
                 type="text"
                 required="required"
                 name="secondName"
                 placeholder="Enter the second name"
                ></input>
            </td>
            <td className="table__cell table__cell--edit">
                <input
                 type="text"
                 required="required"
                 name="birthday"
                 placeholder="Enter birthday"
                ></input>
            </td>
            <td className="table__cell table__cell--edit">
                <input
                 type="text"
                 required="required"
                 name="superpowers"
                 placeholder="Enter superpowers"
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
