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
      <div className="bg-customWhite">This is column 1, row 1</div>
      <div className="bg-customOrange">This is column 2, row 1</div>
      <div className="bg-customLightPink">This is column 3, row 1</div>
      <div className="bg-customBlue">This is column 1, row 2</div>

      <div className="col-span-2 row-span-2 bg-customYellow">
        This div takes up the space of the bottom middle and right grid area
        boxes
      </div>
    </main>
  );
}

export default Main;
