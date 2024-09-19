import React from 'react';
import '../styles/PlayerControls.css';

const PlayerControls = () => {
  return (
    <div className="controls-container">
      <button className="control-button">Previous</button>
      <button className="control-button">Play/Pause</button>
      <button className="control-button">Next</button>
      <button className="control-button">Shuffle</button>
    </div>
  );
};

export default PlayerControls;