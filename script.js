'use strict';

import { world } from './src/gameData/place-data.js';
import { renderPosition } from './src/gameLogic/renderPosition.js';

const displayArea = document.querySelector('.display_area');
const playerInfo = document.querySelector('.player_info');
const controlArea = document.querySelector('.control_area');

let playerLocationNumber = 1;

const startGame = (playerLocationNumber) => {
  let allDescription = renderPosition(playerLocationNumber, world);
  displayArea.innerHTML = `<p>${allDescription}</p><br /><br />`;
};

startGame(playerLocationNumber);
