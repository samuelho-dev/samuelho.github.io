import React from 'react';

function Main() {
  return (
    <main
      className="grid grid-cols-3 grid-rows-2 gap-4"
      style={{
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr',
      }}
    >
      <div className="bg-customWhite">
        <h5>Something Weird</h5>
      </div>
      <div className="bg-customOrange">
        <h5>Work History</h5>
      </div>
      <div className="bg-customLightPink">
        <h5>Game</h5>
      </div>
      <div className="bg-customBlue">
        <h5>Project</h5>
      </div>

      <div className="col-span-2 row-span-2 bg-customYellow">
        <h5>Odd</h5>
      </div>
    </main>
  );
}

export default Main;
