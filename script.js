'use strict';

import { world } from './src/gameData/place-data.js';
import getExits from './src/gameLogic/getExits.js';

world.forEach((place) => {
  console.log(place.longDescription);
  getExits(place);
});
