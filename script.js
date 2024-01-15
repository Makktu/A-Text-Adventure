'use strict';

import { world } from './src/gameData/place-data.js';
import getExits from './src/gameLogic/getExits.js';

const displayArea = document.querySelector('.display_area');
const playerInfo = document.querySelector('.player_info');
const controlArea = document.querySelector('.control_area');

let playerLocationNumber = 1;
let locationDescription = '';

const startGame = (playerLocationNumber) => {
  renderPosition(playerLocationNumber);
};

const renderPosition = (playerLocationNumber) => {
  // go through world array until location matches player's
  world.forEach((location) => {
    if (location.location == playerLocationNumber) {
      // render all info and return it
      locationDescription +=
        `<span style="font-weight:bold;font-size:1.4em;">${location.shortDescription}</span>` +
        '<br /><br />' +
        location.longDescription +
        '<br/>';
      let exitsVisible = getExits(location);
      exitsVisible.forEach((exit) => {
        if (exit) {
          locationDescription += '<br/><br/>' + exit;
        }
      });
      return;
    }
  });

  displayArea.innerHTML = `<p>${locationDescription}</p><br /><br />`;
  // gets array containing description of exits from current location
  // let exitsVisible = getExits(place);
  // displayArea.innerHTML += `<p>${exitsVisible}</p><br /><br />`;
};

startGame(playerLocationNumber);
