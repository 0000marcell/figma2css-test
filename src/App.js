import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="flex justify-between items-center ph3">
        <p>9:27</p>
        <div>
          <img src="cell.png" alt="cell" />
          <img src="wifi.png" alt="wifi" />
          <img src="battery.png" alt="battery" />
        </div>
      </header>
      <div className="ph3">
        <div>
          <img src="back.png" alt="back" />
        </div>
        <div className="flex flex-column">
          <h1 className="title">Register</h1>
          <input className="main-input content-box mb2 pl2 h2 pv2" 
            type="text" placeholder="Email address" />
          <input className="main-input content-box mb2 pl2 h2 pv2" 
            type="text" placeholder="Email address" />
          <button className="button content-box mb2 pl2 h2 pv2">NEXT</button>
        </div>
      </div>
    </div>
  );
}

export default App;
