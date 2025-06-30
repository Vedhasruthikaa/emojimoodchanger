import React, { useState } from 'react';
import './App.css';
import MoodDisplay from './MoodDisplay';

function App() {
  const [mood, setMood] = useState(null);

  return (
    <div className={`container ${mood}`}> 
      <h1>How are you feeling today?</h1>
      <div className="buttons">
        <button className="btn happy" onClick={() => setMood("happy")}>😁 Happy</button>
        <button className="btn sad" onClick={() => setMood("sad")}>😔 Sad</button>
        <button className="btn excited" onClick={() => setMood("excited")}>🤠 Excited</button>
        <button className="btn angry" onClick={() => setMood("angry")}>😡 Angry</button>
      </div>
      <MoodDisplay value={mood} />
    </div>
  );
}

export default App;

