import React from 'react';
import { Note } from '../../types/types';

function StepSequencer() {
  return <div>StepSequencer</div>;
}

export default StepSequencer;

const notes = ['/'];

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
