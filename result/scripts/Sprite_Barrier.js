import { Sprite } from '../framework/sprite.js';
import { Costume } from '../framework/costume.js';
import { Sound } from '../framework/sound.js';

export class Sprite_Barrier extends Sprite {
    constructor(init) {
        this.costumes = [
            new Costume("../assets/57acaafea2e9626f78d961211b54febb.svg")
        ];

        this.sounds = [
            new Sound("../assets/83a9787d4cb6f3b7632b4ddfebf74367.wav")
        ];

        this.x = init.x;
        this.y = init.y;
        this.costume = init.costume;
        this.direction = init.direction;
        this.size = init.size;
        this.rotation_style = init.rotation_style;
        this.is_clone = init.is_clone || false;
    }
}