import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import * as Tone from 'tone';
import { Sampler, Transport } from 'tone';
import hiHat from 'public/sounds/NAMI_Hi-Hat_Armani.wav';
import Snare from 'public/sounds/RL_-_Razor_Snare.wav';
import Kick from 'public/sounds/Slappy_Kick_35.wav';
import Bongo from 'public/sounds/SD3_BONGO33.wav';

import { gsap } from 'gsap';

const notes = [hiHat, Snare, Kick, Bongo];

const makeGrid = (notes: string[]) => {
  return notes.map((note, i) => {
    return Array.from({ length: 8 }, () => {
      return {
        key: `C${3 + i}`,
        note,
        isActive: false,
      };
    });
  });
};
function StepSequencer() {
  const [loaded, setLoaded] = useState(false);
  const [play, setPlay] = useState(false);
  const [tempo, setTempo] = useState(120);
  const stepSequencer = useRef<Tone.Sampler | null>(null);
  const [grid, setGrid] = useState(makeGrid(notes));
  useEffect(() => {
    stepSequencer.current = new Sampler(
      { C3: hiHat, C4: Snare, C5: Kick, C6: Bongo },
      {
        onload: () => setLoaded(true),
        onerror: () => setLoaded(false),
      },
    ).toDestination();
  }, []);

  let beat = 0;
  const handleLoop = () => {
    const repeat = (time: any) => {
      grid.forEach((row, rowIndex) => {
        const note = row[beat];
        if (note.isActive) {
          stepSequencer.current?.triggerAttackRelease(note.key, '8n', time);
        }
      });

      beat = (beat + 1) % 8;
    };

    Transport.bpm.value = tempo;
    Transport.scheduleRepeat(repeat, '8n');
  };

  const handlePlay = () => {
    if (loaded) {
      Tone.start();
      Tone.getDestination().volume.rampTo(-10, 0.0001);
      setLoaded(true);
    }

    if (play) {
      Tone.Transport.cancel();
      Tone.Transport.stop();
      setPlay(false);
    } else {
      handleLoop();
      Tone.Transport.start();
      setPlay(true);
    }
  };

  const handleNoteClick = (rowIdx: number, noteIdx: number) => {
    const copyGrid = [...grid];
    copyGrid[rowIdx][noteIdx].isActive = !copyGrid[rowIdx][noteIdx].isActive;
    setGrid(copyGrid);
  };

  const handleBpmChange = (e: any) => {
    setTempo(e.target.value);
  };

  return (
    <div className="flex w-full flex-col place-items-center">
      <div>
        <div className="flex w-full justify-end gap-4">
          <div className="flex gap-2">
            <label>Tempo :</label>
            <input
              type="number"
              className="w-12"
              value={tempo}
              onChange={handleBpmChange}
            />
          </div>
          <button onClick={handlePlay} className="bg-customRed px-2">
            {!play ? 'Play' : 'Pause'}
          </button>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col justify-evenly gap-1 rounded-lg bg-customRed px-2">
            {['Hat', 'Snare', 'Kick', 'Bongo'].map((drum, i) => (
              <h5 key={i} className="rounded-md bg-customBlue p-2 text-center">
                {drum}
              </h5>
            ))}
          </div>
          <div>
            {grid.map((col, rowIdx) => (
              <div key={rowIdx} className="flex gap-6 py-2">
                {col.map((note, noteIdx) => (
                  <button
                    disabled={!loaded}
                    className={`h-8 w-8  ${
                      note.isActive
                        ? 'rounded-lg bg-customGreen'
                        : 'rounded-md bg-customWhite'
                    }`}
                    onClick={() => handleNoteClick(rowIdx, noteIdx)}
                    key={`note-${rowIdx}-${noteIdx}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepSequencer;