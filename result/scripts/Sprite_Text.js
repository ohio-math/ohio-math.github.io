import { Sprite } from '../framework/sprite.js';
import { Costume } from '../framework/costume.js';
import { Sound } from '../framework/sound.js';

export class Sprite_Text extends Sprite {
    constructor(init) {
        super();

        this.costumes = [
            new Costume("./assets/17ed3c4f7c77f12d5dfe7e391f0d0252.svg")
        ];

        this.sounds = [
            new Sound("./assets/83a9787d4cb6f3b7632b4ddfebf74367.wav")
        ];

        this.x = init.x;
        this.y = init.y;
        this.costume = init.costume;
        this.direction = init.direction;
        this.size = init.size;
        this.rotation_style = init.rotation_style;
        this.is_clone = init.is_clone || false;
        this.visible = init.visible;
        this.rawCostumeData = [];
        this.rawSoundData = [];
    }
}