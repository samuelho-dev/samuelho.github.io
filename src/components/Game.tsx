import React, { useState } from 'react';
import Routes from '../../types/types';

interface GameProps {
  handleGameModal: Routes['handleGameModal'];
  gameModal: Routes['gameModal'];
}

function Game({ handleGameModal, gameModal }: GameProps) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      {gameModal ? (
        <div>Started</div>
      ) : (
        <button
          onClick={handleGameModal}
          className="flex h-fit w-fit justify-center bg-customWhite p-4"
        >
          Start Game
        </button>
      )}
    </div>
  );
}

export default Game;
