import react, { useState } from 'react';
import data from './data.json'
import './App.css';

const App = () => {

  const [astronauts, setAstronauts] = useState(data)

  return (
    <div className="App">

    </div>
  );
}

export default App;
