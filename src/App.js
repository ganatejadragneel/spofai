import React from 'react';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import PlayerControls from './components/PlayerControls';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Topbar />
      <Sidebar />
      <MainContent />
      <PlayerControls />
    </div>
  );
}

export default App;