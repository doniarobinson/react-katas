import React, { useState } from 'react';
import '../styles/metronome.css';
import click1Sound from '../assets/metronome/click1.wav';

export default function Metronome() {
  const [playing, setPlaying] = useState(false);
  const [bpm, setBpm] = useState(100);

  function playClick() {
    const click1 = new Audio(click1Sound);
    click1.play();
  }

  function startStop(e) {
    if (playing) {
      clearInterval(window.interval);
      setPlaying(false);
    } else {
      window.interval = setInterval(playClick, (60 / bpm) * 1000);
      setPlaying(true);
    }
  }

  function handleBpmChange(e) {
    const bpm = e.target.value;

    if (playing) {
      clearInterval(window.interval);
      window.interval = setInterval(playClick, (60 / bpm) * 1000);
    }

    setBpm(bpm);
  }

  return (
    <div className='metronome'>
      <div className='bpm-slider'>
        <div>{bpm} BPM</div>
        <input
          type='range'
          min='60'
          max='240'
          value={bpm}
          onChange={handleBpmChange}
        />
        <button onClick={startStop}>{playing ? 'Stop' : 'Start'}</button>
      </div>
    </div>
  );
}
