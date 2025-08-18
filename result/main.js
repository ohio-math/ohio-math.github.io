import { Stage } from './scripts/Stage.js';
import { Sprite_BountyHunter } from './scripts/Sprite_BountyHunter.js';
import { Sprite_Barrier } from './scripts/Sprite_Barrier.js';
import { Sprite_Fuel } from './scripts/Sprite_Fuel.js';
import { Sprite_Text } from './scripts/Sprite_Text.js';

var sprites = [
  new Stage({ costume: 1 }),
  new Sprite_BountyHunter({ x: -60, y: -181.79999999999995, costume: 3, direction: 90, size: 50, rotation_style: "all around" }),
  new Sprite_Barrier({ x: 102, y: -65, costume: 0, direction: 90, size: 80.41697691734922, rotation_style: "all around" }),
  new Sprite_Fuel({ x: -150, y: 12, costume: 0, direction: 90, size: 15, rotation_style: "all around" }),
  new Sprite_Text({ x: 0, y: 70, costume: 0, direction: 90, size: 100, rotation_style: "all around" })
];