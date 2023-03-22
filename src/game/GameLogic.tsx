import SpawnLogic from './SpawnLogic';

function GameLogic(player: any, item: any, scene: any) {
  SpawnLogic(scene);
  const randomInterval = Math.random() * 4;
  // setTimeout(() => SpawnLogic(item, scene), randomInterval * 1000);
}

export default GameLogic;
