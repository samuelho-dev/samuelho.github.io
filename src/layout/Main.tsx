import React from 'react';

function Main() {
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-4">
      <div className="col-span-1 row-span-1 bg-customWhite">
        <h5>Something Weird</h5>
      </div>
      <div className="col-span-1 row-span-1 bg-customOrange">
        <h5>Work History</h5>
      </div>
      <div className="col-span-1 row-span-1 bg-customLightPink">
        <h5>Game</h5>
      </div>
      <div className="col-span-1 row-span-1 bg-customBlue">
        <h5>Project</h5>
      </div>

      <div className="col-span-2 row-span-2 bg-customYellow">
        <h5>Odd</h5>
      </div>
    </div>
  );
}

export default Main;
