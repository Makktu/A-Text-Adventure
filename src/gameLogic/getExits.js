'use strict';

// expand to show where exits lead to IF visited already

export default function getExits(location) {
  let directions = ['North', 'East', 'South', 'West', 'Upstairs', 'Downstairs'];
  let exitsVisible = new Array(6);
  for (let a = 0; a < 6; a++) {
    if (location.exits[a] !== 0) {
      if (a < 4) {
        exitsVisible[
          a
        ] = `There is an exit to the <span style="color:lightgreen;">${directions[a]}</span>`;
      } else {
        exitsVisible[
          a
        ] = `There is an exit leading <span style="color:lightgreen;">${directions[a]}</span>`;
      }
    }
  }
  return exitsVisible;
}
