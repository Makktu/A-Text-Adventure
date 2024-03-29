'use strict';

// data structure for places in the world
// each location is an object
// that consists of:
// Location number (int 1-??)
// hasVisited: whether the player has been here before
// Short Description (string)
// Long Description (string)
// Exits (array of ints that are Location numbers – a 0 is no exit)
// Items (array of strings)
// Events (presence of enemies, traps etc. (TBD))
// random extra description (array of things that can be seen over and above baseline description (TBD2))

export let world = [
  {
    location: 1,
    hasVisited: false,
    shortDescription: 'The Tower Courtyard',
    longDescription:
      'A shabby, weed-strewn courtyard at the base of The Great Tower. From here it looks a long way up.',
    exits: [4, 3, 0, 2, 0, 0],
    items: ['A rusted sword'],
    events: [],
  },
  {
    location: 2,
    hasVisited: false,
    shortDescription: 'Tower Stables',
    longDescription: 'The collapsed ruin of what was once a great stables.',
    exits: [0, 1, 0, 0, 0, 0],
    items: ['A rusted horseshoe.'],
    events: [],
  },
  {
    location: 3,
    hasVisited: false,
    shortDescription: 'Tower Gardens',
    longDescription:
      'The overgrown and weed-choked remnants of a great garden that was once the envy of two worlds.',
    exits: [0, 0, 0, 1, 0, 0],
    items: [],
    events: [],
  },
  {
    location: 4,
    hasVisited: false,
    shortDescription: 'Tower Entrance',
    longDescription:
      'A sturdy oaken door opens onto a set of winding stairs leading almost vertically up. A notice on the back of the door says <span style="color:red;">DEATH LIES ABOVE.</span>',
    exits: [0, 0, 1, 0, 1, 0],
    items: [],
    events: [],
  },
];
