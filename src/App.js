import react, { useState } from 'react';
import data from './data.json'
import './App.css';
import { RowView } from './components/RowView';

const App = () => {

  const [astronauts, setAstronauts] = useState(data)

  return (
    <div className="App container">
      <form>
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
              <RowView astronaut = {astronaut}/>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
