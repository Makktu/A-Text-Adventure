'use strict';

import getExits from './getExits.js';

export const renderPosition = (playerLocationNumber, world) => {
  let locationDescription = '';

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

      if (location.location == 1 && !location.hasVisited) {
        locationDescription += `<br /><br /><span style="font-weight:bold;font-size:2em;color:greenyellow">Your adventure begins!</span>`;
        location.hasVisited = true;
      }
    }
  });
  return locationDescription;
};
