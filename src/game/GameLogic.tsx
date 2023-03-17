import SpawnLogic from './SpawnLogic';

function GameLogic(player, item, scene) {
  SpawnLogic(item, scene);
  const randomInterval = Math.random() * 4;
  setTimeout(() => SpawnLogic(item, scene), randomInterval * 1000);
}

export default GameLogic;
