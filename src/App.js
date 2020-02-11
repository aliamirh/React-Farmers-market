import React from 'react';
import Header from './components/Header';
import ScheduleList from './components/ScheduleList';
import Navbar from './components/Navbar';
import ProduceList from './components/ProduceList';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <header>
      <Header/>
      </header>
      <ScheduleList/>
      <ProduceList/>
    </div>
  );
}

export default App;
