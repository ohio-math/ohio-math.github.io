import { Sprite } from '../framework/sprite.js';
import { Costume } from '../framework/costume.js';
import { Sound } from '../framework/sound.js';

export class Sprite_Fuel extends Sprite {
    constructor(init) {
        super();

        this.costumes = [
            new Costume("./assets/cbb55ea9b5f2c13db09a7cf88e534963.jpg")
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