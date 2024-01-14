'use strict';

// expand to show where exits lead to IF visited already

export default function getExits(place) {
  let directions = ['North', 'East', 'South', 'West'];
  for (let a = 0; a < 4; a++) {
    if (place.exits[a] !== 0) {
      console.log(`There is an exit to the ${directions[a]}`);
    }
  }
}
