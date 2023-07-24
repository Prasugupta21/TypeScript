import React from 'react';
import { CounterProvider } from './components/context/Counter';
import './App.css';
import Button from './components/Button';
function App() {
  return (
    <div className="App">
      <CounterProvider>
     <Button onClick={()=>alert('okay')} text="CLICK ME AGAIN"/>
     </CounterProvider>
    </div>
  );
}

export default App;
