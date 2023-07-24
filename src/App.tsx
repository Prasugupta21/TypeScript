import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
function App() {
  return (
    <div className="App">
     <Button onClick={()=>alert('okay')} text="CLICK ME AGAIN"/>
    </div>
  );
}

export default App;
