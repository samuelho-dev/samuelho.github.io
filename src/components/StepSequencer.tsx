import React, { useEffect, useRef, useState } from 'react';
import { Sampler } from 'tone';
import hiHat from 'public/sounds/NAMI_Hi-Hat_Armani.wav';
import Snare from 'public/sounds/RL_-_Razor_Snare.wav';
import Kick from 'public/sounds/Slappy_Kick_35.wav';
import Bongo from 'public/sounds/SD3_BONGO33.wav';

const notes = [hiHat, Snare, Kick, Bongo];

const makeGrid = (notes: string[]) => {
  const rows = [];

  for (const note of notes) {
    const row = [];

    for (let i = 0; i < 8; i++) {
      row.push({
        note: note,
        isActive: false,
      });
    }
    rows.push(row);
  }

  return rows;
};

function StepSequencer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [grid, setGrid] = useState(makeGrid(notes));
  const stepSequencer = useRef(null);

  useEffect(() => {
    stepSequencer.current = new Sampler(
      { C3: hiHat },
      {
        onload: () => setIsLoaded(true),
      },
    ).toDestination();
  });

  const handlePlay = () => {
    stepSequencer.current.triggerAttackRelease('C3', '8n');
  };

  const handleNoteClick = (colIdx: number, rowIdx: number) => {
    const copyGrid = [...grid];
    copyGrid[colIdx][rowIdx].isActive = !copyGrid[colIdx][rowIdx].isActive;
    setGrid(copyGrid);
  };
  return (
    <div>
      <button disabled={!isLoaded} onClick={handlePlay}>
        Cmon
      </button>
      <h1>StepSequencer</h1>
      {grid.map((col, colIdx) => (
        <div key={colIdx} className="flex gap-6 py-2">
          {col.map((note, rowIdx) => (
            <button
              className={`h-8 w-8  ${
                note.isActive
                  ? 'rounded-lg bg-customGreen'
                  : 'rounded-md bg-customWhite'
              }`}
              onClick={() => handleNoteClick(colIdx, rowIdx)}
              key={`note-${colIdx}-${rowIdx}`}
            ></button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default StepSequencer;
