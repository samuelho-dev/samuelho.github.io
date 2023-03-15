import Game from '@/components/Game';
import SomethingWeird from '@/components/SomethingWeird';
import React from 'react';

function Home({ handleRoute }) {
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-4">
      <div className="col-span-1 row-span-1 ">
        <div>
          <h3>Welcome!</h3>
          <h5>Take a look around</h5>
        </div>
        <SomethingWeird />
      </div>
      <div
        className="col-span-1 row-span-1 flex-col bg-customOrange"
        onClick={() => handleRoute('work-history')}
      >
        <h5>Work History</h5>
        <div className="mx-10 bg-customBlue">WorkHistory</div>
      </div>
      <div className="col-span-1 row-span-1 bg-customLightPink">
        <h5>Game</h5>
        <Game />
      </div>
      <div
        className="col-span-1 row-span-1 bg-customBlue"
        onClick={() => handleRoute('projects')}
      >
        <h5>Project</h5>
      </div>

      <div className="col-span-2 row-span-2 bg-customYellow">
        <h5>Odd</h5>
      </div>
    </div>
  );
}

export default Home;
